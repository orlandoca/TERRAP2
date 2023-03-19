const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, "El mínimo es de 3 caracteres"],
    // required: [true, "Este dato es requerido"],
  },
  phone: {
    type: Number,
    minlength: [9, "El mínimo es de 9 dígitos"],
    // required: [true, "Este dato es requerido"],
  },
  document: {
    type: String,
    // required: [true, "Este dato es requerido"],
  },
});

module.exports.User = mongoose.model("User", UserSchema);
