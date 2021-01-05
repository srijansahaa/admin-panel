import './styles/app.scss'
import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Landing/>
      <About />
      <Skills />
      <Experience />
      <Work /> */}
      <Footer />
    </div>
  );
}

export default App;
