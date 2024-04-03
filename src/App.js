import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    // Fetching customer data from an API
    fetch('')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

  useEffect(() => {
    // Interval for changing photos every 10 seconds
    const interval = setInterval(changePhotos, 10000);
    return () => clearInterval(interval);
  }, [selectedCustomer]);

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
  };

  const changePhotos = () => {
    // Logic to change photos in the grid
    // You can fetch new photos from a public API and update state accordingly
    console.log('Changing photos...');
  };

  return (
    <div className="App">
      <div className="customer-list">
        {customers.map((customer, index) => (
          <div
            key={index}
            className={`customer-card ${selectedCustomer === customer ? 'selected' : ''}`}
            onClick={() => handleCustomerClick(customer)}
          >
            <h3>{customer.name}</h3>
            <p>{customer.title}</p>
          </div>
        ))}
      </div>
      <div className="customer-details">
        {selectedCustomer && (
          <>
            <h2>{selectedCustomer.name}</h2>
            <p>{selectedCustomer.title}</p>
            <p>{selectedCustomer.address}</p>
            <div className="photo-grid">
              {[...Array(9)].map((_, index) => (
                <img key={index} src={`https://via.placeholder.com/150?text=Photo${index+1}`} alt={`Photo ${index+1}`} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
