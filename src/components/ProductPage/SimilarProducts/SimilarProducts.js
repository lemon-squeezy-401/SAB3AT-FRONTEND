import React from 'react';
import './SimilarProducts.css';
function SimilarProducts() {
  return (
    // {
    // const semiList = this.state.similerMoviesArray.length && this.state.similerMoviesArray.slice(0, 4).map((currentMovie, index) => {
    // return (
    /* key={index} add it in the anchor*/
    <div>
      <section className="section movie-similar">
        <h2 className="section-header">Similer Products</h2>
        <div className="movies-suf">
          <a href="/#" className="movie-card">
            <h3 className="movie-title">any title</h3>
            <img
              src={`https://m.media-amazon.com/images/I/71e9Ffo1AvL._AC_SY450_.jpg`}
              alt=""
              className="movie-poster"
            />
            <div className="movie-meta">
              <span className="movie-duration">2ч 7мин</span>
              <span className="movie-year">2012</span>
              <span className="movie-lang">rus</span>
            </div>
            <div className="movie-description">
              <p className="movie-description-text">any description</p>
            </div>
          </a>
          <a href="/#" className="movie-card">
            <h3 className="movie-title">any title</h3>
            <img
              src={`https://m.media-amazon.com/images/I/61D2GLrJvAL._AC_SS450_.jpg`}
              alt=""
              className="movie-poster"
            />
            <div className="movie-meta">
              <span className="movie-duration">2ч 7мин</span>
              <span className="movie-year">2012</span>
              <span className="movie-lang">rus</span>
            </div>
            <div className="movie-description">
              <p className="movie-description-text">any description</p>
            </div>
          </a>
          <a href="/#" className="movie-card">
            <h3 className="movie-title">any title</h3>
            <img
              src={`https://m.media-amazon.com/images/I/61SAa5qiaIL._AC_SL1000_.jpg`}
              alt=""
              className="movie-poster"
            />
            <div className="movie-meta">
              <span className="movie-duration">2ч 7мин</span>
              <span className="movie-year">2012</span>
              <span className="movie-lang">rus</span>
            </div>
            <div className="movie-description">
              <p className="movie-description-text">any description</p>
            </div>
          </a>
          <a href="/#" className="movie-card">
            <h3 className="movie-title">any title</h3>
            <img
              src={`https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_JO?$jpglarge$&wid=1250`}
              alt=""
              className="movie-poster"
            />
            <div className="movie-meta">
              <span className="movie-duration">2ч 7мин</span>
              <span className="movie-year">2012</span>
              <span className="movie-lang">rus</span>
            </div>
            <div className="movie-description">
              <p className="movie-description-text">any description</p>
            </div>
          </a>
        </div>
      </section>
    </div>
    //   )
    // }
  );
}

export default SimilarProducts;
