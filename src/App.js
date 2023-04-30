import './App.css';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import CartProvider, { CartContext } from './CartContext';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Shirts from './pages/Shirts';
import Pants from './pages/Pants';
import Shoes from './pages/Shoes';

function App() {

  return (
    <div className='App'>
      <CartProvider>
        <Container >
          <NavbarComponent></NavbarComponent>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path='success' element={<Success />} />
              <Route path='cancel' element={<Cancel />} />
              <Route path='home' element={<Store />} />
              <Route path='categories' element={<Categories />} />
              <Route path='shirts' element={<Shirts />} />
              <Route path='pants' element={<Pants />} />
              <Route path='shoes' element={<Shoes />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </CartProvider>
    </div>
  );
}

export default App;
