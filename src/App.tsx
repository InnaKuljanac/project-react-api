import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import LandingPage from "./pages/LandingPage"

import UsersPage from "./pages/UsersPage"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
