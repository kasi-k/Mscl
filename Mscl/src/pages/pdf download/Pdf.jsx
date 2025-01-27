import React, { useState, useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Logo from "../../../assets/logo.png";

const Pdf = () => {
  const [isContentVisible, setContentVisible] = useState(false); // State to control visibility of the content for PDF
  const pdfContentRef = useRef(null); // Ref to access the PDF content

  const handleDownloadPDF = () => {
    // Temporarily set content visibility to true for PDF generation
    setContentVisible(true);

    const element = pdfContentRef.current; // Get the DOM element

    // Ensure the content is visible (if it was previously hidden)
    element.style.visibility = "visible"; // Set visibility to visible for PDF capture

    // Capture the content using html2canvas
    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("portrait", "mm", "a4");

      // Adjust image size to fit A4 size
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("Acknowledgement_Form.pdf");

      // Hide the content again after generating the PDF
      setContentVisible(false); // Hide the content
      element.style.visibility = "hidden"; // Set visibility back to hidden
    }).catch((err) => {
      console.error("Error generating canvas for PDF:", err);
      setContentVisible(false); // Hide the content on error
      element.style.visibility = "hidden"; // Set visibility back to hidden on error
    });
  };

  return (
    <div className="p-4">
      {/* PDF content that is temporarily shown for PDF generation */}
      <div
        ref={pdfContentRef} // Attach the ref to the content element
        style={{
          visibility: "hidden", // Initially hide the content
          position: "absolute", // Ensure it's not affecting the layout
          top: "-9999px", // Position it out of view (doesn't affect the layout)
          left: "-9999px",
        }}
      >
        <div
          className=" mx-6 my-4 bg-white border border-black p-4"
          style={{
            width: "600px",
            fontFamily: "Arial",
            borderRadius: "12px", // Added rounded corners for outer border
            border: "2px solid black", // Outer border in black
          }}
        >
          <div className="flex justify-between">
            <img src={Logo} alt="Madurai Logo" className="size-20" />
            <div className="text-center">
              <h2 style={{ fontSize: "16px", fontWeight: "bold" }}>
                INTEGRATED COMPLAINT TRACKING SYSTEM
              </h2>
              <p className="mb-4">Acknowledgement Form</p>
            </div>
          </div>
          <hr />

          {/* Hidden content populated dynamically */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px",
            }}
          >
            <tbody className="text-xs">
              <tr>
                <td
                  className="font-semibold text-nowrap"
                  style={{
                    border: "1px solid black", // Black border for table cells
                    padding: "8px",
                  }}
                >
                  Acknowledgment Number:
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  113561
                </td>
              </tr>
              <tr>
                <td
                  className="font-semibold text-nowrap"
                  style={{
                    border: "1px solid black", // Black border for table cells
                    padding: "8px",
                  }}
                >
                  Complaint Date:
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  23-Jan-2025 11:10
                </td>
              </tr>
              <tr>
                <td
                  className="font-semibold text-nowrap"
                  style={{
                    border: "1px solid black", // Black border for table cells
                    padding: "8px",
                  }}
                >
                  Applicant Name:
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Public
                </td>
              </tr>
              <tr>
                <td
                  className="font-semibold text-nowrap"
                  style={{
                    border: "1px solid black", // Black border for table cells
                    padding: "8px",
                  }}
                >
                  Address:
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  வார்டு-3 ஆனையூர் பகுதி (தமிழ் நகரில்)
                </td>
              </tr>
              <tr>
                <td
                  className="font-semibold text-nowrap"
                  style={{
                    border: "1px solid black", // Black border for table cells
                    padding: "8px",
                  }}
                >
                  Zone:
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  I
                </td>
              </tr>
              <tr>
                <td
                  className="font-semibold text-nowrap"
                  style={{
                    border: "1px solid black", // Black border for table cells
                    padding: "8px",
                  }}
                >
                  Ward:
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  03
                </td>
              </tr>
              <tr>
                <td
                  className="font-semibold text-nowrap"
                  style={{
                    border: "1px solid black", // Black border for table cells
                    padding: "8px",
                  }}
                >
                  Mobile Number:
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  8668049569
                </td>
              </tr>
              <tr>
                <td
                  className="font-semibold text-nowrap"
                  style={{
                    border: "1px solid black", // Black border for table cells
                    padding: "8px",
                  }}
                >
                  Grievance Type:
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Stray Dog Nuisance
                </td>
              </tr>
              <tr>
                <td
                  className="font-semibold text-nowrap"
                  style={{
                    border: "1px solid black", // Black border for table cells
                    padding: "8px",
                  }}
                >
                  Description:
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  Complaint from WhatsApp: 8668049569, மதுைர மாநகராட்சி மண்டலம் 1/
                  வார்டு-3 ஆனையூர் பகுதி (தமிழ் நகரில்) நாய்கள் அதிகசவிவல்
                </td>
              </tr>
            </tbody>
          </table>

          {/* Assigned To Section */}
          <table
            className="text-xs"
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "10px",
            }}
          >
            <thead>
              <tr>
                <th
                  className="text-nowrap"
                  style={{
                    border: "1px solid black", // Black border for table cells
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  Assigned To
                </th>
                <th
                  className="text-nowrap"
                  style={{
                    border: "1px solid black", // Black border for table cells
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  Zone
                </th>
                <th
                  className="text-nowrap"
                  style={{
                    border: "1px solid black", // Black border for table cells
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  Ward No
                </th>
                <th
                  className="text-nowrap"
                  style={{
                    border: "1px solid black", // Black border for table cells
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  Complaint Location
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{ border: "1px solid black", padding: "8px" }}
                  colSpan={1}
                >
                  SL
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>I</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>03</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  வார்டு-3 ஆனையூர் பகுதி (தமிழ் நகரில்)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Button to trigger PDF download */}
      <button
        onClick={handleDownloadPDF}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
      >
        Download PDF
      </button>
    </div>
  );
};

export default Pdf;
