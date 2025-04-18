import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
// import { forms } from './AllForms'


export default function DisplayForm({ currForm }) {
  const [humans, setHumans] = useState([])

  //Use Form Hooks
  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    fetch(`${URL}${PORT}get/human_ids`)
      .then(res => res.json())
      .then(data => setHumans(data))
  }, [])



  async function onSubmit(data) {
    //Post URLs
    const postLinks = {
      chores: `${URL}${PORT}post/add_chore`,
      animals: `${URL}${PORT}post/add_animal`,
      plants: `${URL}${PORT}post/add_plant`
    }
    fetch(postLinks[currForm], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Http error! status: ${res.status}`)
        }
      })
      .then(() => reset())
      .catch(err => {
        console.error(`Error: ${err}`)
        reset()
      })
  }

  async function showData(data){
    console.log(data)
    reset()
  }

  //Multiple forms in same .jsx causes issues. 
  const forms = {
    chores: (
      <div id="adminforms">
        <form id="choreForm" onSubmit={handleSubmit(showData)}>
          Chore Name: <input {...register("chore_name", { required: true })} /><br />
          How Often: <input {...register("chore_frequency", { required: true })} /><br />
          Pick a kid: <br />
          <select {...register("responsible_party", { required: true })}>
            <option >Select One</option>
            {humans.map(x => <option key={x.id} value={x.id}>{x.nick_name}</option>)}
          </select><br />
          <input type='submit' />
        </form>
      </div>
    ),
    plants: (
      <div id="adminforms">
      <form id="plantsForm" onSubmit={handleSubmit(showData)}>
        Can I eat it? <input type='checkbox' {...register("edible")} /><br />
        Plant Name: <input {...register("name", { required: true })} /><br />
        Plant Location: <input {...register("location", { required: true })} /><br />
        In a bucket? <input type='checkbox' {...register("bucket")} /><br />
        <input type='submit' />
      </form>
    </div>
    ),
    animals: (
      <h1>Animals from list</h1>
    ),
    choose: <h1>CHOOSE A FORM from list</h1>
  }

  switch (currForm) {
    case 'chores':
      return forms[currForm]
    case 'plants':
      return forms[currForm]
    case 'animals':
      return forms[currForm]
    default:
      return forms.choose
  }
}