import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App = () => {
  const [backendData, setBackendData] = useState({ users: [] });

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        setBackendData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signup />} />
        </Routes>
      </BrowserRouter>

      <div>
        {(backendData.users.length === 0) ? (
          <p>Loading data from backend</p>
        ) : (
          <>
            <h2>Data fetched from backend just for testing</h2>
            {backendData.users.map((user, i) => (
              <p key={i}>{user}</p>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default App;
