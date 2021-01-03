import About from './components/About'
import Experience from './components/Experience'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import './styles/app.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing/>
      <About />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
