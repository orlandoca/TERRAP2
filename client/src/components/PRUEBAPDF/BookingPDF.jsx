import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {format} from 'date-fns'
// format DEBE SER DESDE LA API-->Ver para adaptar al proyecto
export default function BookingPDF(){
    const generatePDF = tickets=>{
    //INICIALIZO jsPDF
    const doc= new jsPDF();
    //Las columnas y sus títulos
    const tableColumn=["name","phone","quantity","reason","date","start_time","send_time"];
    const tableRows=[];
    //Para cada ticket pasar toda su informacion dentro de un arreglo
    tickets.forEach(ticket=>{
        const ticketData=[
            ticket.name,
            ticket.phone,
            ticket.quantity,
            ticket.reason,
            ticket.date,
            ticket.start_time,
            ticket.end_time,

            format(new Date(ticket.update_at), "yyyy-MM-dd")
        ];
        //Poner cada informacion del ticket en una fila
        table.Rows.push(ticketData);
    });
    //startY es como una especie de margin-top
    doc.autoTable(tableColumn, tableRows,{startY:20});
    const date= Date().split(" ");
    //Utilizamos date string para generar el nombre de nuestro archivo
    const dateStr= date[0]+date[1]+date[2]+date[3]+date[4]+date[5]+date[6];
    //ticket title y margin top + margun left
    doc.text("Reportes de reservas.",14,15);
    //Definimos el nombre de nuestro archivo PDF
    doc.save(`reporteReservas.pdf`);
    }
}