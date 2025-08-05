import React from 'react'
import './main.css'
import Schedule from '../Schedule/Schedule'
import Trend from '../Trend/Trend'
import Blog from '../Blog/Blog'


function Main() {
  return (
   <>
    <main>
        <Schedule />
        <Trend />
        <Blog />
    </main>
   </>
  )
}

export default Main