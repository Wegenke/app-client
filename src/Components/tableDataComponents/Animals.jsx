import {useState, useEffect} from 'react'
//ENV Variables
let PORT = import.meta.env.VITE_FETCH_PORT || ':8080/'
let URL = import.meta.env.VITE_FETCH_URL || '127.0.0.1'

export default function Animals(){
  const [animalList, setAnimalList] = useState([])

  useEffect(() => {
    fetch(`${URL}${PORT}get/animals`)
      .then(res => res.json())
      .then(data => setAnimalList(data))
  }, [])

  return(
    <div>
      {animalList.map(x=>
        <h2 key={x.id}>{`${x.name} - ${x.type} - ${x.age}`}</h2>
      )}
    </div>
  )
}