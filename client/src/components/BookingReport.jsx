import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingGeneratePDF from "./BookingGeneratePDF";

const BookingReport = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const getAllBooking = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/booking/getAll"
        );
        console.log("Para ver que tiene Booking: ", booking);
        setBooking(response.data);
      } catch (err) {
        console.log("error");
      }
    };

    getAllBooking();
  }, [booking]);
  return (
    <div>
      <button
        className="btn btn-info ml-10"
        onClick={() => BookingGeneratePDF(booking)}
      >
        Generar reporte
      </button>
    </div>
  );
};

export default BookingReport;
