import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../api/FetchUsers"

const ProfilePage = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  })

  if (isLoading) return <p>Laddar..</p>
  if (error) return <p>Ett fel uppstod: {error.message}</p>

  if (!users) return <p>Inga användare hittades.</p> //krävs för att kontrollera så users faktiskt har ett värde innan det används i map, då den ej får vara "undefined"

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </>
  )
}

export default ProfilePage
