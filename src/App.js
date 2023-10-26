import './styles/app.scss';
import './styles/header.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
// import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path='/' exact element={<Products />} />
        <Route path='/cart' exact element={<Cart />} />
      </Routes>
      <Toaster />
    </Router>
    
  );
}

export default App;
