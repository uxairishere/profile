import React, { useState, useEffect } from 'react';
import Profile from './components/Home/Profile';
import ProjectDetail from './components/Home/ProjectDetail';
import NotFound from './components/Home/NotFound';
import { projects } from './components/states/project.state';
import { PuffLoader } from 'react-spinners';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';



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
          <Route path={process.env.REACT_APP_PUBLIC_URL + '/'} element={<Profile />} />
          <Route path={process.env.REACT_APP_PUBLIC_URL + '/project/:id'} element={<ProjectDetail projects={projects} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>

    </div>
  );

}

export default App;
