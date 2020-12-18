import React from 'react';

import '../static/styles/components/MainInformation.css';

const MainInformation = ({ data }) => {
  console.log('data desde maininformation', data);

  return (
    <div className="MainInformation">
      <div className="MainInformation-item">
        <p className="MainInformation-title">ip address</p>
        <p className="MainInformation-description">
          {data ? data.ip : 'Unknown'}
        </p>
      </div>

      <span className="separation"></span>

      <div className="MainInformation-item">
        <p className="MainInformation-title">location</p>
        <p className="MainInformation-description">
          {data ? data.location.region : 'Unknown'}
        </p>
      </div>

      <span className="separation"></span>

      <div className="MainInformation-item">
        <p className="MainInformation-title">timezone</p>
        <p className="MainInformation-description">
          {data ? data.location.timezone : 'Unknown'}
        </p>
      </div>

      <span className="separation"></span>

      <div className="MainInformation-item">
        <p className="MainInformation-title">isp</p>
        <p className="MainInformation-description">
          {data ? data.isp : 'Unknown'}
        </p>
      </div>
    </div>
  );
};

export default MainInformation;
