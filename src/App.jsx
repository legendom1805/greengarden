import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/aboutus';
import Privacypolicy from './components/privacypolicy';
import Disclaimer from './components/disclaimer';

function App() {
  return (
    <BrowserRouter basename="/greengarden"> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/privacy" element={<Privacypolicy/>} />
        <Route path="/disclaimer" element={<Disclaimer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
