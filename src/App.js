import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Craftsy!</h1>
        <p className="text-gray-600">Building the future of artisan marketplace...</p>
      </main>
    </div>
  );
}

export default App;