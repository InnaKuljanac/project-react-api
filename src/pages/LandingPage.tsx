import { Link } from "react-router-dom"
import Stats from "../components/Stats"
import { fetchUsers } from "../api/fetchUsers"
import { useQuery } from "@tanstack/react-query"
import { Loading } from "../components/Loading"

const LandingPage = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  })

  if (isLoading) return <Loading />
  if (error) return <p>Ett fel uppstod: {error.message}</p>
  if (!users || users.length === 0) {
    return <p>Ingen data hittades.</p>
  } //!users krävs för att kontrollera så users faktiskt har ett värde innan det används, då den ej får vara "undefined". andra kontrollerar om arrayen returneas tom

  return (
    <section className="min-h-screen px-6 py-12 text-slate-900 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl bg-linear-to-br from-violet-100 via-white to-blue-100 px-6 py-16 text-center shadow-sm sm:px-12 sm:py-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">Användaröversikt</p>
          <h1 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            Hitta och utforska alla användare
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            En samlad plats för att se profiler, roller och inställningar.
          </p>

          {/* Knapp som leder till /users där man se alla användare */}
          <Link
            to="/users"
            className="mt-8 inline-flex items-center rounded-xl bg-violet-700 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-violet-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700">
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
