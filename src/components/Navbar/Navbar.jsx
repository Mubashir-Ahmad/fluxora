import React, { useState } from "react";
import "./navbar.css";
import image1 from "../../asset/image/Vector.png";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent" >
        <div className="container">
          <Link className="navbar-brand" to="#">
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
          <div className="collapse navbar-collapse custom-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeButton === "AI" && "active"}`}
                  style={{
                    border:
                      activeButton === "AI" ? "1px solid #1BACD1" : "none",
                  }}
                  to="/"
                  onClick={() => handleButtonClick("AI")}
                >
                  AI
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
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeButton === "Services" && "active"
                  }`}
                  style={{
                    border:
                      activeButton === "Services"
                        ? "1px solid #1BACD1"
                        : "none",
                  }}
                  to="/service"
                  onClick={() => handleButtonClick("Services")}
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeButton === "Blogs" && "active"}`}
                  style={{
                    border:
                      activeButton === "Blogs" ? "1px solid #1BACD1" : "none",
                  }}
                  to="/blog"
                  onClick={() => handleButtonClick("Blogs")}
                >
                  Blogs
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
                  <h6>Contact us</h6>
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