import './App.css';
import NavbarComponent from './components/NavbarComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';

function App() {
  return (
    <Container>
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
        <Routes>
          <Route index element={<Store />} />
          <Route path='success' element={<Success />} />
          <Route path='cancel' element={<Cancel />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
