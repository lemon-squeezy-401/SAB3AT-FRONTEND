import React, { useContext } from 'react';
import './SimilarProducts.css';
import { ServicesContext } from '../../../context/AllServices';

function SimilarProducts() {
  const { services } = useContext(ServicesContext);

  return (
    // {
    // const semiList = this.state.similerMoviesArray.length && this.state.similerMoviesArray.slice(0, 4).map((currentMovie, index) => {
    // return (
    /* key={index} add it in the anchor*/
    <div>
      <section className="section movie-similar">
        <h2 className="section-header">Similar Items</h2>
        <div className="movies-suf">
          {services.slice(0, 4).map((service) => {
            return (
              <div key={service.id} style={{margin: '1rem'}}>
                <a href="/#" className="movie-card">
                  <h3 className="movie-title">{service.title}</h3>
                  <img
                    // src={`https://m.media-amazon.com/images/I/71e9Ffo1AvL._AC_SY450_.jpg`}
                    src={service.image}
                    alt=""
                    className="movie-poster"
                  />
                  <div className="movie-meta">
                    <span className="movie-duration">${service.price}</span>
                    {/* <span className="movie-year">2012</span>
                    <span className="movie-lang">rus</span> */}
                  </div>
                  <div className="movie-description">
                    <p className="movie-description-text">
                      {service.description}
                    </p>
                  </div>
                </a>
              </div>
            );
          })}
         
        </div>
      </section>
    </div>
    //   )
    // }
  );
}

export default SimilarProducts;
