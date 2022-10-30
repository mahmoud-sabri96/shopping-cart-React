import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/AppNavbar';
import Cart from './components/Cart';
import Products from './components/Products';
// import { fetchProducts } from './rtk/slices/products-slice';
// import { useDispatch } from 'react-redux';


function App() {


  return (
    <div className="App">
      <AppNavbar />
      <Products/>
      {/* <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes> */}
    </div>
  );
}

export default App;
