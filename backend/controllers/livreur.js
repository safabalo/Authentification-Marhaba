const bcrypt = require('bcryptjs');
const Users = require('../models/users');
const jwt = require('jsonwebtoken');
const { transporter } = require("../middleware/nodemail");
const Role = require("../models/roles");



const AddingLivreur = async (req, res) =>{

const { nom, prenom, email} = req.body;
  if (!nom || !prenom || !email) {
    res.status(400);
    res.json({ message: "all fiels id required" });
  }
  let password = Math.random().toString(36).substr(2, 8);
  const double = await Users.findOne({ email: email }).exec();
  if (double) return res.status(409).json({ message: "This email already exist" }); //Conflict
  const role = await Role.findOne({ roles: "livreur" });
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
            <h3> Votre mot de passe est: <strong>${password}</strong></h4>
            <h4> Veuillez vous confirmé votre email pour continuer...
            <a href="http://localhost:3001/api/auth/verify-email/${userToken}">Cliquer pour verifier </a>`,
    };
    await transporter.sendMail(mailer);

    res.status(201).json({ success: `New user ${users} created!` });
  } catch (err) {
    res.status(500);
  }
};

const livreurLogin = async (req, res) =>{ 
    let token = req.cookies.jwt;
    if(!token){
        console.log('error')
    }else{
        const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        const id = verify._id
        const user = await Users.findOne({_id: id}).populate("roles")

        const role = user.roles[0].roles

        if(role === "livreur" ){
            res.send(`Bonjour ${user.prenom} ${user.nom}, votre rôle est : ${role}`)
        }
        else{
            res.send("you don't have acces to this page")
        }
    }   
}

module.exports = {
    livreurLogin,
    AddingLivreur
}