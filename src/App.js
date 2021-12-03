import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductsListPage from './pages/ProductsListPage/ProductsListPage';
import ProductPage from './pages/ProductPage/ProductPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsListPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
