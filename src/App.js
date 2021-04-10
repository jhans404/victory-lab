import React from 'react';
import Banner from './Components/Banner.js';
import Footer from './Components/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner />
      <h1>NYC Demographics Dashboard</h1>
      
      <div className="visCard">
        <p>Add a visualization here</p>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
