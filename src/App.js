import './App.css';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import CartProvider from './CartContext';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <CartProvider>
        <Container >
          <NavbarComponent></NavbarComponent>
          <BrowserRouter>
            <Routes>
              <Route index element={<Store />} />
              <Route path='success' element={<Success />} />
              <Route path='cancel' element={<Cancel />} />
              <Route path='home' element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </CartProvider>
    </div>
  );
}

export default App;
