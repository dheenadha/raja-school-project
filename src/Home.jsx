import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap';
import "./home.css"
import img1 from './assets/image1.png'
import img2 from './assets/image2.png'
import img3 from './assets/image3.png'
import { Carousel } from "react-bootstrap";
import { MdGroups2 } from "react-icons/md";



export default class Home extends PureComponent {
  render() {
    return (
  <>
 <div>
      <Carousel interval={2000} controls={true} indicators={true}>
      
        <Carousel.Item>
          
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Slide 1</h3>
            <p>Description for Slide 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Slide 2</h3>
            <p>Description for Slide 2</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Slide 3</h3>
            <p>Description for Slide 3</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <Container className="mt-3">
      {/* Row 2 - Three equal columns */}
      <Row>
        <Col md={4}>
        
          <div className="p-3 border bg-light">
            
            <h4>Easy Driving Learn</h4>
            <p>This is the first column in the second row, taking up one-third of the width.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-3 border bg-light">
            <h4>National Instructor</h4>
            <p>This is the second column in the second row, also taking up one-third of the width.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="p-3 border bg-light">
            <h4>Get licence</h4>
            <p>This is the third column in the second row, completing the layout for the row.</p>
          </div>
        </Col>
      </Row>

     
    </Container>
    </div>            
                   
  </>
    )
  }
}
