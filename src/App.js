import About from './components/About'
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
    </div>
  );
}

export default App;
