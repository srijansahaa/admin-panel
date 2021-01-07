import './styles/app.scss'
import React, { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  
  return (
    <>
      {
        loading === false ? (
          <div className="App">
            <Navbar />
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
