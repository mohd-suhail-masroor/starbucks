import './App.css';
import {BrowserRouter as Router ,  Route , Routes} from 'react-router-dom';
import Home from './Pages/Home/Components/Home'
import Header from './Pages/Home/Components/Header'
import Navbar from './Pages/Home/Components/Navbar'
import Footer from './Pages/Home/Components/Footer'

function App() {
  return (
    <Router>
      <hr className='top-hr' />
      <Header />
      <Navbar />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
