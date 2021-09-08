/* eslint-disable no-lone-blocks */
import React, { useContext } from 'react';
import './ProductSlider.css';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../../context/AllProducts';

export function Slider() {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <p className="P"> Best selling products</p>
      <logo-slider>
        {/* <div>
            <div style={{ color: 'red', display: 'flex' }}> <p>hello</p>  <img src="https://picsum.photos/100" alt='pic' /></div>
            <div>  <img src="https://picsum.photos/102" alt='pic' /> </div>
            <div> <img src="https://picsum.photos/103" alt='pic' /></div>
            <div> <img src="https://picsum.photos/104" alt='pic' /></div>
            <div> <img src="https://picsum.photos/105" alt='pic' /></div>
            <div> <img src="https://picsum.photos/106" alt='pic' /></div>
            <div> <img src="https://picsum.photos/107" alt='pic' /></div>
            <div> <img src="https://picsum.photos/108" alt='pic' /></div>
          </div> */}

        <div>
          {products.map((item) => {
            return (
              // <Link
              //   to={{
              //     pathname: '/item',
              //     state: {
              //       serviceId: `${item._id}`,
              //       serviceTitle: `${item.title}`,
              //       serviceDescription: `${item.description}`,
              //       servicePrice: `${item.price}`,
              //       serviceImg: `${item.image}`,
              //       serviceComments: [`${item.comments}`],
              //     },
              //   }}
              // >
              <img
                className="any"
                src={item.image}
                alt="pic"
                style={{ width: '25rem' }}
              />
              // </Link>
            );
          })}
        </div>
        {/* <div>
          <img
            src="https://cdn.pixabay.com/photo/2016/09/21/17/04/eyewear-1685206__340.jpg"
            alt="pic"
          />
          <img
            src="https://cdn.shopify.com/s/files/1/0247/4213/3794/products/product-image-826042778_1024x.jpg?v=1575486803"
            alt="pic"
          />
          <img
            src="https://fdn.gsmarena.com/imgroot/news/19/12/top-phones-of-2019/-727/gsmarena_001.jpg"
            alt="pic"
          />
          <img
            src="https://www.ineedamobile.com/wp-content/uploads/2018/04/Refurbished-Mobile-Phones.png"
            alt="pic"
          />
          <img
            src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhaW4lMjB0c2hpcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            alt="pic"
          />
          <img
            src="https://images2.habeco.si/upload/product/additional/344370_productmain.jpg"
            alt="pic"
          />
          <img
            src="https://spy.com/wp-content/uploads/2019/12/curved-tv-samsung.jpg?w=1000&h=750&crop=1"
            alt="pic"
          />
          <img
            src="https://img.joomcdn.net/e4ede98c2dc8e3760d72f8687cb4408e770e89d7_original.jpeg"
            alt="pic"
          />
        </div> */}

        {/*
          <img src="https://image.shutterstock.com/image-photo/closeup-hand-young-asian-woman-600w-1932043229.jpg" alt='pic' />
            <img src="https://image.shutterstock.com/image-photo/closeup-hand-young-asian-woman-600w-1932043229.jpg" alt='pic' />
            <img src="https://image.shutterstock.com/image-photo/closeup-hand-young-asian-woman-600w-1932043229.jpg" alt='pic' />
            <img src="https://cdn.pixabay.com/photo/2016/12/08/11/50/time-1891569__340.png" alt='pic' />
            <img src="https://cdn.pixabay.com/photo/2015/02/26/08/29/cheese-slicer-650029_960_720.jpg" alt='pic' />
            <img src="https://cdn.pixabay.com/photo/2015/02/26/08/29/cheese-slicer-650029_960_720.jpg" alt='pic' /> */}
      </logo-slider>
    </div>
  );
}
export default Slider;

// import React, { Component } from 'react';
// //import Splide from '@splidejs/splide';
// import './slider.css';

// export class slider extends Component {
//   render() {
//     return (
//       <div>
//         <link rel="stylesheet" href="path-to-the-file/splide.min.css" />
//         <link rel="stylesheet" href="node_modules/@splidejs/splide/dist/css/splide.min.css" />
//         <div class="splide">
//           <div class="splide__track">
//             <ul class="splide__list">
//               <li class="splide__slide">Slide 01</li>
//               <li class="splide__slide">Slide 02</li>
//               <li class="splide__slide">Slide 03</li>
//             </ul>
//           </div>

//           <div class="splide__progress">
//             <div class="splide__progress__bar">
//             </div>
//           </div>
//         </div>

//       </div>
//     );
//   }
// }

// export default slider;
