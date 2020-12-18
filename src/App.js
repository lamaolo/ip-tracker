import { useEffect } from 'react';

import Header from './components/Header';
import Map from './components/Map';
import createMap from './lib/createMap';
import searchIp from './lib/searchIp';

import './App.css';
import { useState } from 'react';

function App() {
  const [ip, setIp] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    if (ip) {
      searchIp(ip).then((data) => {
        setData(data);
        createMap(data.location.lat, data.location.lng, 12);
      });
    }
    createMap();
  }, [ip]);

  return (
    <>
      <Header data={data} setIp={setIp} />
      <Map ip={ip} />
    </>
  );
}

export default App;
