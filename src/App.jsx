import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Tables from './components/Tables'
import Nav from './components/Nav'
import Add from './components/Add'

function App() {
  

    return (
        <>
            <Nav />
            <Routes>
                <Route path='/add' element={<Add />} />
                <Route path='/table' element={<Tables />} />

            </Routes>
        </>
    )
}

export default App
