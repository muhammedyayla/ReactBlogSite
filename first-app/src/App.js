import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from './Components/navbar'; // Assuming navbar.js is in a folder named "navbar"
import Header from './Components/header';
import Jumbotron from './Components/jumbotron';
import Hero from './Components/hero';
import Services from './Components/services';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />  
      <Jumbotron />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
