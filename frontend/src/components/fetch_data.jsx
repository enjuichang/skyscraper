// src/App.js
import React, { useEffect, useState } from 'react';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <header>
        <h1>Welcome to My App</h1>
        {data && <p>{data.message}</p>}
      </header>
    </div>
  );
}

export default FetchData;