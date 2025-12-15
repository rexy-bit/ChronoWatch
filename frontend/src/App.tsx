import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/HomeComponents/Header'

function App() {
  



  return(
    
     <Routes>

          
        <Route path='/' element={
          <>
          <Header/>
          <Home/>
          </>
        }/>
     </Routes>
  )
}

export default App
