import { Link } from "react-router-dom"
export default function NavLinks(){
  return(
    <div id='navlinks'>
      <Link to='/'>HOME</Link><span>  </span>
      <Link to='/admin-form'>ADMIN FORM</Link><span>  </span>
      <Link to='/all-chores'>ALL CHORES</Link><span>  </span>
      <Link to='/all-humans'>ALL HUMANS</Link><span>  </span>
      <Link to='/all-plants'>ALL PLANTS</Link><span>  </span>
      <Link to='/all-animals'>ALL ANIMALS</Link><span>  </span>
    </div>
  )
}