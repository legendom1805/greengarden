import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/aboutus';
import Privacypolicy from './components/privacypolicy';
import Disclaimer from './components/disclaimer';
function App() {
  const router = createBrowserRouter([
    {
      path:  "/",
      element: <><Navbar/><Home/></>
    },
    {
      path:  "/about",
      element: <><Navbar/><About/></>
    },
    {
      path:  "/privacy",
      element: <><Navbar/><Privacypolicy/></>
    },
    {
      path:  "/disclaimer",
      element: <><Navbar/><Disclaimer/></>
    }
  ])
  return (
    <div className="App">
     <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
