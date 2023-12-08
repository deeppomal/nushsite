import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from './components/Gallery';
import About from './components/About';
import Hamper from './components/Hamper';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/hampers" element={<Hamper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
