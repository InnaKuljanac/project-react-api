import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../api/fetchUsers"
import UserCard from "../components/UserCard"
import { Loading } from "../components/Loading"

const UsersPage = () => {
  // throw new Error("Test av Error Boundary")
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
    <section className=" py-8">
      <div className="flex flex-wrap justify-center gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  )
}

export default UsersPage
