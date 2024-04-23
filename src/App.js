import Navbar from "./components/Navbar"
import './App.css';
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Contact/>
    </>
  );
}

export default App;
