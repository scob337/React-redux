import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './about.css';
export default function About() {
  return (
    <>
    <Row className='about-container'>
    <Col>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb10a3KW51pW-fZFM8Ay7TM87wDTjMmoADUA&usqp=CAU" alt="Banner"   />
    </Col>
    <Col className='Desce'>
    <div className="title"><h1>About Us</h1></div>
    <div className="desc">
      <h3>LC WAKIKI - FASHION</h3>
      <p>COF for short. Is an up and coming luxury fashion brand specializing
        in contemeporary ready-to-wear women's clothing. The designer
        brand is for the refined, chic women who effortlessly blends blod
      colors with feminine silhouettes for a moden cutting-edge look
      </p>
      <p>Intricately detailed prints fused with prismatic tints of hues and 
        sheeny embekkishments come together to craft a utoplan design
        for the fashion-forward tastemaker.
      </p>
    </div>
    </Col>
    </Row>
    </>
  )
}
