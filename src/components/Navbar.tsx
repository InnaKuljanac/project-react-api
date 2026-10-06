import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-(--color-primary-light) p-4 rounded-2xl border-(--color-primary) border-b sticky top-0">
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
    </nav>
  )
}

export default Navbar
