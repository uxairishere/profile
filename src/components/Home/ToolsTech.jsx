import React from 'react'
import node from "../images/node.png"
import reactLogo from "../images/react.png"
import reactNative from "../images/reactNative.png"

import vscode from "../images/vscode.png"
import express from "../images/express.png"
import mongodb from "../images/mongodb.png"
import androidlogo from "../images/androidlogo.png"
import firebase from "../images/firebase.png"

const ToolsTech = () => {
  return (
    <div id='companies' className='tools-main'>
    <div className='tools-container'>
    <p className='about-desc'>I love to use these tools and technologies while developing</p>
        <div className='grid-container'>
        {/* logo  */}
        <img className='logoImg' width={150} src={node} alt="logo"/>
        {/* logo  */}
        <img className='logoImg' width={150} src={express} alt="logo"/>
        {/* logo  */}
        <img className='logoImg' width={150} src={reactLogo} alt="logo"/>
        {/* logo  */}
        <img className='logoImg' width={150} src={mongodb} alt="logo"/>
        {/* logo  */}
        <img className='logoImg' width={150} src={reactNative} alt="logo"/>   
        {/* logo  */}
        <img className='logoImg' width={150} src={androidlogo} alt="logo"/>  
        {/* logo  */}
        <img className='logoImg' width={150} src={vscode} alt="logo"/>  
        {/* logo  */}
        <img className='logoImg' width={150} src={firebase} alt="logo"/>  
            
        </div>
    </div>
    </div>
  )
}

export default ToolsTech