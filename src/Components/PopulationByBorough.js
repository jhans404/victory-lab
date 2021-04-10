import React from 'react';
import {bronx, brooklyn, manhattan, queens, statenisland} from '../Data/PopulationByBorough.js';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip, VictoryStack } from 'victory';

function PopulationByBorough() {
  return (
    <div className="visCard"> 
     <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={bronx.year}
          tickFormat={(t) => (`${t}`)}
        />

        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x/1000000}M`)}
        />

        <VictoryStack
          colorScale={["#b8837e", "#6375af", "#2d2e4d", "#f1dad0", "#c4bdd3"]}
        >

          <VictoryBar
            data={brooklyn}
            x='year'
            y='population'
          />

          <VictoryBar
            data={bronx}
            x='year'
            y='population'
          />

          <VictoryBar
            data={manhattan}
            x='year'
            y='population'
          />

          <VictoryBar
            data={queens}
            x='year'
            y='population'
          />

          <VictoryBar
            data={statenisland}
            x='year'
            y='population'
          />
        </VictoryStack>
      </VictoryChart>
    </div>
    );
}

export default PopulationByBorough;