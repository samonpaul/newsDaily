import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
  
const App = () => {

  const [progress, setProgress] = useState(0)



    return (
      <div>

        <Router>
          <Navbar/>
            <div>
                <LoadingBar
                    height={3}
                    color='#f11946'
                    progress={progress}
                />
            </div>
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} key="general" pageSize={8} category="general"/>} />
            <Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={8} category="business"/>} />
            <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={8} category="entertainment"/>} />
            <Route exact path='/general' element={<News setProgress={setProgress} key="general" pageSize={8} category="general"/>} />
            <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={8} category="health"/>} />
            <Route exact path='/science' element={<News setProgress={setProgress} key="science" pageSize={8} category="science"/>} />
            <Route exact path='/sport' element={<News setProgress={setProgress} key="sport" pageSize={8} category="sport"/>} />
            <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={8} category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  }

export default App
