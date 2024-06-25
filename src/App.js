// App.js
import React from 'react';
import { BrowserRouter as  Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import ProductPage from './pages/ProductPage';
import Home from './pages/Home';
const App = () => {
  return (
    <div className='App'> 
      <Header/>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />



      </Routes>
    </div>
);
}

export default App;
