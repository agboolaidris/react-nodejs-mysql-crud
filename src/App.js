import React from 'react'
import './index.scss'
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './Component/NavBar/Navbar'
import Row from './Component/Main/Row'
import About from './Component/About/About'

function App() {
    return (
        <BrowserRouter>
          <div className='APP'>
              <Navbar />
             <Route exact path='/' component={Row}></Route>
             <Route path='/about' component={About} />
          </div>
        </BrowserRouter>
    )
}

export default App
