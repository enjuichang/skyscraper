// src/App.js
import React, { useEffect, useState } from 'react';

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://flask-be-e2f829a47d3c.herokuapp.com/api/data');
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
        <h1>Welcome to My App</h1>
        <div clas="text-white">
        {data && <p>{data.message}</p>}
        </div>
    </div>
  );
}

export default FetchData;