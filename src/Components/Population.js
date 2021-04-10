import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';

const populationData = [
  {year: 1995, population: 7.35},
  {year: 1996, population: 7.361},
  {year: 1997, population: 7.383},
  {year: 1998, population: 7.404},
  {year: 1999, population: 7.428},
  {year: 2000, population: 8.015},
  {year: 2001, population: 8.044},
  {year: 2002, population: 8.042},
  {year: 2003, population: 8.023},
  {year: 2004, population: 7.984},
  {year: 2005, population: 7.94},
  {year: 2006, population: 7.904},
  {year: 2007, population: 7.909},
  {year: 2008, population: 7.946},
  {year: 2009, population: 7.991},
  {year: 2010, population: 8.194},
  {year: 2011, population: 8.293},
  {year: 2012, population: 8.384},
  {year: 2013, population: 8.459},
  {year: 2014, population: 8.521},
  {year: 2015, population: 8.582},
  {year: 2016, population: 8.615},
  {year: 2017, population: 8.623}
];

function Population() {
  return (
    <div className="visCard"> 
      <VictoryChart 
        domainPadding={10} 
        theme={VictoryTheme.material}
      >

        <VictoryAxis
          tickValues={populationData.year}
          //tickValues={[1995,1996,1997,1998,1999,2000,2001,2002,2003,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017]}
          tickFormat={(t) => (`${t}`)}
        />

        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x}M`)}
        />

        <VictoryBar
          label={<VictoryTooltip/>} 
          data={populationData} 
          x="year" 
          y="population"
        />
      
      </VictoryChart>
    </div>
    );
}

export default Population;