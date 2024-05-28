import React from "react";
import "../css/tabs.css"; // Import your CSS file for styling

const Tabs = () => {
  return (
    <div className="tabs-container">
      <div className="tabs">
        <a href="https://corruptjagan.com/en/young-jagan" className="tab">
          Young Jagan
        </a>
        <a href="https://corruptjagan.com/en/young-jagan/cbi-ed-enquiries" className="tab" style={{ backgroundColor: "#4567A6" }}>
          CBI/ED Enquiries
        </a>
        <a href="https://corruptjagan.com/en/young-jagan/companies-mafia" className="tab" style={{ backgroundColor: "#A70101" }}>
          Companies Mafia
        </a>
        <a href="https://corruptjagan.com/en/young-jagan/sand-mafia" className="tab" style={{ backgroundColor: "#BA1D1D" }}>
          Sand Mafia
        </a>
        <a href="https://corruptjagan.com/en/young-jagan/liquor-mafia" className="tab" style={{ backgroundColor: "#E92828" }}>
          Liquor Mafia
        </a>
        <a href="https://corruptjagan.com/en/young-jagan/propaganda-fund" className="tab" style={{ backgroundColor: "#830B03" }}>
          Propaganda Fund
        </a>
        <a href="https://corruptjagan.com/en/young-jagan/luxury-of-jagan" className="tab" style={{ backgroundColor: "#A6A5A5" }}>
          Luxury Of Jagan
        </a>
      </div>
      <div className="content">
        <img
          src="https://corruptjagan.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-17-at-6.17.48-PM-1536x1536.jpeg"
          alt="Big Image"
          className="big-image"
        />
      </div>
    </div>
  );
};

export default Tabs;
