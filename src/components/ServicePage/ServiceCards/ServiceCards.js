import React, { Component } from 'react';
import './ServiceCards.css';
export class ServicePage extends Component {
  render() {
    return (
      <div>
        <nav class="services card--services">
          <div class="service1 card1">
            <div >
              <div class="product2">
                <a href="/" class="card_label product-title">Translation</a>
                <img src="https://khamsat.hsoubcdn.com/images/services/1713491/c816906bc279161fc47770c14577c0bc.jpg" alt="pic" />
                <div class="product-text">
                  <p> Have your document translated into more than 100 languages by professional translators.</p>
                  <button class="btn">
                    <span class="price">$120</span>
                    <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                    <span class="buy">Add To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="service1 card1">
            <div >
              <div class="product2">
                <a href="/ " class="card_label product-title">Legal Advice</a>
                <img src="https://khamsat.hsoubcdn.com/images/services/1241440/262b557d5e0f67cacfbe597168f74230.jpg" alt="pic" />
                <div class="product-text">
                  <p>Resolve all civil, criminal, legal, corporate issues, and provide practically applicable technical consultations.</p>
                  <button class="btn">
                    <span class="price">$105</span>
                    <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                    <span class="buy">Add To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="service1 card1">
            <div >
              <div class="product2">
                <a href="/ " class="card_label product-title">Interior design</a>
                <img src="https://khamsat.hsoubcdn.com/images/services/1265031/81b5c5481a8ce974f24a317601ad52a2.jpg" alt="pic" />
                <div class="product-text">
                  <p>Design apartments - villa - pistons - kitchens
                                        Using software (ps-lumion-AutoCAD-3ds max).</p>
                  <button class="btn">
                    <span class="price">$100</span>
                    <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                    <span class="buy">Add To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="service1 card1">
            <div >
              <div class="product2">
                <a href="/ " class="card_label product-title">Graphic Design</a>
                <img src="https://khamsat.hsoubcdn.com/images/services/1900956/30d3a6b4365823fa477b0baa87d62fab.jpg" alt="pic" />
                <div class="product-text">
                  <p>Professional and high quality motion graphic design (Snapchat _ Story Instagram).
                    <br />
                    <br />
                  </p>
                  <button class="btn">
                    <span class="price">$200</span>
                    <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                    <span class="buy">Add To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="service1 card1">
            <div >
              <div class="product2">
                <a href="/ " class="card_label product-title">Marketing</a>
                <img src="https://khamsat.hsoubcdn.com/images/services/1577643/e4ebc5dfc235b4f6d241947736ea024b.jpg" alt="pic" />
                <div class="product-text">
                  <p> A comprehensive marketing study help you build your project or increase its position in the market on scientific grounds.</p>
                  <button class="btn">
                    <span class="price">$130</span>
                    <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                    <span class="buy">Add To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="service1 card1">
            <div >
              <div class="product2">
                <a href="/ " class="card_label product-title">Programming</a>
                <img src="https://khamsat.hsoubcdn.com/images/services/393328/7188a15ec7f717bb6ad18f54d8858b00.jpg" alt="pic" />
                <div class="product-text">
                  <p> You can now get android application & IOS as required professionally, with the latest capabilities.</p>
                  <button class="btn">
                    <span class="price">$200</span>
                    <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                    <span class="buy">Add To Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div >
    );
  }
}
export default ServicePage;
