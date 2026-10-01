import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../api/fetchUsers"
import UserCard from "../components/UserCard"
import { Loading } from "../components/Loading"

const UsersPage = () => {
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

  if (!users) return <p>Inga användare hittades.</p> //krävs för att kontrollera så users faktiskt har ett värde innan det används i map, då den ej får vara "undefined"

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
