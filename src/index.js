import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';

import App from './components/app';
import reducers from './reducers/reducers';


const createStoreWithMiddleware = applyMiddleware( reduxThunk, promise )( createStore );
const store = createStoreWithMiddleware( 
  reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);


setTimeout(() => {
  const videoPlayer = document.getElementsByClassName( 'video-player__container' )[ 0 ];
  const app = document.createElement( 'div' );
  app.id = 'heroes-tooltip-root';
  
  if ( videoPlayer ) videoPlayer.prepend( app );
  
  ReactDOM.render(
      <Provider store={ store }>
        <App />
      </Provider>
      , document.getElementById( 'heroes-tooltip-root' )
  );
}, 5000 );
