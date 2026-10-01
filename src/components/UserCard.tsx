import { Bell, MailWarning, MapPinHouse, MoveRight, SunMoon } from "lucide-react"
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
          <p>{user.profile.name}</p>
          <p>@{user.username}</p>

          <p className="flex flex-row">
            <MapPinHouse />
            {user.profile.address.city}
          </p>
        </div>
        <div className="border-2 border-blue-400">
          {user.roles.map((role) => (
            <p key={role}>{role}</p>
          ))}
        </div>
        <div className="border-2 border-green-400">
          <p className="flex flex-row">
            <SunMoon /> {user.settings.theme}
          </p>
          <p className="flex flex-row">
            <MailWarning /> E-postnotiser: {user.settings.notifications.email ? "På" : "Av"}
          </p>
          <p className="flex flex-row">
            <Bell /> Pushnotiser: {user.settings.notifications.push ? "På" : "Av"}
          </p>
        </div>
        <div>
          <button className="flex flex-row border border-black">
            Visa mer <MoveRight />
          </button>
        </div>
      </div>
    </>
  )
}

export default UserCard
