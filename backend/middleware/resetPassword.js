const Users = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const resetPassword = async (req, res) => {
  let token = req.params.token;
  const { password } = req.body;
  const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  const result = await Users.findOne({ email: user.email });

  if (!result) {
    res.send("error");
  } else {
    let hashed = await bcrypt.hash(password, 10);
    result.password = hashed;
    await result.save();
    res.send("Votre mot de passe a été changer");
  }
};

module.exports = { resetPassword };
