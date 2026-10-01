import type { User } from "../types/User"

type UserCardProps = {
  user: User
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <>
      <div className="border-2 border-amber-200">
        //Kortet
        <div className="border-2 border-amber-600">
          <p>{user.profile.name}</p> <p>{user.username}</p> <p>{user.profile.address.city}</p>
        </div>
        <div className="border-2 border-blue-400">
          <p>
            {user.roles.map((role) => (
              <p>{role}</p>
            ))}
          </p>
        </div>
        <div className="border-2 border-green-400">
          <p>{user.settings.theme}</p>
          <p>E-postnotiser: {user.settings.notifications.email ? "På" : "Av"}</p>
          <p>Pushnotiser: {user.settings.notifications.push ? "På" : "Av"}</p>
        </div>
        <div>
          <button className="border border-black">Visa mer</button>
        </div>
      </div>
    </>
  )
}

export default UserCard
