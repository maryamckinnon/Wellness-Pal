import React from "react";
import { NavLink } from "react-router-dom";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../index.css";
// import logo from "../images/logo.png";

function Footer() {
  return (
    <div className="footer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-3">
        <ul className="nav col-md-4 justify-content-start">
          <li className="nav-item">
            <NavLink to="/" className="nav-link px-2 text-muted">
              Home
            </NavLink>
          </li>
          <li className="nav-link px-2 text-muted">Connect: </li>
          <li className="nav-item">
            <a
              href="mailto:wellnesspal@gmail.com"
              className="nav-link px-2 text-muted"
            >
              <EmailOutlinedIcon size="1.5em" />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.instagram.com/"
              className="nav-link px-2 text-muted"
            >
              <InstagramIcon size="1.5em" />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.facebook.com/"
              className="nav-link px-2 text-muted"
            >
              <FacebookIcon size="1.5em" />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.twitter.com/"
              className="nav-link px-2 text-muted"
            >
              <TwitterIcon size="1.5em" />
            </a>
          </li>
          <li className="nav-item">
            <ul className="navbar-nav px-2">
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <LinkedInIcon size="1.5em" />
                </NavLink>
                <div
                  style={{ left: "unset", right: "0" }}
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a
                    href="https://www.linkedin.com/in/mary-mckinnon/"
                    className="dropdown-item"
                  >
                    Mary
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>

        <NavLink
          to="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <div className="justify-content-center">
            {/* <img src={logo} style={{ height: 40 }} alt="logo" /> */}
          </div>
        </NavLink>
      </footer>
    </div>
  );
}

export default Footer;