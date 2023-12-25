import React from "react";

function Footer(){
  const year = new Date().getFullYear();
  return (
    <div className="footer-title">
      <p> COPYRIGHT © {year}</p>
    </div>
  );
}

export default Footer;