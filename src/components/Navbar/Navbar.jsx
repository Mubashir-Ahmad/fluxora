import React, { useState } from "react";
import "./navbar.css";
import image1 from "../../asset/image/Vector.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);
  const location = useLocation();
  const fromHome = new URLSearchParams(location.search).get("fromHome");
  const fromHomee = new URLSearchParams(location.search).get("fromHomee");
  const handleButtonClick = (button) => {
    navigate("/contactus");
    setActiveButton(button);
  };
  console.log("hello", location.search);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={image1} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse custom-collapse"
            id="navbarText"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                {/* <Link
                  className={`nav-link ${activeButton === "AI" && "active"}`}
                  style={{
                    border:
                      activeButton === "AI" ? "1px solid #1BACD1" : "none",
                  }}
                  to="/"
                  onClick={() => handleButtonClick("AI")}
                >
                  AI
                </Link> */}
                <Link
                  className={`nav-link ${
                    activeButton === "AI" && !fromHome && "active" && !fromHomee
                  }`}
                  style={{
                    border:
                      activeButton === "AI" && !fromHome && !fromHomee
                        ? "1px solid #1BACD1"
                        : "none",
                  }}
                  to="/ai"
                  onClick={() => handleButtonClick("AI")}
                >
                  {t("AI")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeButton === "About" && "active"}`}
                  style={{
                    border:
                      activeButton === "About" ? "1px solid #1BACD1" : "none",
                  }}
                  to="/aboutus"
                  onClick={() => handleButtonClick("About")}
                >
                  {t("aboutus")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/service"
                  className={`nav-link ${
                    fromHome === "true" || activeButton === "Services"
                      ? "active"
                      : ""
                  }`}
                  style={{
                    border:
                      fromHome === "true" || activeButton === "Services"
                        ? "1px solid #1BACD1"
                        : "none",
                  }}
                  onClick={() => handleButtonClick("Services")}
                >
                  {t("services")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    fromHomee === "true" ||
                    (activeButton === "Blogs" && "active")
                  }`}
                  style={{
                    border:
                      fromHomee === "true" || activeButton === "Blogs"
                        ? "1px solid #1BACD1"
                        : "none",
                  }}
                  to="/blog"
                  onClick={() => handleButtonClick("Blogs")}
                >
                  {t("blogs")}
                </Link>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className={`btn btn-light ${
                    activeButton === "Light" && "active"
                  }`}
                  onClick={() => handleButtonClick("Light")}
                >
                  {t("contact_us")}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
