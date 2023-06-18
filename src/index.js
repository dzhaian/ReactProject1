import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/Navbar";
import NavbarMain from "./components/NavbarMain";
import Component1 from "./components/Component1";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import Footer from "./components/Footer";
import Component5 from "./components/Component5";
import Component6 from "./components/Component6";
import Component7 from "./components/Component7";
import Component8 from "./components/Component8";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div className='wrapper'>
          <Navbar />
          <Component1 />
          <NavbarMain />
          <Component3 />
          <Component4 />
          <Component8 />
          <Component7 />
          <Component4 />
          <Component5 />
          <Component6 />
          <Footer />
      </div>
  </React.StrictMode>
);
reportWebVitals();
