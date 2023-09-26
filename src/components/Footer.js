import React from "react";

export default function Footer() {
  return (
    <footer className="footer-section">
      This Website was coded by{" "}
      <span
        style={{ color: "#61DAFB" }}
        onClick={() => {
          window.open("https://github.com/Novarista13");
        }}
      >
        May Thit Htun
      </span>
    </footer>
  );
}
