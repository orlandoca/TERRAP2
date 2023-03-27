const { Booking, populate } = require("../models/Booking_model");
const { User } = require("../models/User_model");

//! CREAR UNA NUEVA RESERVA
exports.createBooking = async (req, res) => {
  try {
    const {
      building_name,
      reason,
      quantity,
      date,
      start_time,
      end_time,
      userId,
    } = req.body;

    console.log(typeof reason);
    console.log(typeof quantity);
    console.log(typeof date);
    console.log(typeof start_time);
    console.log(typeof end_time);
    console.log(typeof userId);

    // Verifica si el usuario existe
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "El usuario no existe" });
    }

    // Crea la reserva con la referencia al usuario
    const booking = await Booking.create({
      building_name,
      reason,
      quantity: +quantity,
      date,
      start_time,
      end_time,
      user: user._id,
    });

    return res.status(201).json(booking);
  } catch (error) {
    return res.status(500).json({ message: "Hubo un error" });
  }
};
//!FIN CREAR UNA NUEVA RESERVA

//! OBTIENE TODAS LAS RESERVAS
module.exports.getAllBooking = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user");
    return res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Hubo un error" });
  }
};
//! FIN OBTIENE TODAS LAS RESERVAS

//! / Obtiene una reserva por ID
module.exports.getBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id).populate("user");
    if (!booking) {
      return res.status(404).json({ message: "La reserva no existe" });
    }

    return res.status(200).json(booking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Hubo un error" });
  }
};
//! FIN / Obtiene una reserva por ID

//!Actualiza una reserva por ID
exports.updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      building_name,
      reason,
      quantity,
      date,
      start_time,
      end_time,
      userId,
    } = req.body;

    // Verifica si la reserva existe
    let booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: "La reserva no existe" });
    }

    // Verifica si el usuario existe
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "El usuario no existeee" });
    }

    // Actualiza la reserva con la referencia al usuario
    booking.building_name = building_name;
    booking.reason = reason;
    booking.quantity = quantity;
    booking.date = date;
    booking.start_time = start_time;
    booking.end_time = end_time;
    booking.user = user._id;

    await booking.save();

    return res.status(200).json(booking);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Hubo un error" });
  }
};
//! FIN Actualiza una reserva por ID

//! Elimina una reserva por ID

module.exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    // Verifica si la reserva existe
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: "La reserva no existe" });
    }

    // await booking.remove();
    await booking.deleteOne();

    return res.status(200).json({ message: "Reserva eliminada" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Hubo un error" });
  }
};
//!METODO CREAR USUARIO
module.exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};

//! FIN Elimina una reserva por ID

//METODO ELIMINar USUARIO
module.exports.deleteUser = async (request, response) => {
  try {
    const user = await User.deleteOne({ _id: request.params.id });
    response.json(user);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};

// traemos un UNICO USUARIO
module.exports.getUser = async (request, response) => {
  try {
    const user = await User.findOne({ _id: request.params.id });
    response.json(user);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};
//listamos los usuarios
module.exports.getAllUser = async (request, response) => {
  try {
    const users = await User.find();
    response.json(users);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};

module.exports.updateUser = async (request, response) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true, runValidators: true }
    );
    response.json(user);
  } catch (error) {
    response.status(400);
    response.json(error);
  }
};
