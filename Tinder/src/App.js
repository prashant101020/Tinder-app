import React from 'react';
import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div>
      {/* header */}
        <Header/>
      {/* <h1>going to build an tinder</h1> */}
      {/* swipers */}
      <TinderCards/>

         
      {/* footer */}
      <SwipeButtons/>
    </div>
  );
}

export default App;
