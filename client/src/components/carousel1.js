import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Carousel1 extends Component{
    render(){
        return(
            <div style={{marginLeft : "20px", marginRight : "20px"}}>
                <Carousel style={{height : "625px"}}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://i.ibb.co/Xtd8LQt/MG-1972.jpg"
                      alt="First slide"
                      style={{height : '720px'}}
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://i.ibb.co/Xtd8LQt/MG-1972.jpg"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://i.ibb.co/Xtd8LQt/MG-1972.jpg"
                      alt="Third slide"
                      
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>;
            </div>
        )
    }

}

export default Carousel1
