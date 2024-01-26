import { useParams } from "react-router-dom";

const PDFViewer = () => {
  let { pdfName } = useParams();
  console.log(pdfName);
  return (
    <div>
      <iframe
        src={"/" + pdfName + ".pdf"}
        title="pdf"
        style={{ minHeight: "100vh" }}
        width="100%"
      />
    </div>
  );
};
export default PDFViewer;
