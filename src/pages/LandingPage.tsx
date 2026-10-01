import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <>
      <section>
        <div>
          <h1>HERO</h1>
          <Link to={"/users"}>Se alla användare</Link>
        </div>

        <div>info</div>
        <div>stats</div>
      </section>
    </>
  )
}

export default LandingPage
