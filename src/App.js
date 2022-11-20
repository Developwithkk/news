
import { useState } from 'react';
import './App.css';
import NewsContainer from './Components/NewsContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  const [mode, setMode] = useState("light")

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "rgb(30 41 59)"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <Router>
      <div className='justify-evenly'>
        <Routes>
          <Route exact path="/" element={<NewsContainer key="general" mode={mode} changeMode={changeMode} category="general" />} />
          <Route exact path='/sports' element={<NewsContainer key="sports" mode={mode} changeMode={changeMode} category="sports" />} />
          <Route exact path='/business' element={<NewsContainer key="buisness" mode={mode} changeMode={changeMode} category="business" />} />
          <Route exact path='/entertainment' element={<NewsContainer key="entertainment" mode={mode} changeMode={changeMode} category="entertainment" />} />
          <Route exact path='/health' element={<NewsContainer key="health" mode={mode} changeMode={changeMode} category="health" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
