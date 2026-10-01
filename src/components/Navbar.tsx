import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/users"}>Alla användare</NavLink>
      <p>Toggla dark/light mode</p>
    </div>
  )
}

export default Navbar
