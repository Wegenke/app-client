import './index.css'
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import RouterController from './Components/navigation/RouterController'
import NavBar from './Components/displayComponents/NavBar'
import SiteMap from './Components/displayComponents/SiteMap'

createRoot(document.getElementById('root')).render(
  <Router>
    <NavBar/>
    <RouterController />
    <SiteMap/>
  </Router>,
)
