import type { User } from "../types/User"

const fetchUsers = async (): Promise<User[]> => {
  const USER_API = "https://api-userapi.onrender.com/api/users/getUsers"
  const API_KEY = "elev-hemlighet-2026"

  try {
    const res = await fetch(USER_API, {
      headers: {
        "x-api-key": API_KEY,
      },
    })

    if (!res.ok) {
      throw new Error(`API-fel: ${res.status}`) //ger meddelande om vilket http fel som uppstod
    }

    return await res.json()
  } catch (error) {
    console.error("Fel vid hämtning av users: ", error)
    throw error
  }
}

export { fetchUsers }
