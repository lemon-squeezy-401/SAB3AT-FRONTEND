/* eslint-disable no-lone-blocks */
import React, { Component } from 'react';
import './ProductSlider.css';
import img1 from '../../../assets/img1.jpg';
export class Slider extends Component {
  render() {
    return (
      <div >
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
            <img src="https://cdn.pixabay.com/photo/2016/02/02/11/56/leather-1175154_960_720.jpg" alt='pic' />
            <img src="https://cdn.pixabay.com/photo/2018/02/18/17/38/time-3162910__340.jpg" alt='pic' />
            <img src="https://cdn.pixabay.com/photo/2017/10/09/17/29/computer-component-2834138__340.jpg" alt='pic' />
            <img src="https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH21785f1fc16e47c7bce393920546b75aM%2FVintage-Small-Women-Bucket-Bag-for-Handbags-Women-PU-Leather-Shoulder-Bags-Girls-Drawstring-Messenger-Crossbody.jpg" alt='pic' />
            <img src="https://cdn.pixabay.com/photo/2016/10/07/12/04/camera-1721382__340.jpg" alt='pic' />
            <img src={img1} alt='pic' />
            <img src="https://cdn.pixabay.com/photo/2016/04/12/16/57/tent-1324847__340.jpg" alt='pic' />
            <img src="https://www.batna24.com/img/500/329257_1.jpg" alt='pic' />
          </div>
          <div>
            <img src="https://cdn.pixabay.com/photo/2016/09/21/17/04/eyewear-1685206__340.jpg" alt='pic' />
            <img src="https://cdn.shopify.com/s/files/1/0247/4213/3794/products/product-image-826042778_1024x.jpg?v=1575486803" alt='pic' />
            <img src="https://fdn.gsmarena.com/imgroot/news/19/12/top-phones-of-2019/-727/gsmarena_001.jpg" alt='pic' />
            <img src="https://www.ineedamobile.com/wp-content/uploads/2018/04/Refurbished-Mobile-Phones.png" alt='pic' />
            <img src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhaW4lMjB0c2hpcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt='pic' />
            <img src="https://images2.habeco.si/upload/product/additional/344370_productmain.jpg" alt='pic' />
            <img src="https://spy.com/wp-content/uploads/2019/12/curved-tv-samsung.jpg?w=1000&h=750&crop=1" alt='pic' />
            <img src="https://img.joomcdn.net/e4ede98c2dc8e3760d72f8687cb4408e770e89d7_original.jpeg" alt='pic' />
          </div>


          {/* 
          <img src="https://image.shutterstock.com/image-photo/closeup-hand-young-asian-woman-600w-1932043229.jpg" alt='pic' />
            <img src="https://image.shutterstock.com/image-photo/closeup-hand-young-asian-woman-600w-1932043229.jpg" alt='pic' />
            <img src="https://image.shutterstock.com/image-photo/closeup-hand-young-asian-woman-600w-1932043229.jpg" alt='pic' />
            <img src="https://cdn.pixabay.com/photo/2016/12/08/11/50/time-1891569__340.png" alt='pic' />
            <img src="https://cdn.pixabay.com/photo/2015/02/26/08/29/cheese-slicer-650029_960_720.jpg" alt='pic' />
            <img src="https://cdn.pixabay.com/photo/2015/02/26/08/29/cheese-slicer-650029_960_720.jpg" alt='pic' /> */}



        </logo-slider>


      </div >

    );
  }
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
