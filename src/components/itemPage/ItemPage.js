import React from 'react';
import { useHistory } from 'react-router-dom';

import SimilarProducts from './SimilarProducts/SimilarProducts';
import CommentsSection from './CommentsSection/CommentsSection';
import './itemPage.css';
import img from './cardImg.PNG';

function ItemPage(props) {
  // const [services, setServices] = useState([]);
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
      {/* {console.log('log services from item page', services)} */}
      <div classNameName="product-html">
        <div classNameName="product-body">
          <main className="container">
            {/* <!-- Left Column / Headphones Image --> */}
            <div className="left-column">
              <img
                data-image="black"
                src={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdgMcqRSvIABti28yCDXg0Rm3hdo_tRwiA3g&usqp=CAU'
                }
                alt=""
              />
              <img
                data-image="blue"
                src={
                  'data:image/jpeg;base64,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'
                }
                alt=""
              />
              <img data-image="red" className="active" src={img} alt="" />
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
                <a href={'/#'} className="cart-btn">
                  Add to cart
                </a>
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
