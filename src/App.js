import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Cart from './components/Cart';
import Products from './components/Products';
// import { fetchProducts } from './rtk/slices/products-slice';
import { useDispatch } from 'react-redux';


function App() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate("/")
  }, []);


  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
