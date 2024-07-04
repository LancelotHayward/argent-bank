import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import { store } from './store/store.js';

import Header from "./components/Header/Header.jsx"
import Home from "./pages/Home/Home.jsx"
import Signin from "./pages/Signin/Signin.jsx"
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import Footer from "./components/Footer/Footer.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-in" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </Router>
  </Provider>
);

reportWebVitals();
