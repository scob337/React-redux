import React from "react";
import { Col, Row } from "react-bootstrap";
import './contact.css';
export default function Contact() {
  return (
    <>
        <Row className="contact-container">
          <Col>
            <div className="title">
              <h1 > Contact With - LC Wakiki</h1>
            </div>
            <div className="Desc">
              <h3>
                YOU CAN <span>CONTACT</span> US DIRECTLY AT:
              </h3>
              <p>LC-Wakiki@gmail.com</p>
              <p>Or you write us via the contact form.</p>
              <p>We answe as quick as possible.</p>
            </div>
            <div className="icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-pinterest-p"></i>
            </div>
          </Col>
          <Col>
          
          <form action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
          <div className="title">
          <h1 > Contact us</h1>
            <div className="inputs">
              <input type="text" placeholder="Your Full Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea  cols="30" rows="10" placeholder="Your Message"></textarea>
              <button className="btn btn-outline-success"> Send Message</button>
            </div>
          </div>
          </form>
          </Col>
        </Row>
    </>
  );
}
