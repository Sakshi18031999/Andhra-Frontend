import React from "react";
import "../css/header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  const handleNavigation2 = (url) => {
    window.location.href = url;
  };

  return (
    <header className="navbar">
      <nav className="navbar-nav">
        <ul>
          <li onClick={() => handleNavigation("/")}>Home</li>
          <li
            onClick={() =>
              handleNavigation2("https://corruptjagan.com/en/young-jagan")
            }
          >
            Young Jagan
          </li>
          <li>
            White Collar
            <ul className="dropdown">
              <li
                onClick={() =>
                  handleNavigation2(
                    "https://corruptjagan.com/en/cbi-ed-inquiries/"
                  )
                }
                className="dropdown-element"
              >
                CBI/ED Inquires
              </li>
              <li
                onClick={() =>
                  handleNavigation2(
                    "https://corruptjagan.com/en/companies-mafia/"
                  )
                }
                className="dropdown-element"
              >
                Companies Mafia
              </li>
            </ul>
          </li>
          <li>
            Black Money
            <ul className="dropdown">
              <li
                onClick={() =>
                  handleNavigation2("https://corruptjagan.com/en/sand-mafia/")
                }
                className="dropdown-element"
              >
                Sand Mafia
              </li>
              <li
                onClick={() =>
                  handleNavigation2("https://corruptjagan.com/en/liquor-mafia/")
                }
                className="dropdown-element"
              >
                Liquor Mafia
              </li>
            </ul>
          </li>
          <li
            onClick={() =>
              handleNavigation2("https://corruptjagan.com/en/propaganda/")
            }
          >
            Propaganda Fund
          </li>
          <li
            onClick={() =>
              handleNavigation2("https://corruptjagan.com/en/luxury-of-jagan/")
            }
          >
            Luxury of Jagan
          </li>
          <li onClick={() => handleNavigation2("/telugu")}>
            <img
              class="trp-flag-image"
              src="https://corruptjagan.com/wp-content/plugins/translatepress-multilingual/assets/images/flags/te.png"
              width="18"
              height="12"
              alt="te"
              title="తెలుగు"
              style={{ marginRight: "5px" }}
            />
            తెలుగు
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
