import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import AdminForm from '../postComponents/AdminForm'
import Animals from '../tableDataComponents/Animals'
import Plants from '../tableDataComponents/Plants'
import Chores from '../tableDataComponents/Chores'
import Humans from '../tableDataComponents/Humans'
import App from '../../App'
//ENV Variables
let PORT = import.meta.env.VITE_FETCH_PORT || ':8080/'
let URL = import.meta.env.VITE_FETCH_URL || '127.0.0.1'

export default function RouterController(){
  
  const [humans, setHumans] = useState([])

    useEffect(() => {
      fetch(`${URL}${PORT}get/human_ids`)
        .then(res => res.json())
        .then(data => setHumans(data))
    }, [])

  return (
    <div id='routercontroller'>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/admin-form' element={<AdminForm humanList={humans}/>} />
        <Route path='/all-chores' element={<Chores />}/>
        <Route path='/all-humans' element={<Humans />}/>
        <Route path='/all-plants' element={<Plants />}/>
        <Route path='/all-animals' element={<Animals />}/>
      </Routes>
    </div>
  )
}