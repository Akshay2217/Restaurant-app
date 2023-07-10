import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
