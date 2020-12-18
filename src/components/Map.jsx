import React from 'react';

import '../static/styles/components/Map.css';

const Map = () => {
  // div que utiliza la librería para crear el mapa
  return (
    <>
      <div id="mapid"></div>{' '}
      <div className="credits">
        <p>
          Challenge by{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0"
          >
            FrontendMentor
          </a>
          . Coded by{' '}
          <a target="_blank" rel="noreferrer" href="https://github.com/lamaolo">
            Lucero Amaolo
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default Map;
