import jsPDF from 'jspdf';
import 'jspdf-autotable'; 
// import { format } from 'date-fns';

const BookingGeneratePDF = booking => {
  const doc = new jsPDF();
  const tableColumn = ["Cantidad de personas", "Fecha", "Nombre"];
  const tableRows = [];
  
  booking.forEach(booking => {
    const bookingData = [
      booking.quantity,
      booking.date,
      booking.user.name
    ];
    
    tableRows.push(bookingData);
  });
  
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  
  const date = new Date().toISOString().slice(0, 10);
  doc.text(`Reporte de reservas (${date})`, 14, 15);
  
  doc.save(`ReporteReservas_${date}.pdf`);
}

export default BookingGeneratePDF;