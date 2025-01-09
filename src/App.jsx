import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePageComponent from './components/HomePageComponent'
import ChiSiamoComponent from './components/ChiSiamoComponent'
import PostComponent from './components/PostComponent'
import Navbar from './components/NavbarComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayoutComponent from './components/DefaultLayoutComponent'
import CardComponent from './components/CardListComponents'
import CardListComponent from './components/CardListComponents'


function App() {



  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayoutComponent />}>
            <Route index element={<HomePageComponent />} />
            <Route path="/chi-siamo" element={<ChiSiamoComponent />} />
            <Route path="/post" element={<PostComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
