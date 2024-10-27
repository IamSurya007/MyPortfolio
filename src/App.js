import './App.css';
import About from './Components/about/About.js'
import Contact from './Components/contact/Contact.js'
import Experiance from './Components/experiance/Experiance.js'
import Footer from './Components/footer/Footer.js'
import Header from './Components/header/Header.js'
import Nav from './Components/nav/Nav.js'
import Portfolio from './Components/portfolio/Portfolio.js'
import Services from './Components/services/Services.js'
import Testimonials from './Components/Testimonials/Testimonials.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Experiance/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <Nav/>
    </div>
  );
}

export default App;
