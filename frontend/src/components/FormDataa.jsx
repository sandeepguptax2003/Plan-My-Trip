
import React, { useState } from 'react';
import './FormDataa.css';

const PostDataForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [travellers, setTravellers] = useState('');
  const [budget, setBudget] = useState('');


const handleSubmit = async (e) => {
    e.preventDefault();
  
    const postData = {
      name,
      email,  
      destination,
      travellers,
      budget,
    };
     console.log("HELLO")
    try {
      const response = await fetch(`https://cobalt-blue-scallop-tux.cyclic.cloud/api/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      const data = await response.json();
      console.log('Detination Saved Successfully:', data);

      alert('Post Successfully');
    } catch (error) {
      console.error('Failed to store data:', error);
    }
  };
  
  return (
    <div className="form-container">
      <h2 className="form-title">Post Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="destination">Destination:</label>
          <select
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          >
            <option value="">Select Destination</option>
            <option value="India">India</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
          </select>
        </div>
        <div>
          <label htmlFor="travellers">No. of travellers:</label>
          <input
            type="number"
            id="travellers"
            value={travellers}
            onChange={(e) => setTravellers(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="budget">Budget Per Person:</label>
          <input
            type="number"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default PostDataForm;
