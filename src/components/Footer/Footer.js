import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer overflow-hidden">
      <div className="row">
        <div className="col-md-12">
          <footer className="footer">
            <Container>
              <div className="row">
                <div className="col-md-3 m-b-30">
                  <div className="footer-title m-t-5 m-b-20 p-b-8">
                    About us
                  </div>
                  <p className="white-text">
                    Here we will make sure that you find the best football academy for your kid so that your kids could make you proud someday.
                  </p>
                </div>
                <div className="col-md-3 m-b-30">
                  <div className="footer-title m-t-5 m-b-20 p-b-8">
                    Admission
                  </div>
                  <div className="footer-links">
                    <Link to="#">Policy</Link>
                    <Link to="#">FAQ</Link>
                    <Link to="#">Admission Form</Link>
                  </div>
                </div>
                <div className="col-md-3 m-b-30">
                  <div className="footer-title m-t-5 m-b-20 p-b-8">
                    Department
                  </div>
                  <div className="footer-links">
                    <Link to="#">Under 9-14</Link>
                    <Link to="#">Under -16</Link>
                    <Link to="#">Under - 21</Link>
                  </div>
                </div>
                <div className="col-md-3 m-b-30">
                  <div className="footer-title m-t-5 m-b-20 p-b-8">Support</div>
                  <div className="footer-links">
                    <Link to="#">Equipment</Link>
                    <Link to="#">About Us</Link>
                    <Link to="#">Contact Us</Link>
                  </div>
                </div>
              </div>
            </Container>
          </footer>
          <div className="footer-bottom">
            Copyright © 2021 All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
