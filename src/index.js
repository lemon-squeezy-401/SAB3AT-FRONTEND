import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//----------------redux------------//
// import { creatStore } from "redux";
// import { Provider } from "react-redux";
// import { reducer } from "./Redux/Reducers/reducer";ã
// // const reducers = combineReducers({
// //   categories: categoriesReducer,
// //   products: productsReducer,
// //   cart: cartReducer,
// // });
// const store = creatStore(reducer);
//----------------------------------//
ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
