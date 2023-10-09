import './App.css';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './pages/Store';
import CartProvider from './CartContext';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Shirts from './pages/Shirts';
import Shoes from './pages/Shoes';
import CheckOut from './pages/CheckOut';
import Footer from './pages/Footer';
import Motherboards from './pages/Motherboards';

function App() {

  return (
    <div className='App'>
      <CartProvider>
        <NavbarComponent></NavbarComponent>
          <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='home' element={<Store />} />
            <Route path='motherboards' element={<Motherboards />} />
            <Route path='categories' element={<Categories />} />
            <Route path='shirts' element={<Shirts />} />
            <Route path='shoes' element={<Shoes />} />
            <Route path='checkout' element={<CheckOut />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
