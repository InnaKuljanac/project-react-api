import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-(--color-background) p-4 rounded-2xl">
      <div className=" flex gap-6">
        <button>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition ${isActive ? "bg-(--color-primary) text-white" : "text-gray-500"}`
            }>
            Home
          </NavLink>
        </button>
        <button>
          <NavLink
            to={"/users"}
            className={({ isActive }) =>
              `px-4 py-2 rounded-md transition ${isActive ? "bg-(--color-primary) text-white" : "text-gray-500"}`
            }>
            Alla användare
          </NavLink>
        </button>
      </div>

      <p>Toggla dark/light mode</p>
    </nav>
  )
}

export default Navbar
