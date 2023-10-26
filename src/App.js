
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
