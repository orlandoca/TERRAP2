const BookingController = require("../controllers/Booking_controller");
module.exports = function (app) {
  // metodos booking
  app.post("/api/booking/createBooking", BookingController.createBooking);
  app.get("/api/booking/getAll", BookingController.getAllBooking);
  app.get("/api/booking/get/:id", BookingController.getBooking);
  app.put("/api/booking/update/:id", BookingController.updateBooking);
  app.delete("/api/booking/delete/:id", BookingController.deleteBooking);

  // metodo user
  app.get("/api/user/get/:id", BookingController.getUser);
  app.post("/api/createUser", BookingController.createUser);
  app.get("/api/user/getAll", BookingController.getAllUser);
  app.put("/api/user/update/:id", BookingController.updateUser);
  app.delete("/api/user/delete/:id", BookingController.deleteUser);
};
