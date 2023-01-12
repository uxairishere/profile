import React, { useState, useEffect } from 'react';
import Profile from './components/Home/Profile';
import ProjectDetail from './components/Home/ProjectDetail';
import AllProjects from './components/Home/AllProjects';
import NotFound from './components/Home/NotFound';
import Loader from './components/Home/Loader';
import { projects } from './components/states/project.state';
import {Routes, Route } from 'react-router-dom';



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
        <Routes>
          <Route path='/' element={loading ? <Loader/> :<Profile />} />
          <Route path='/project/:id' element={<ProjectDetail projects={projects} />} />
          <Route path='/projects' element={<AllProjects projects={projects} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  );

}

export default App;
