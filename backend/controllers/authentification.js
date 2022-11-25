const bcrypt = require("bcryptjs");
const Users = require("../models/users");
const jwt = require("jsonwebtoken");
const { transporter } = require("../middleware/nodemail");
const Role = require("../models/roles");

// Registration

const register = async (req, res) => {
  const { nom, prenom, email, password } = req.body;
  if (!nom || !prenom || !email || !password) {
    res.status(400);
    res.json({ message: "all fiels id required" });
  }
  const double = await Users.findOne({ email: email }).exec();
  if (double) return res.status(409).json({ message: "This email already exist" }); //Conflict
  const role = await Role.findOne({ roles: "client" });
  // if(!role) return res.send('not found')
  try {
    let hashedpassword = await bcrypt.hash(password, 10);
    const users = await Users.create({
      nom,
      prenom,
      email,
      roles: role._id,
      password: hashedpassword,
    });
    const userToken = jwt.sign({ _id: users.id, email: users.email, nom: users.nom, prenom: users.prenom, roles: users.roles }, process.env.ACCESS_TOKEN_SECRET);

    let mailer = {
      from: ' "Verify your email" <marhababrief1@gmail.com> ',
      to: users.email,
      subject: "Marhaba -Verify your email",
      html: `<h2>${users.prenom} ${users.nom} Merci pour votre inscription</h2>
            <h4> Veuillez vous confirmé votre email pour continuer...
            <a href="http://localhost:3000/verify-email/${userToken}">Cliquer pour verifier </a>`,
    };
    await transporter.sendMail(mailer);

    res.send(`New user ${users} created!`);
  } catch (err) {
    res.status(500);
  }
};

// Login

const Login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    res.json({ message: "Username and password are required." });
  }
  const user = await Users.findOne({ email }).populate("roles");
  const role = user.roles[0].roles;
  const match = await bcrypt.compare(password, user.password);
  if (match && user.status == true) {
    const token = jwt.sign({ _id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
    user.token = token;
    await user.save();
    res.cookie("jwt", token, { httpOnly: false, maxAge: 24 * 60 * 60 * 1000 });
    res.status(200).json({
      token,
      user,
      role,
    });
  } else {
    res.status(401);
    res.json({ message: "Unauthorized check your email to verify your account or enter correct password" });
  }
};

//Forget Password

const forgetPassword = async (req, res) => {
  const { email } = req.body;
  const user = await Users.findOne({ email: email });
  if (!user) {
    res.status(401).json({ message: "Ce email n'existe pas" });
  } else {
    const token = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET);
    let mailer = {
      from: ' "Changer votre mot de passe" <marhababrief1@gmail.com> ',
      to: user.email,
      subject: "Marhaba -Verify your email",
      html: `<h2>${user.prenom} ${user.nom} Avez vous perdu votre mot de passe ?</h2>
         <h4> Veuillez cliquer sur le lien pour changer votre mot de passe...
         <a href="http://localhost:3000/resetpassword/${token}">Cliquer pour verifier </a>`,
    };
    await transporter.sendMail(mailer);
    res.send("Consultez votre boite email");
  }
};

//Logout

const logout = async (req, res) => {
  await res.clearCookie("jwt");
  try {
    res.send("Logout Successfully");
  } catch {
    res.send("error");
  }
};

module.exports = {
  register,
  Login,
  forgetPassword,
  logout,
};
