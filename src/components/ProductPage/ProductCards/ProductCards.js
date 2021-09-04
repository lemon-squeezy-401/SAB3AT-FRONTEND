/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './ProductCards.css';
import AddToCart from '../../../assets/AddToCart.svg';
// import more from '../../../assets/more.svg';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export class ProductCard extends React.Component {




    render() {
        return (
            <div className="customized1" >
                < head >
                    {/* <meta charset="UTF-8" />
          <meta content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" /> */}
                    {/* <title>Nike Shoes Shopping Card</title> */}
                    {/* <link rel="stylesheet" href={"style.css"} />
                    <link rel="stylesheet" href={"https://use.fontawesome.com/releases/v5.6.1/css/all.css"} /> */}
                </head>
                <body>

                    <section className="card-Container1" >
                        <div className="card1">
                            <div className="card_head1">
                                <img src={"https://i.ibb.co/VpXVbhh/logo.png"} alt="logo" className="logo1" />
                                <img src={"https://i.ibb.co/pZfc2fn/shoes.png"} alt="shoes" className="shoes1" />
                                <span className="shoes_caption1">
                                    <b>NIKE Men's</b> Orange,White and Blue Running Shoes
                                </span>
                                <span className="more_info1">
                                    <a href={"/productDetails"} className="fas more_info1"> More Info..</a>
                                    {/* <a href={"/"}><i className="fas more_info"></i> More Info..</a><img src={more} alt="any" /> */}
                                    {/* <button type="submit" className="fas" ><i > </i>  More Info..</button> */}

                                    {/* <Button className="more_info" variant="outline-Dark">More Info..</Button>{' '} */}
                                </span>


                                <span className="back_text1">
                                    FAST
                                </span>
                            </div>
                            <div className="card_body1">
                                <div className="shoes_desc1">
                                    <span className="shoes_info1">
                                        NIKE Men's Running Shoes
                                    </span>
                                    <span className="badge1">
                                        NEW
                                    </span>
                                    <span className="shoes_rating1">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star gray"></i>
                                    </span>
                                    <span className="shoes_price1">
                                        <span><pre>PRICE              </pre><i className="fas  price1 tag"></i><span className="rs"> 10$</span>   <i className="fas   price1"></i><span className="rs"> </span></span>
                                    </span>
                                    <span className="shoes_size1">
                                        <span><pre>SIZE               </pre></span>
                                        <select name="select" id="select">
                                            <option value="7"> 7 UK  </option>
                                            <option value="7">7 UK/INDIA</option>
                                            <option value="7">8 UK/INDIA</option>
                                            <option value="7">9 UK/INDIA</option>
                                            <option value="7">10 UK/INDIA</option>
                                            <option value="7">11 UK/INDIA</option>
                                        </select>
                                        {/* <a href={"/"}><span className="size_chart">SIZE CHART</span></a> */}
                                    </span>
                                    <span className="shoes_color1">
                                        <ul className="ul_color1">
                                            <li><span>COLOR</span></li>
                                            <li><a href={"/"} className="orange active" ></a></li>
                                            <li><a href={"/"} className="green"></a></li>
                                            <li><a href={"/"} className="blue"></a></li>
                                        </ul>
                                    </span>
                                    <span className="shoes_buy1">
                                        {/* <button type="submit"><i className="fas fa-bolt"></i>  BUY NOW</button> */}
                                        <button type="submit" ><i className="fas"><img src={AddToCart} alt="any" /></i>  ADD TO CART</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </body>
            </div >
        )
    }
}
export default ProductCard;

