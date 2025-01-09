import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePageComponent from './components/HomePageComponent'
import ChiSiamoComponent from './components/ChiSiamoComponent'
import PostComponent from './components/PostComponent'
import Navbar from './components/NavbarComponent'
import { Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomePageComponent />} />
        <Route path="/chi-siamo" element={<ChiSiamoComponent />} />
        <Route path="/post" element={<PostComponent />} />
      </routes>
    </>
  )
}

export default App
