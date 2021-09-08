import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import SimilarProducts from './SimilarProducts/SimilarProducts';
import CommentsSection from './CommentsSection/CommentsSection';
import './itemPage.css';
import img from './cardImg.PNG';

function ItemPage(props) {
  // const [services, setServices] = useState([]);

  let history = useHistory();
  // console.log(history.location.state);
  const {
    serviceId,
    serviceTitle,
    serviceDescription,
    servicePrice,
    serviceComments,
    serviceImg,
  } = history.location.state;

  return (
    <>
      {/* {console.log('log services from item page', services)} */}
      <div classNameName="product-html">
        <div classNameName="product-body">
          <main className="container">
            {/* <!-- Left Column / Headphones Image --> */}
            <div className="left-column">
              {/* <img data-image="black" src={serviceImg} alt="" />
              <img data-image="blue" src={serviceImg} alt="" /> */}
              <img
                data-image="red"
                className="active"
                src={serviceImg}
                alt=""
                style={{ width: '30rem', height: '30rem' }}
              />
            </div>

            {/* <!-- Right Column --> */}
            <div className="right-column">
              {/* <!-- Product Description --> */}
              <div
                className="product-description"
                style={{ marginBottom: '5rem' }}
              >
                <span>Services</span>
                <h1>{serviceTitle}</h1>
                <p>{serviceDescription}</p>
              </div>

              {/* <!-- Product Pricing --> */}
              <div className="product-price">
                <span>{servicePrice}$</span>
                <Link
                  to={{
                    pathname: '/cart',
                    state: {
                      serviceId: serviceId,
                      serviceTitle: serviceTitle,
                      serviceDescription: serviceDescription,
                      servicePrice: servicePrice,
                      serviceImg: serviceImg,
                      serviceComments: [serviceComments],
                    },
                  }}
                >
                  <a href={'/#'} className="cart-btn">
                    Add to cart
                  </a>
                </Link>
              </div>
            </div>
          </main>
          <div style={{ margin: '10rem' }}></div>
        </div>
      </div>
      <SimilarProducts />

      <CommentsSection
        serviceComments={serviceComments}
        serviceId={serviceId}
      />
    </>
  );
}

export default ItemPage;
