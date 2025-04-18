import {useState, useEffect} from 'react'

//ENV Variables
let PORT = import.meta.env.VITE_FETCH_PORT || ':8080/'
let URL = import.meta.env.VITE_FETCH_URL || '127.0.0.1'

export default function Plants(){
  const [plantsList, setPlantsList] = useState([])

  useEffect(() => {
    fetch(`${URL}${PORT}get/plants`)
      .then(res => res.json())
      .then(data => setPlantsList(data))
  }, [])

  return(
    <div>
      {plantsList.map(x=>
        <h2 key={x.id}>{`${x.edible} - ${x.name} - ${x.location} - ${x.bucket}`}</h2>
      )}
    </div>
  )
}