/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import './ServiceSlider.css';

export class ServiceSlider extends Component {
  render() {
    return (
      <div >
        <p className="PS"> Best selling Services</p>

        <logo-slider>
          {/* https://khamsat.hsoubcdn.com/images/services/1241440/262b557d5e0f67cacfbe597168f74230.jpg */}
          <div>
            <img src="https://khamsat.hsoubcdn.com/images/services/1241440/262b557d5e0f67cacfbe597168f74230.jpg" alt='pic' />
            <img src="https://image.shutterstock.com/image-photo/closeup-hand-young-asian-woman-600w-1932043229.jpg" alt='pic' />
            <img src="https://image.shutterstock.com/image-photo/closeup-hand-young-asian-woman-600w-1932043229.jpg" alt='pic' />
            <img src="https://cdn.pixabay.com/photo/2016/12/08/11/50/time-1891569__340.png" alt='pic' />
            <img src="https://cdn.pixabay.com/photo/2015/02/26/08/29/cheese-slicer-650029_960_720.jpg" alt='pic' />
            <img src="https://cdn.pixabay.com/photo/2015/02/26/08/29/cheese-slicer-650029_960_720.jpg" alt='pic' />
            <img src="https://picsum.photos/107" alt='pic' />
            <img src="https://picsum.photos/108" alt='pic' />
          </div>
          <div>
            <img src="https://picsum.photos/100" alt='pic' />
            <img src="https://picsum.photos/102" alt='pic' />
            <img src="https://picsum.photos/103" alt='pic' />
            <img src="https://picsum.photos/104" alt='pic' />
            <img src="https://picsum.photos/105" alt='pic' />
            <img src="https://picsum.photos/106" alt='pic' />
            <img src="https://picsum.photos/107" alt='pic' />
            <img src="https://picsum.photos/108" alt='pic' />
          </div>
        </logo-slider>
      </div >

    );
  }
}
export default ServiceSlider;

