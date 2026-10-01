interface Address {
  street: string
  city: string
  zipCode: string
}

interface Profile {
  name: string
  email: string
  address: Address
}

interface Settings {
  theme: string
  notifications: Notifications
}

interface Notifications {
  email: boolean
  push: boolean
}

interface User {
  id: number
  username: string
  profile: Profile
  settings: Settings
  roles: string[]
}

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
      throw new Error("Kunde inte genomföra fetch")
    }

    return await res.json()
  } catch (error) {
    console.error("Fel vid hämtning av users: ", error)
    throw error
  }
}

export { fetchUsers }
