import {useState, useEffect} from 'react'

//ENV Variables
let PORT = import.meta.env.VITE_FETCH_PORT || ':8080/'
let URL = import.meta.env.VITE_FETCH_URL || '127.0.0.1'

export default function Chores(){
  const [choreList, setChoreList] = useState([])

  useEffect(() => {
    fetch(`${URL}${PORT}get/chores`)
      .then(res => res.json())
      .then(data => setChoreList(data))
  }, [])
  
  return(
    <div>
      {choreList.map(x=>
        <h2 key={x.id}>{`${x.chore_name} - ${x.chore_frequency} - ${x.completed} - ${x.responsible_party}`}</h2>
      )}
    </div>
  )
}