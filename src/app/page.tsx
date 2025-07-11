
import Navbar from "../app/Components/Navbar";
import Home_  from "./Components/Home";
import Service from "./Components/Service";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from '../app/Components/Footer'
export default function Home() {
  return (
    <>
    <Navbar/>
    <Home_/>
    <Service/>
    <About/>
    <Portfolio/>
    <Contact/>
    <Footer/>

    </>
  );
}
