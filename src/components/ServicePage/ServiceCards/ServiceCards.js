import React, { Component } from 'react';
import './ServiceCards.css';
export class ServicePage extends Component {
<<<<<<< HEAD
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
                        <div  >
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
        )
    }
}
=======
  render() {
    return (
      <div>
        <nav className="services1 card--services1">
          <a
            href={'/ServiceDetails'}
            className="service1 card1 serviceSection1 cardpic1"
          >
            {/* <span className="card_label1">Translation </span> */}

            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> */}
            <div id="container">
              <div className="product-details ">
                <h1>Translation</h1>
                <span class="hint-star star">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                </span>

                <p class="information">
                  Have your document translated into more than 100 languages by
                  professional translators..
                </p>

                <div class="control">
                  <button class="btn">
                    <span class="price">$250</span>
                    <span class="shopping-cart">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </span>
                    <span class="buy">Show details</span>
                  </button>
                </div>
              </div>
            </div>
          </a>

          <a href={'/'} className="service1 card1">
            {/* <span className="card_label1">Business</span> */}
            <div id="container">
              <div class="product-details">
                <h1>CHRISTMAS TREE</h1>
                <span class="hint-star star">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                </span>

                <p class="information">
                  " Let's spread the joy , here is Christmas , the most awaited
                  day of the year.Christmas Tree is what one need the most. Here
                  is the correct tree which will enhance your Christmas.
                </p>

                <div class="control">
                  <button class="btn">
                    <span class="price">$250</span>
                    <span class="shopping-cart">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </span>
                    <span class="buy">Show details</span>
                  </button>
                </div>
              </div>
            </div>
          </a>

          <a href={'/'} className="service1 card1">
            {/* <span className="card_label1">Design</span> */}
            <div id="container">
              <div class="product-details">
                <h1>CHRISTMAS TREE</h1>
                <span class="hint-star star">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                </span>

                <p class="information">
                  " Let's spread the joy , here is Christmas , the most awaited
                  day of the year.Christmas Tree is what one need the most. Here
                  is the correct tree which will enhance your Christmas.
                </p>

                <div class="control">
                  <button class="btn">
                    <span class="price">$250</span>
                    <span class="shopping-cart">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </span>
                    <span class="buy">Show details</span>
                  </button>
                </div>
              </div>
            </div>
          </a>

          <a href={'/'} className="service1 card1">
            {/* <span className="card_label1">Marketing</span> */}
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> */}
            <div id="container">
              <div class="product-details">
                <h1>CHRISTMAS TREE</h1>
                <span class="hint-star star">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                </span>

                <p class="information">
                  " Let's spread the joy , here is Christmas , the most awaited
                  day of the year.Christmas Tree is what one need the most. Here
                  is the correct tree which will enhance your Christmas.
                </p>
                <div class="control">
                  <button class="btn">
                    <span class="price">$250</span>
                    <span class="shopping-cart">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </span>
                    <span class="buy">Show details</span>
                  </button>
                </div>
              </div>
            </div>
          </a>

          <a href={'/'} className="service1 card1">
            {/* <span className="card_label1">Programming </span> */}
            <div id="container">
              <div class="product-details">
                <h1>CHRISTMAS TREE</h1>
                <span class="hint-star star">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                </span>

                <p class="information">
                  " Let's spread the joy , here is Christmas , the most awaited
                  day of the year.Christmas Tree is what one need the most. Here
                  is the correct tree which will enhance your Christmas.
                </p>

                <div class="control">
                  <button class="btn">
                    <span class="price">$250</span>
                    <span class="shopping-cart">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </span>
                    <span class="buy">Show details</span>
                  </button>
                </div>
              </div>
            </div>
          </a>

          <a href={'/'} className="service1 card1">
            {/* <span className="card_label1">Video Design </span> */}
            <div id="container">
              <div class="product-details">
                <h1>CHRISTMAS TREE</h1>
                <span class="hint-star star">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                </span>

                <p class="information">
                  " Let's spread the joy , here is Christmas , the most awaited
                  day of the year.Christmas Tree is what one need the most. Here
                  is the correct tree which will enhance your Christmas.
                </p>

                <div class="control">
                  <button class="btn">
                    <span class="price">$250</span>
                    <span class="shopping-cart">
                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </span>
                    <span class="buy">Show details</span>
                  </button>
                </div>
              </div>
            </div>
          </a>
        </nav>
      </div>
    );
  }
}

>>>>>>> f5c968fc6580a26e755d927fea40b35c1c1464e7
export default ServicePage;
