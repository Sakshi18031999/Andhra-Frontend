import React, { useState } from "react";
import "../css/mobile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import img from "../logo.png";

const MobileHeader = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (route) => {
    navigate(route);
    setMenuOpen(false);
  };

  const handleNavigation2 = (url) => {
    window.location.href = url;
    setMenuOpen(false); // Close the menu after navigation
  };

  return (
    <header className="navbar" style={{ justifyContent: "space-between" }}>
      <img src={img} height="90" width="90" alt="Logo" />
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      {menuOpen && (
        <div className="menu-options">
          <ul>
            <li onClick={() => handleNavigation("/")}>ఇల్లు</li>
            <li
              onClick={() =>
                handleNavigation2("https://corruptjagan.com/telugu/young-jagan/")
              }
            >
              అలా మొదలైంది
            </li>
            <li>
              ప్రొఫెషనల్ క్రైమ్స్
              <ul className="dropdown">
                <li
                  onClick={() =>
                    handleNavigation2(
                      "https://corruptjagan.com/telugu/cbi-ed-inquiries/"
                    )
                  }
                  className="dropdown-element"
                >
                  నా ట్రాక్ రికార్డ్
                </li>
                <li
                  onClick={() =>
                    handleNavigation2(
                      "https://corruptjagan.com/telugu/companies-mafia/"
                    )
                  }
                  className="dropdown-element"
                >
                  నా స్నేహితులు,బంధువులు
                </li>
              </ul>
            </li>
            <li>
              నల్ల ధనం
              <ul className="dropdown">
                <li
                  onClick={() =>
                    handleNavigation2(
                      "https://corruptjagan.com/telugu/sand-mafia/"
                    )
                  }
                  className="dropdown-element"
                >
                  ప్రకృతికి ప్రేమతో
                </li>
                <li
                  onClick={() =>
                    handleNavigation2(
                      "https://corruptjagan.com/telugu/liquor-mafia/"
                    )
                  }
                  className="dropdown-element"
                >
                  లిక్కర్ మాఫియా
                </li>
              </ul>
            </li>
            <li
              onClick={() =>
                handleNavigation2("https://corruptjagan.com/telugu/propaganda/")
              }
            >
              పెట్టుబడిదారీ దేవుళ్ళు
            </li>
            <li
              onClick={() =>
                handleNavigation2(
                  "https://corruptjagan.com/telugu/luxury-of-jagan/"
                )
              }
            >
              నా సాధారణ జీవితం
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default MobileHeader;
