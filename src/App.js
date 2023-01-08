import React, { useState, useEffect } from 'react';
import Profile from './components/Home/Profile';
import ProjectDetail from './components/Home/ProjectDetail';
import { projects } from './components/states/project.state';
import { PuffLoader } from 'react-spinners';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className={"App"} style={{ margin: "0" }}>
      <Router>
        <Routes>
          <Route path='/' element={

            loading ?
              <div className="loading-wrapper">
                <PuffLoader
                  size={80}
                  color={"#FFD700"}
                  loading={loading}
                />
              </div>
              :
              <Profile />
          } />
          <Route path='/project/:id' element={<ProjectDetail projects={projects} />} />
        </Routes>
      </Router>

    </div>
  );

}

export default App;
