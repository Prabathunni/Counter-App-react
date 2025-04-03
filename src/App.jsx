import './App.css';
import Counter from './components/Counter';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="flex-grow-1">
        <Counter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
