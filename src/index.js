import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';

import App from './components/app';
import reducers from './reducers/reducers';

let videoPlayer;
const createStoreWithMiddleware = applyMiddleware( reduxThunk, promise )( createStore );
const store = createStoreWithMiddleware( 
  reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);


// Wait until we detect the Twitch videoplayer. Once we find it on the DOM we'll then
// attach our app as an overlay
const initiateVideoPlayer = setInterval( () => {
  videoPlayer = document.getElementsByClassName( 'video-player__container' )[ 0 ];

  if ( videoPlayer ) {
    const app = document.createElement( 'div' );
    app.id = 'heroes-tooltip-root';
    
    videoPlayer.prepend( app );
    
    ReactDOM.render(
        <Provider store={ store }>
          <App />
        </Provider>
        , document.getElementById( 'heroes-tooltip-root' )
    );

    clearInterval( initiateVideoPlayer );
  }
}, 10000 );