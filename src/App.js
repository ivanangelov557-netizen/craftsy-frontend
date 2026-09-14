import './App.css';
import Header from './components/Header';
import HeroSearch from './components/HeroSearch';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSearch />
      
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Craftsy!</h1>
        <p className="text-gray-600">Building the future of artisan marketplace...</p>
      </main>
    </div>
  );
}

export default App;