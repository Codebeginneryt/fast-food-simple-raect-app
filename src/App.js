import React from 'react';
import './App.css';
import About from './components/About';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
              <>
              <About />
              <Shop />
              <Menu />
              </>
          }>
          </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/shop" element={<Shop />}>
          </Route>
          <Route exact path="/menu" element={<Menu />}>
          </Route>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
