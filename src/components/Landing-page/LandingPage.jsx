import React from 'react';
import VerticalSlider from '../Vertical-Slider/VerticalSlider';

import ProductSlider from './ProductSlider/ProductSlider';
import ServiceSlider from './ServiceSlider/ServiceSlider';

function LandingPage() {
  return (
    <div>
      <VerticalSlider />
      <ProductSlider />
      <ServiceSlider />
    </div>
  );
}

export default LandingPage;
