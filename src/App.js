import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSearch from './components/HeroSearch';
import CategoryCards from './components/CategoryCards';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSearch />
              <CategoryCards />
              <ProductGrid />
              
              <main className="p-8">
                <h1 className="text-4xl font-bold mb-4">Welcome to Craftsy!</h1>
                <p className="text-gray-600">Building the future of artisan marketplace...</p>
              </main>
            </>
          }
        />
        
        {/* Product Detail Page */}
        <Route path="/product/:productId" element={<ProductDetail />} />

        {/* Shopping Cart Page */}
        <Route path="/cart" element={<ShoppingCart />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        {/* User Profile Page */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;