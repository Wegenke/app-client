import { useState, useEffect } from 'react'
import DisplayForm from './DisplayForm'

export default function AdminForm({humanList}) {
  const [currForm, setCurrForm] = useState('select')
  const choose = <h1>CHOOSE A FORM</h1>
 const plantForm=(
  <div>Plant Form</div>
 )

 const animalForm=(
  <div>Animal Form</div>
 )

 const choreForm=(
  <div>chore Form</div>
 )

  return (
    <div>
      <h3>Select a form</h3>
      {choose}
      <button onClick={() =>setCurrForm('chores')}>Chores</button>
      <button onClick={() =>setCurrForm('plants')}>Plants</button>
      <button onClick={() => setCurrForm('animals')}>Animals</button>
      <DisplayForm currForm={currForm} />     
    </div>
  ) 
  
}
