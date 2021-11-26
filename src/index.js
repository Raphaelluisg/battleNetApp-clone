import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Wishlist from './pages/Wishlist/Wishlist';
import Account from './pages/Account/Account';
import Login from './pages/Login/Login';
import Game from './pages/Game/Game';
import Register from './pages/Register/Register';
import Footer from './components/Footer/Footer';
import Header from './components/Navbar/Navbar';
import axios from 'axios';

axios.defaults.baseURL = 'https://nintendo-shop.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/list' element={<Wishlist />} />
        <Route path='/login' element={<Login />} />
        <Route path='/account' element={<Account />} />
        <Route path='/game' element={<Game />} />
        <Route path='/register' element={<Register />} />
        <Route path='/wishlist' element={<Wishlist />} />
      </Routes>
    </React.StrictMode>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);
