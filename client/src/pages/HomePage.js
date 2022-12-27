import React from 'react'
import NavBar from '../Components/NavBar'
import SortingVisualizer from '../SortingVisual/SortingVisual';

function HomePage() {
  return (
    <div className="h-screen w-screen">
        <NavBar/>
        <SortingVisualizer/>
    </div>
  )
}

export default HomePage