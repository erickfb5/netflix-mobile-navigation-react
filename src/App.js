import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navRef = useRef(null);

  const toggleNav = () => setIsNavOpen((prev) => !prev);

  return (
    <div>
      <button
        className="nav-btn open-btn"
        onClick={toggleNav}
        aria-label="Open navigation"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <img
        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
        alt="Netflix Logo"
        className="logo"
      />

      <p className="text">Mobile Navigation</p>

      <nav
        ref={navRef}
        className={`nav nav-black ${isNavOpen ? "visible" : ""}`}
        aria-label="Main navigation"
      >
        <div className="nav nav-red">
          <div className="nav nav-white">
            <button
              className="nav-btn close-btn"
              onClick={toggleNav}
              aria-label="Close navigation"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <img
              src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
              alt="Netflix Logo"
              className="logo"
            />

            <ul className="list" aria-label="Navigation links">
              <li>
                <a href="#">Teams</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Life at Netflix</a>
              </li>
              <li>
                <ul aria-label="Sub-navigation links">
                  <li>
                    <a href="#">Netflix culture memo</a>
                  </li>
                  <li>
                    <a href="#">Work life balance</a>
                  </li>
                  <li>
                    <a href="#">Inclusion &amp; diversity</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default App;
