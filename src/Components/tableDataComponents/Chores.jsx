import {useState, useEffect} from 'react'



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