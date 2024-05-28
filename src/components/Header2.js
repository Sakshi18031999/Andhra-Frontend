import React from "react";
import "../css/header.css";
import { useNavigate } from "react-router-dom";
import logo from "../logo.png";

const Header2 = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  const handleNavigation2 = (url) => {
    window.location.href = url;
  };

  return (
    <header
      className="navbar"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      <div className="logo-image">
        <img src={logo} alt="Popup" height="100" width="100" />
      </div>
      <nav className="navbar-nav">
        <ul>
          <li onClick={() => handleNavigation("/")}>ఇల్లు</li>
          <li onClick={() => handleNavigation2("https://corruptjagan.com/telugu/young-jagan/")}>అలా మొదలైంది</li>
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
                  handleNavigation2("https://corruptjagan.com/telugu/sand-mafia/")
                }
                className="dropdown-element"
              >
                ప్రకృతికి ప్రేమతో
              </li>
              <li
                onClick={() =>
                  handleNavigation2("https://corruptjagan.com/telugu/liquor-mafia/")
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
              handleNavigation2("https://corruptjagan.com/telugu/luxury-of-jagan/")
            }
          >
            నా సాధారణ జీవితం
          </li>
        </ul>
      </nav>
      <div>
      </div>
    </header>
  );
};

export default Header2;
