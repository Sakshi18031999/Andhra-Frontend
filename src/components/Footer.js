import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "white",
    color: "gray",
    textAlign: "center",
    padding: "10px 0",
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <p>
        Copyright © 2024 AP Rejects Jagan | Powered by [corruptjagan.com]
      </p>
    </footer>
  );
};

export default Footer;
