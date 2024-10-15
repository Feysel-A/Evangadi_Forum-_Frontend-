import React from "react";
import classes from "./footer.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import evangadiLogo from "../../assets/images/footlogo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section className={classes.footer_container}>
      <div>
        <Link href="/">
          <img className={classes.eva_logo} src={evangadiLogo}></img>
        </Link>
        <div className={classes.footer_links}>
          <Link
            to="https://www.facebook.com/evangaditech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </Link>
          <Link
            to="https://www.instagram.com/evangaditech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </Link>
          <Link
            to="https://www.youtube.com/@EvangadiTech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </Link>
        </div>
      </div>
      <div className={classes.useful_links}>
        <h1>Useful Links</h1>
        <ul>
          <li>
            <Link to="/how-it-works">How it works</Link>
          </li>
          <li>
            <Link>Terms of service</Link>
          </li>
          <li>
            <Link>Privacy Policy</Link>
          </li>
        </ul>
      </div>
      <div className={classes.contact_info}>
        <h1>Contact Info</h1>
        <ul>
          <li>Evangadi Networks</li>
          <li>support@evangadi.com</li>
          <li>+1-202-386-2702</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
