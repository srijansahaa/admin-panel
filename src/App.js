import About from './components/About'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import './styles/app.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing/>
      <About />
    </div>
  );
}

export default App;
