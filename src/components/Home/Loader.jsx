import React from 'react'
import { PuffLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className='loading-wrapper'>
    <PuffLoader color='gold'/>
    </div>
  )
}

export default Loader