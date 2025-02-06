// import { useState } from 'react';
// import styled from 'styled-components';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { motion } from 'framer-motion';

// // Set worker URL for react-pdf
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const ResumeSection = styled.section`
//   min-height: 100vh;
//   padding: 100px 150px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const ResumeContainer = styled.div`
//   max-width: 1000px;
//   width: 100%;
//   background: var(--secondary);
//   padding: 2rem;
//   border-radius: 8px;
//   margin-top: 2rem;
// `;

// const DownloadButton = styled.a`
//   display: inline-block;
//   background: var(--accent);
//   color: var(--primary);
//   padding: 1rem 2rem;
//   border-radius: 4px;
//   font-weight: 600;
//   margin-bottom: 2rem;
//   transition: all 0.3s ease;
  
//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
//   }
// `;

// const Resume = () => {
//   const [numPages, setNumPages] = useState(null);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <ResumeSection>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <DownloadButton
//           href="../components/2100032454-J Sai Bhagavan _n1.pdf"
//           download
//         >
//           Download Resume
//         </DownloadButton>

//         <ResumeContainer>
//           <Document
//             file="../components/2100032454-J Sai Bhagavan _n1.pdf"
//             onLoadSuccess={onDocumentLoadSuccess}
//           >
//             {Array.from(new Array(numPages), (el, index) => (
//               <Page
//                 key={`page_${index + 1}`}
//                 pageNumber={index + 1}
//                 renderTextLayer={false}
//                 renderAnnotationLayer={false}
//               />
//             ))}
//           </Document>
//         </ResumeContainer>
//       </motion.div>
//     </ResumeSection>
//   );
// };

// export default Resume;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Document, Page, pdfjs } from "react-pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import pdf from '../components/pradeep_resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeSection = styled.section`
  min-height: 100vh;
  padding: 100px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.a`
  display: inline-block;
  background: #007bff;
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  margin: 1rem 0;
  transition: all 0.3s ease;

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);
  }
`;

const PdfContainer = styled.div`
  max-width: 800px;
  width: 100%;
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ResumeNew = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // const pdf = "../components/2100032454-J Sai Bhagavan _n1.pdf";

  return (
    <ResumeSection>
      <Button href={pdf} target="_blank" download>
        Download Resume
      </Button>

      <PdfContainer>
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
          <Viewer fileUrl={pdf} className="pdf-viewer" />
        </Worker>
      </PdfContainer>
    </ResumeSection>
  );
};

export default ResumeNew;
