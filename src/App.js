import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductsListPage from './pages/ProductsListPage/ProductsListPage';
import ProductPage from './pages/ProductPage/ProductPage';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';

const App = () => {
 return (
  <Router>
   <div className='app'>
    <Routes>
     <Route path='/' element={<HomePage />} />
     <Route path='/products' element={<ProductsListPage />} />
     <Route path='/products/:id' element={<ProductPage />} />
     <Route path='/register' element={<Register />} />
     <Route path='/login' element={<Login />} />
	 <Route path='/cart' element={<Cart />} />
    </Routes>
   </div>
  </Router>
 );
};

export default App;
