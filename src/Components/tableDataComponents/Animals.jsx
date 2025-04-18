import {useState, useEffect} from 'react'


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