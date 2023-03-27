const mongoose = require("mongoose");
const User = require("./User_model");
const AutoPopulate = require("mongoose-autopopulate");

const BookingSchema = new mongoose.Schema({
  building_name: {
    type: String,
  },
  reason: {
    type: String,
    minlength: [3, "El mínimo es de 3 caracteres"],
    //required: [true, "Este dato es requerido"],
  },

  quantity: {
    type: Number,
    //minlength: [1, "El mínimo es de 1"],
    // required: [true, "Este dato es requerido"],
  },
  date: {
    type: String,
    // required: [true, "Este dato es requerido"],
  },
  start_time: {
    type: String,
    // required: [true, "Este dato es requerido"],
  },
  end_time: {
    type: String,
    // required: [true, "Este dato es requerido"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    autopopulate: true,
    // required: [true, "Este dato es requerido"],
  },
});

module.exports.Booking = mongoose.model("Booking", BookingSchema);
