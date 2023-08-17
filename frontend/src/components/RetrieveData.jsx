
import React, { useEffect, useState } from 'react';
import './RetrieveData.css';
let url = "https://cobalt-blue-scallop-tux.cyclic.cloud/"

const RetrieveData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${url}/api/posts`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Retrieved data:', data);
        setData(data);
      })
      .catch((error) => {
        console.error('Failed to retrieve data:', error);
      });
  }, []);
  const handleDelete = async (id) => {
    try {
      await fetch(`${url}/api/posts/${id}`, {
        method: 'DELETE',
      });
      console.log('Detination Deleted Successfully');
      setData(data.filter((entry) => entry._id !== id));
    } catch (error) {
      console.error('Failed to delete data:', error);
    }
  };

  return (
    <div className="data-container">
      <h2 className="data-title">Retrieve Data</h2>
      {data.map((entry) => (
        <div key={entry._id} className="data-entry">
          <p>Name: {entry.name}</p>
          <p>Email Address: {entry.email}</p>
          <p>Destination: {entry.destination}</p>
          <p>No. of travellers: {entry.travellers}</p>
          <p>Budget Per Person: {entry.budget}</p>
          <button
            className="data-delete-btn"
            onClick={() => handleDelete(entry._id)}
          >
            Delete
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default RetrieveData;
