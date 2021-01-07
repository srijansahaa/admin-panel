import './styles/app.scss'
import React, { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Loader from './components/Loader';
import Whatsapp from './components/Whatsapp';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  
  return (
    <>
      {
        loading === false ? (
          <div className="App">
            <Navbar />
            <Whatsapp/>
            <Footer />
          </div>
        ) : (
          <Loader/>
        )
      }
    </>
  );
}

export default App;
