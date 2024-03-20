import React from 'react';
import { Document, Page, PDFDownloadLink } from '@react-pdf/renderer';

// Establecer el worker de PDF.js para evitar errores en el navegador
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfDocument = () => {
  return (
    <p style={{width:100, height:100}}>
        Descargar CV
    </p>
  );
};

export default PdfDocument;
