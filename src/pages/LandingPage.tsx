import Navbar from "../components/Navbar"
import UserButton from "../components/UserButton"
import UserInputfield from "../components/UserInputfield"

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <section>
        <h1>Välkomstext</h1>
        <p>prompt text att avnändare ska skriva un emial/användarnamn</p>
        <UserInputfield />
        <UserButton />
      </section>
    </>
  )
}

export default LandingPage
