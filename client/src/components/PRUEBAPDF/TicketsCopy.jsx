import React, { useEffect, useState } from "react";
import BookingPDF from './BookingPDF'

const Tickets = () => {
  
  const [tickets, setTickets] = useState([]);
  

    useEffect(() => {
    const getAllTickets = async () => {
      try {
        const response = await axios.get("http://localhost:8000/booking");// /api/user/getAll
        //Falta cambiar el nombre de la db
        setTickets(response.data.tickets);
      } catch (err) {
        console.log("error");
      }
    };
    getAllTickets();
  }, []);

// const reportTickets = tickets.filter(ticket => ticket.status === "completed");
  
  return (
    <div>
      <div className="container mb-4 mt-4 p-3">
        <div className="row">
          {user.user.role === "user" ? ( //No aplica
            <> </>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => generatePDF(setTickets)}
                            //Verificar si va a funcionar el de generatePDF 
                            //con lo que le puse como parámetro, 
                            //porque el modelo usaba el de reportTickets 
                            //pero para nuestro caso no aplica porque no necesitamos filtrar por completado o no.
            >
              Generate report
            </button>
          )}
        </div>
      </div>
      <TicketsComponent tickets={tickets} />
    </div>
  );
};

export default Tickets;