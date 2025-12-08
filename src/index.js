import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Annonce from './Components/Anonce/Anonce';
import Home from './Components/home/Home';
import About from './Components/About/About';
import Event from './Components/Events/Events';
import Team from './Components/Team/Team';
import Contact from './Components/contacte/Contact';
import Footer from './Components/Footer/Footer';
import Part from './Components/Partner/Partner';
import Static from './Components/statics/Statics';
import Loader from './Components/Loader/Loader';  // 👈 import loader
import reportWebVitals from './reportWebVitals';

function MainApp() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (2s delay) — replace with API calls if needed
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Home />
      {/* <Annonce /> */}
      <About />
      <Static />
      <Event />
      <Team />
      <Part />
      <br/>
      <Contact />
      
      <Footer />
      
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);

reportWebVitals();
