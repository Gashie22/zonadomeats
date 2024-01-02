import { Work } from '@mui/icons-material';
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import MyWork from './Components/Work'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <MyWork/>
      <Testimonial/>
      <Contact/>
      <Footer />
      

    </div>
  );
}

export default App;
