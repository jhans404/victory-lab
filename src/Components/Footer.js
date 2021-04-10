import React from 'react';

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterContent">
        <h4>Data Sources</h4>
        <ul>
          <li>
            <a href="https://www.census.gov/glossary/#term_Populationestimates" target="_blank">US Census Bureau</a>
          </li>
          <li>
            <a href="https://data.cityofnewyork.us/City-Government/New-York-City-Population-by-Borough-1950-2040/xywu-7bv9" target="_blank">NYC Open Data</a>
          </li>
          <li>
            <a href="https://datausa.io/profile/geo/new-york-ny" target="_blank">datausa.io</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
