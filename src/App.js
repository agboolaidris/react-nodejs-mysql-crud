import React from 'react'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './Component/Layout/Navbar'

function App() {
    return (
        <BrowserRouter>
          <div className='App'>
           <Navbar />
          </div>
        </BrowserRouter>
    )
}

export default App
