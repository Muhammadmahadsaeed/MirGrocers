import React from "react";
import { Carousel } from "react-bootstrap";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              height="500px" width="90%"
              src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="500px" width="90%"
              src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="500px" width="90%"
              src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
