// src/components/PDFConverter.js
import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import styles from "./PDFConverter.module.css";

const PDFConverter = () => {
  const contentRef = useRef();

  const handleDownload = () => {
    const element = contentRef.current;
    html2pdf()
      .from(element)
      .set({
        margin: 1,
        filename: "converted-document.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { orientation: "portrait" },
      })
      .save();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>PDF Converter</h1>
      <div ref={contentRef} className={styles.content}>
        <h2>This content will be converted to PDF</h2>
        <p>
          This is a simple example showing how to convert HTML content into a PDF
          document using React and html2pdf.js.
        </p>
      </div>
      <button className={styles.button} onClick={handleDownload}>
        Download as PDF
      </button>
    </div>
  );
};

export default PDFConverter;
