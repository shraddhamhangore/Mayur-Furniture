
import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Copyright from './Component/CopyRight';
import Footer from './Component/Footer';
import Header from './Component/Header';
import MapSection from './Component/MapSection';
import Our_products from './Component/Our_products';

import "@fortawesome/fontawesome-free/css/all.min.css";



function App() {
  return (
    <>
      <Header />
      <About />
      <Our_products/>
      <Contact/>
      <MapSection/>
      <Footer/>
    <Copyright/>
    </>
  );
}

export default App;
