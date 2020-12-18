import React, { useState } from 'react';

import '../static/styles/components/SearchForm.css';

const SearchForm = ({ setIp }) => {
  const [value, setValue] = useState({ ip: '' });

  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validateIPaddress(value.ip);

    if (isValid) {
      setIp(value.ip);
    } else {
      alert('Please, insert a valid IP address.');
    }
  }

  function handleInputchange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  function validateIPaddress(ipaddress) {
    if (
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        ipaddress
      )
    ) {
      return true;
    }
    return false;
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        className="SearchForm-input"
        placeholder="Search for any IP address or domain"
        type="text"
        value={value.ip}
        name="ip"
        onChange={handleInputchange}
      />
      <button className="SearchForm-button" type="submit">
        <i className="fas fa-angle-right"></i>
      </button>
    </form>
  );
};

export default SearchForm;
