import React from 'react';

import SearchForm from './SearchForm';
import MainInformation from './MainInformation';

import '../static/styles/components/Header.css';

const Header = ({ data, setIp }) => {
  return (
    <header className="Header">
      <div className="Header-title">
        <h1>IP Address Tracker</h1>
      </div>
      <SearchForm setIp={setIp} />
      <MainInformation data={data} />
    </header>
  );
};

export default Header;
