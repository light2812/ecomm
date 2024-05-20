import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-success text-light p-3">
      <p className="text-center">Copyright &copy; Alok@2023-24</p>
      <p className="text-center mt-3 ">
        <Link className="text-light" to="/about">
          _About
        </Link>
        _|_
        <Link className="text-light" to="/contact">
          Contact_
        </Link>
      </p>
    </div>
  );
};

export default Footer;
