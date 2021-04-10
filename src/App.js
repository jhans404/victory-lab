import React from 'react';
import Banner from './Components/Banner.js';
import Footer from './Components/Footer.js';
import Population from './Components/Population.js';
import PopulationByBorough from './Components/PopulationByBorough.js';
import './App.css';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';


function App() {
  return (
    <div className="App">
      <Banner />
      <h1>NYC Demographics Dashboard</h1>
      
      <Population />

      <PopulationByBorough />

      <Footer />
    </div>
  );
}

export default App;
