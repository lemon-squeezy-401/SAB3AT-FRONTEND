import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './vertical-slider.css';

//style thingy
import upArrow from '../../assets/arrow-up.svg';
import downArrow from '../../assets/arrow-down.svg';

function VerticalSlider() {
  const history = useHistory();

  const productPath = () => {
    const path = '/products';
    history.push(path);
  };

  const servicesPath = () => {
    const path = '/services';
    history.push(path);
  };

  useEffect(() => {
    const sliderContainer = document.querySelector('.slider-container');
    const slideRight = document.querySelector('.right-slide');
    const upButton = document.querySelector('.up-button');
    const downButton = document.querySelector('.down-button');
    const slideLeft = document.querySelector('.left-slide');
    const slidesLength = slideRight.querySelectorAll('div').length;

    let activeSlideIndex = 0;

    slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

    upButton.addEventListener('click', () => changeSlide('up'));
    downButton.addEventListener('click', () => changeSlide('down'));

    const changeSlide = (direction) => {
      try {
        const sliderHeight = sliderContainer.clientHeight;
        if (direction === 'up') {
          activeSlideIndex++;
          if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
          }
        } else if (direction === 'down') {
          activeSlideIndex--;
          if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
          }
        }

        slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
        slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
      } catch (error) {
        console.error('Slider Error', error);
      }
    };

  }, []);

  return (
    <div className='slider-body'>
      <div className="slider-container">
        <div className="left-slide">
          <div style={{ backgroundColor: '#192E33' }}>
            <h1>Products</h1>
            <p>in the wilderness</p>
            <div onClick={productPath} className='path'>Check it out</div>
          </div>
          <div style={{ backgroundColor: '#252E33' }}>
            <h1>Services</h1>
            <p>Looking for the best Services? <br /><br />.... you are in the right place</p>
            <div onClick={servicesPath} className='path'>Check it out</div>
          </div>
        </div>
        <div className="right-slide">
          <div id='first'></div>
          <div id='second'></div>
        </div>
        <div className="action-buttons">
          <button className="down-button vertical-button">
            {/* <i className="fas fa-arrow-down">{downArrow}</i> */}
            <img className="fas fa-arrow-down" src={downArrow} alt="any" />
          </button>
          <button className="up-button vertical-button">
            {/* <i className="fas fa-arrow-up">{upArrow}</i> */}
            <img className="fas fa-arrow-up" src={upArrow} alt="any" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerticalSlider;
