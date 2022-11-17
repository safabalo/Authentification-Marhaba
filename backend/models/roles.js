const mongoose = require("mongoose");
const { Schema } = mongoose;

const Roles = new Schema({
  roles: String,
});

let Role = mongoose.model("Role", Roles);

module.exports = Role;
