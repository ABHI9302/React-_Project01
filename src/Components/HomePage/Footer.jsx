import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "40px 80px",
        backgroundColor: "#f8f8f8",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "40px",
        }}
      >
        {/* Contact */}
        <div>
          <h2>Contact</h2>
          <p>Tell Us Everything</p>
          <p>Do you have any question? Feel free to reach out.</p>

          <a
            href="/"
            style={{
              color: "#000",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Let's Chat
          </a>

          <h2 style={{ marginTop: "40px" }}>Address</h2>
          <p> abhishek.yadav.ghaziabad@gmail.com</p>
          <p> Number = 8447006919</p>
          <p> Hydrabad</p>
        </div>

        {/* Policy */}
        <div>
          <h2 className="text-black">Policy</h2>
          <p>Application Security</p>
          <p>Software Principles</p>
        </div>

        {/* Support */}
        <div>
          <h2>Support</h2>
          <p>Support Center</p>
          <p>Customer Support</p>
          
        </div>

        {/* Company */}
        <div>
          <h2>Company</h2>
          <p>About</p>
          <p>Blog</p>
          <p>Press</p>
          <p>Careers & Culture</p>
        </div>

        {/* Language */}
        <div>
          <h2>Language</h2>
          <p style={{ fontSize: "28px" }}>🇺🇸 🇪🇸</p>
        </div>
      </div>

      <hr style={{ margin: "40px 0" }} />

      {/* Bottom */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "40px", margin: 0 }}>Landy</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "28px",
            color: "#555",
          }}
        >
        <a href="https://github.com/ABHI9302"><FaGithub /></a>
         <a href="https://twitter.com/yourusername"><FaTwitter /></a> 
         <a href="https://www.linkedin.com/in/abhishek-yadav-45761b331"><FaLinkedin /></a>
          <a href="https://medium.com/@yourusername"><FaMedium /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;