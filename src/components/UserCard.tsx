import { Bell, MailWarning, MapPinHouse, MoveRight, SunMoon } from "lucide-react"
import type { User } from "../types/User"

type UserCardProps = {
  user: User
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <section>
      <div className="h-80 w-xs overflow-hidden p-4 bg-white border border-slate-200 rounded-2xl shadow-sm ">
        <div className="grid justify-center gap-1">
          <p className="text-center text-lg font-semibold tracking-tight text-slate-800">{user.profile.name}</p>
          <p className="text-center text-sm text-slate-500">@{user.username}</p>

          <p className="mt-1 flex flex-row items-center justify-center gap-1.5 text-sm text-slate-600">
            <MapPinHouse size={17} className="text-indigo-500" />
            {user.profile.address.city}
          </p>
        </div>
        <div className="mt-3 flex min-h-7 flex-row flex-wrap justify-center gap-2">
          {user.roles.map((role) => (
            <p key={role} className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">
              {role}
            </p>
          ))}
        </div>
        <div className="mt-3 space-y-2 border-t border-slate-100 pt-3 text-sm text-slate-600">
          <p className="flex flex-row items-center gap-2">
            <SunMoon size={17} className="shrink-0 text-indigo-500" />{" "}
            <span className="capitalize">{user.settings.theme}</span>
          </p>
          <p className="flex flex-row items-center gap-2">
            <MailWarning size={17} className="shrink-0 text-indigo-500" />{" "}
            <span>
              E-postnotiser:{" "}
              <span className="font-medium text-slate-800">{user.settings.notifications.email ? "På" : "Av"}</span>
            </span>
          </p>
          <p className="flex flex-row items-center gap-2">
            <Bell size={17} className="shrink-0 text-indigo-500" />{" "}
            <span>
              Pushnotiser:{" "}
              <span className="font-medium text-slate-800">{user.settings.notifications.push ? "På" : "Av"}</span>
            </span>
          </p>
        </div>
        <div className="mt-3">
          <button className="flex w-full flex-row items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-violet-100 text-violet-600 hover:bg-violet-200">
            Visa mer <MoveRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default UserCard
