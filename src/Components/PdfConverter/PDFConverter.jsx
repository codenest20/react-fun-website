
import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import styles from "./PDFConverter.module.css";

const PDFConverter = () => {
  const [text, setText] = useState("");
  const contentRef = useRef();

  const handleDownload = () => {
    const element = contentRef.current;
    html2pdf()
      .from(element)
      .set({
        margin: 1,
        filename: "user-input-document.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { orientation: "portrait" },
      })
      .save();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>PDF Converter</h1>
      
      <input
        type="text"
        className={styles.input}
        placeholder="Enter text to convert to PDF"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div ref={contentRef} className={styles.content}>
        <h2>Converted Content:</h2>
        <p>{text || "Your input will appear here."}</p>
      </div>

      <button className={styles.button} onClick={handleDownload}>
        Download as PDF
      </button>
    </div>
  );
};

export default PDFConverter;
