import React from "react";
import { Carousel } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import add1 from './image/Rentimg4.jpg'
import add2 from "./image/Rentimg5.jpg";
import add3 from "./image/Rentimg3.jpeg"


function Add(){
    return(
    <>
        <div>
          <Carousel interval={2000}>
            <Carousel.Item>
              <img src={add1} heigth="320" width="1000" justify-content="center" alt="Not found"/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={add2} heigth="420" width="1000" justify-content="center" alt="Not found"/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={add3} heigth="420" width="1000" justify-content="center" alt="Not found"/>
            </Carousel.Item>
          </Carousel>
        </div>
        
    </>
        );

}
export default Add;