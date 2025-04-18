import {useState, useEffect} from 'react'

//ENV Variables
let PORT = import.meta.env.VITE_FETCH_PORT || ':8080/'
let URL = import.meta.env.VITE_FETCH_URL || '127.0.0.1'

export default function Humans(){
  const [humanList, setHumanList] = useState([])

  useEffect(() => {
    fetch(`${URL}${PORT}get/humans`)
      .then(res => res.json())
      .then(data => setHumanList(data))
  }, [])

  return(
    <div>
      {humanList.map(x=>
        <h2 key={x.id}>{`${x.type} - ${x.name} - ${x.nick_name} - ${x.rating} - ${x.allowance_earned}`}</h2>
      )}
    </div>
  )
}