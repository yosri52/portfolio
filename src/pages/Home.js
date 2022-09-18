import React from 'react'
import webimage from '../images/Web.png'  

function home() {
  return (
    <div className='alert alert-primary'>
      <img src="/images/profilepic.jpg" alt="my photo" className='avatar' />
      <h1>hello My name is Yosri im a fullstack webdevelopments</h1>
      <img src={webimage} alt="webdevelopments"/>
    </div>
  
  )
}

export default home