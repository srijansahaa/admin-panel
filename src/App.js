import './styles/app.scss'
import React, { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Loader from './components/Loader';
import Whatsapp from './components/Whatsapp';
import darkModeIcon from './assets/Icons/darkModeIcon.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function App() {
  const [loading, setLoading] = useState(true)

  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  function changeBg() {
    setDarkTheme(prevTheme => !prevTheme);
    document.body.style.background = "#000"
    if (darkTheme) {
      document.body.style.background = "#fff";
    }
  }

  return (
    <>
      {
        loading === false ? (
          <div className={darkTheme ? "dark-theme" : "light-theme"}>
            <div className="App">
              <Navbar themeType={darkTheme ? "dark-theme" : "light-theme"}/>
              <button className={darkTheme ? "darkThemeSwitch" : "lightThemeSwitch"} onClick={changeBg}>
                <LazyLoadImage width="30" src={darkModeIcon}/>
              </button>
              <Whatsapp themeType={darkTheme ? "dark-theme" : "light-theme"}/>
              <Footer className={darkTheme ? "dark-theme" : "light-theme"}/>
            </div>
          </div>
        ) : (
          <Loader/>
        )
      }
    </>
  );
}

export default App;
