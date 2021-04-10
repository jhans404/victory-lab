# Lab: Demographics Dashboard

![NYC Demographics Dashboard](./nyc-demographics-dashboard.png)

## The Goal

In this lab, you'll build a dashboard to display several data visualizations representing NYC demographics data.

## The Setup

1. Clone this repository using `git clone`
2. `cd` into the project folder
3. `npm install`
4. `npm start`

## The Lab

### Part One: Initialize Victory

1. Install the Victory library using `npm install victory`.

### Part Two: NYC Overall Population

1. Add a new component called `<Population />` to `App.js`, and add a new `.js` file for the component.
2. Initialize the component with the necessary `import` and `export` statements, including for the Victory library.
   1. You'll probably need to consult the [Getting Started Guide](https://formidable.com/open-source/victory/docs) for help on syntax.
3. Add the following data to the `<Population />` component (NYC Population by Year (in millions)). 

```javascript
const data = [
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
```

4. Import the `<VictoryBar />` component and use it in the `<Population />` component.
5. Add props to the `<VictoryBar />` component, including for `data`, `x`, and `y` values.
6. Wrap the `<VictoryBar />` component with a `<VictoryChart />` component to provide axes, and don't forget to `import` VictoryChart, too.
7. Import and add the `<VictoryAxis />` component (2 of them!), and set props to add `tickValues` and `tickFormatting`. Add `domainPadding` to the `<VictoryChart />` component to better arrange the y-axis.
8. Import and add the `<VictoryTheme />` component, and add a `theme` prop to the `<VictoryChart />` component.

### Part Three: NYC Population by Borough

1. Build a new component, `<PopulationByBorough />`, that uses the `<VictoryStack />` component and the data in `/src/Data/PopulationByBorough.js` to show the overall NYC Population by Year broken down by borough.
2. Change the theme of the `<VictoryStack />` component.
3. Update the `<PopulationByBorough />` component to use the data in `/src/Data/HistoricalPopulation.js` instead.

### Part Four: Stretch
1. Use the data in `/src/Data/HistoricalPopulation.js` to build a series of `<VictoryPie />` charts (one for each year) showing the population breakdown of New York City by borough.
2. Use the data in `/src/Data/PovertyByAgeGender.js` to build one or more data visualizations.
   1. Consider how to use `.map()` to iterate over the dataset.
   2. Consider how to use `.filter()` to limit the dataset to data which meet particular criteria.
> Note: You may need to edit the data file in order to make it usable with React; it has not been prepared for you.

### Source(s)
- NYC Population data from [US Census Bureau](https://www.census.gov/glossary/#term_Populationestimates)
- NYC Population by Borough data from [NYC Open Data](https://data.cityofnewyork.us/City-Government/New-York-City-Population-by-Borough-1950-2040/xywu-7bv9)
- Poverty by Age/Gender data from [datausa.io](https://datausa.io/profile/geo/new-york-ny)