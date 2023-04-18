import React from "react";
import { BsGithub, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer m-0 p-0  d-flex flex-column align-items-center justify-content-center bg-dark text-light mt-5 ">
      
      <h6 className="mt-3">All Right Reserved &copy; HouseMarketPlace - 2023</h6>
   
      <div className="d-flex flex-row p-2">
        <p className="me-4" title="Github">
          <Link to="/">
            <BsGithub color="white" size={30} />
          </Link>
        </p>
        <p className="me-4" title="Instagram">
          <Link to="/">
            <BsInstagram color="white" size={30} />
          </Link>
        </p>
        <p className="me-4" title="Telegram">
          <Link to="/">
            <BsTelegram color="white" size={30} />
          </Link>
        </p>
        <p className="me-4" title="Youtube">
          <Link to="/">
            <BsYoutube color="white" size={30} />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
