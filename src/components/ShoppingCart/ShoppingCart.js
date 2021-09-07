import React from 'react';
import { useHistory } from 'react-router-dom';

import './cart.css';
import SimilarProducts from '../itemPage/SimilarProducts/SimilarProducts';
function Cart() {
  let history = useHistory();

  const {
    serviceId,
    serviceTitle,
    serviceDescription,
    servicePrice,
    serviceComments,
  } = history.location.state;
  return (
    <>
      <section className="shopping-cart dark">
        <div className="container">
          {/* <div> */}
          <div className="content">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="items">
                  {/* //-------------use this div to map --------------------*/}
                  <div className="product" key={serviceId}>
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          className="img-fluid mx-auto d-block image"
                          src={
                            'https://m.media-amazon.com/images/I/71e9Ffo1AvL._AC_SY450_.jpg'
                          }
                          alt=""
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="info">
                          <div className="row">
                            <div className="col-md-5 product-name">
                              <div className="product-name">
                                <a href="/#">{serviceTitle}</a>
                                <div className="product-info">
                                  <div>
                                    {serviceDescription}
                                    <span className="value"></span>
                                  </div>
                                  {/* <div>
                                    RAM: <span className="value">4GB</span>
                                  </div>
                                  <div>
                                    Memory: <span className="value">32GB</span>
                                  </div> */}
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 quantity">
                              <label for="quantity">Quantity:</label>
                              <input
                                id="quantity"
                                type="number"
                                value="1"
                                className="form-control quantity-input"
                              />
                            </div>
                            <div className="col-md-3 price">
                              <span>${servicePrice}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* //-------------------------// */}
                  {/* <div className="product">
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          className="img-fluid mx-auto d-block image"
                          src={
                            'https://m.media-amazon.com/images/I/71e9Ffo1AvL._AC_SY450_.jpg'
                          }
                          alt=""
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="info">
                          <div className="row">
                            <div className="col-md-5 product-name">
                              <div className="product-name">
                                <a href="#t">Lorem Ipsum dolor</a>
                                <div className="product-info">
                                  <div>
                                    Display:{' '}
                                    <span className="value">5 inch</span>
                                  </div>
                                  <div>
                                    RAM: <span className="value">4GB</span>
                                  </div>
                                  <div>
                                    Memory: <span className="value">32GB</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 quantity">
                              <label for="quantity">Quantity:</label>
                              <input
                                id="quantity"
                                type="number"
                                value="1"
                                className="form-control quantity-input"
                              />
                            </div>
                            <div className="col-md-3 price">
                              <span>$120</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product">
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          className="img-fluid mx-auto d-block image"
                          src={
                            'https://m.media-amazon.com/images/I/71e9Ffo1AvL._AC_SY450_.jpg'
                          }
                          alt=""
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="info">
                          <div className="row">
                            <div className="col-md-5 product-name">
                              <div className="product-name">
                                <a href="/#">Lorem Ipsum dolor</a>
                                <div className="product-info">
                                  <div>
                                    Display:{' '}
                                    <span className="value">5 inch</span>
                                  </div>
                                  <div>
                                    RAM: <span className="value">4GB</span>
                                  </div>
                                  <div>
                                    Memory: <span className="value">32GB</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4 quantity">
                              <label for="quantity">Quantity:</label>
                              <input
                                id="quantity"
                                type="number"
                                value="1"
                                className="form-control quantity-input"
                              />
                            </div>
                            <div className="col-md-3 price">
                              <span>$120</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="summary">
                  <h3>Summary</h3>
                  <div className="summary-item">
                    <span className="text">Subtotal</span>
                    <span className="price">$360</span>
                  </div>
                  <div className="summary-item">
                    <span className="text">Discount</span>
                    <span className="price">$0</span>
                  </div>
                  <div className="summary-item">
                    <span className="text">Shipping</span>
                    <span className="price">$0</span>
                  </div>
                  <div className="summary-item">
                    <span className="text">Total</span>
                    <span className="price">$360</span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SimilarProducts />
    </>
  );
}

export default Cart;
