import React from 'react';
import './ServiceDetails.css';

export class ServiceDetails extends React.Component {
    render() {
        return (
            <html lang="en" className="myStyle">
                <head>
                    <title>Harvest vase</title>
                    <link href={"https://fonts.googleapis.com/css?family=Bentham|Playfair+Display|Raleway:400,500|Suranna|Trocchi"} rel="stylesheet" />
                </head>
                <body>
                    <div className="wrapper">
                        <div className="product-img">
                            <img src={"http://royaumeacademy.co.uk/wp-content/uploads/2015/06/translation-globe350.png"} height="420" width="327" alt='servicePic' />
                        </div>
                        <div className="product-info">
                            <div className="product-text">
                                <h1>Harvest Vase</h1>
                                <h2>by studio and friends</h2>
                                <p>Harvest Vases are a reinterpretation<br /> of peeled fruits and vegetables as<br /> functional objects. The surfaces<br /> appear to be sliced and pulled aside,<br /> allowing room for growth.  </p>
                            </div>
                            <div className="product-price-btn">
                                <p><span>78</span>$</p>
                                <button type="button">add to cart</button>
                            </div>
                        </div>
                    </div>
                </body>



            </html>


        )
    }
}
export default ServiceDetails;
