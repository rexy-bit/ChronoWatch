import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/HomeComponents/Header'
import Profile from './Pages/Profile'
import { AuthProvider } from './Contexts/AuthContexts'

function App() {
  



  return(
    
    <AuthProvider>
     <Routes>
      

          
        <Route path='/' element={
          <>
          <Header/>
          <Home/>
          </>
        }/>

        <Route path='/profile' element={
          <>
            <Header/>
            <Profile/>
          </>
        }/>

        
     </Routes>

     </AuthProvider>
  )
}

export default App
