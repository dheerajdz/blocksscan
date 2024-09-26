import './App.css';
import Body from './Components/Body';
import Bofot from './Components/Bofot';
import Cards from './Components/Cards';
import Features from './Components/Features';
import Feedback from './Components/Feedback';
import Footer from './Components/Footer';
import Partners from './Components/Partners';
import Reviews from './Components/Reviews';
import ServicesGrid from './Components/ServicesGrid';
import Touch from './Components/Touch';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Body />
      <Bofot/>
      <Features/>
      <Cards/>
      <Reviews/>
      <Feedback/>
      <ServicesGrid/>
      <Partners/>
      <Touch/>
      <Footer/>
    </div>
  );
}

export default App;
