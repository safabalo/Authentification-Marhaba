const mongoose = require("mongoose");
const { Schema } = mongoose;

const Users = new Schema({
  nom: String,
  prenom: String,
  email: String,
  status: {
    type: Boolean,
    default: false,
  },
  password: String,
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
});

let User = mongoose.model("Users", Users);

module.exports = User;
