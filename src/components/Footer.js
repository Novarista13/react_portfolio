import React from "react";
import Card from "react-bootstrap/Card";

export default function Footer() {
  return (
    <Card style={{ backgroundColor: "#1b1a2ea9", color: "white" }}>
      <footer className="footer-section">
        This Website was coded by{" "}
        <span
          style={{ color: "#7EB5EB", cursor: "pointer" }}
          onClick={() => {
            window.open("https://github.com/Novarista13");
          }}
        >
          May Thit Htun
        </span>
      </footer>
    </Card>
  );
}
