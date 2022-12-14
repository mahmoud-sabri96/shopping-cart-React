import { Outlet, Route, Routes } from 'react-router-dom';
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
      <Outlet />
      <Routes>
        <Route path='/' element={<><Outlet /></>}>
          <Route path="shopping-cart-React" element={<Products />} />
          <Route path="" element={<Products />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        {/* <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} /> */}
      </Routes>
    </div>
  );
}

export default App;
