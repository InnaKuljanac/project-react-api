import { Link } from "react-router-dom"
import Stats from "../components/Stats"
import { fetchUsers } from "../api/fetchUsers"
import { useQuery } from "@tanstack/react-query"
import { Loading } from "../components/Loading"

const LandingPage = () => {
  //throw new Error("Test av Error Boundary")
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  })

  if (isLoading) return <Loading />
  if (error)
    return (
      <p className="mx-auto my-12 max-w-2xl rounded-2xl border border-(--color-warning) bg-(--color-card) px-6 py-5 text-center text-sm leading-6 text-(--color-text) shadow-sm">
        Oj, något gick fel! Vi kunde inte hämta användarna just nu. Försök gärna igen om en liten stund. Felkod:{" "}
        {error.message}
      </p>
    )
  if (!users || users.length === 0) {
    return <p>Ingen data hittades.</p>
  } //!users krävs för att kontrollera så users faktiskt har ett värde innan det används, då den ej får vara "undefined". andra kontrollerar om arrayen returneas tom

  return (
    <section className="min-h-screen px-6 py-12 text-(--color-text) sm:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl bg-[linear-gradient(135deg,var(--color-primary-light),var(--color-card),var(--color-accent-light))] px-6 py-16 text-center shadow-sm sm:px-12 sm:py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-(--color-primary-dark)">
            Användaröversikt
          </p>
          <h1 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            Hitta och utforska alla användare
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-(--color-text-secondary) sm:text-lg">
            En samlad plats för att se profiler, roller och inställningar.
          </p>

          {/* Knapp som leder till /users där man se alla användare */}
          <Link
            to="/users"
            className="mt-8 inline-flex items-center rounded-xl bg-(--color-primary-dark) px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-(--color-primary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary-dark)">
            Se alla användare{" "}
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stats users={users} />
        </div>
      </div>
    </section>
  )
}

export default LandingPage
