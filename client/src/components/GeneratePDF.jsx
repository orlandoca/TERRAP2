import jsPDF from "jspdf";
import "jspdf-autotable";
// import { format } from 'date-fns';

const GeneratePDF = (users) => {
  const doc = new jsPDF();
  const tableColumn = ["Nombre", "Nro de telefono", "Documento"];
  const tableRows = [];

  users.forEach((user) => {
    const userData = [
      user.name,
      user.phone,
      user.document.replace(/\B(?=(\d{3})+(?!\d))/g, "."),
    ];

    tableRows.push(userData);
  });

  doc.autoTable(tableColumn, tableRows, { startY: 20 });

  const date = new Date().toISOString().slice(0, 10);
  doc.text(`Reporte de usuarios (${date})`, 14, 15);

  doc.save(`ReporteUsuarios_${date}.pdf`);
};

export default GeneratePDF;
