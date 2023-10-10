import './App.css';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './CartContext';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Footer from './pages/Footer';
import Motherboards from './pages/Motherboards';
import Store from './pages/Store'
import CpusPage from './pages/CpusPage';
import GpusPage from './pages/GpusPage';
import MemoryPage from './pages/MemoryPage';

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
            <Route path='cpus' element={<CpusPage />} />
            <Route path='categories' element={<Categories />} />
            <Route path='gpus' element={<GpusPage />} />
            <Route path='memory' element={<MemoryPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
