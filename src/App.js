import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Preloader from "./decorations/Preloader";
import { animateScroll as scroll } from "react-scroll";
import { Routes, Route } from "react-router-dom";
import PDFViewer from "./components/PDFViewer";
import Home from "./pages/Home";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="app" id={load ? "not-scroll" : "scroll"}>
        {scroll.scrollToTop()}
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":pdfName" element={<PDFViewer />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
