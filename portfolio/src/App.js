import './App.css';
import Navbar from "../src/components/Navbar/Navbar"
import Intro from "../src/components/intro/intro"
import Skills from "../src/components/skills/Skills"
import Works from "../src/components/works/Works"
import Contact from "../src/components/contact/Contact"
import Footer from "../src/components/footer/Footer"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
