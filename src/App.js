import React, {useState, useEffect} from 'react';
import Profile from './components/Home/Profile';
import { PuffLoader } from 'react-spinners';



const App = () => {
  
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[])
  return (
    <div className={"App"} style={{margin: "0"}}>
    {
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
    }
    </div>
  );

}

export default App;
