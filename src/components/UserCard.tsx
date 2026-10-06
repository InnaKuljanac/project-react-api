import { Bell, MailWarning, MapPinHouse, MoveRight, SunMoon } from "lucide-react"
import type { User } from "../types/User"

type UserCardProps = {
  user: User
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <section>
      <div className="h-80 w-xs overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-card) p-4 shadow-sm">
        <div className="grid justify-center gap-1">
          <p className="text-center text-lg font-semibold tracking-tight text-(--color-text)">{user.profile.name}</p>
          <p className="text-center text-sm text-(--color-text-secondary)">@{user.username}</p>

          <p className="mt-1 flex flex-row items-center justify-center gap-1.5 text-sm text-(--color-text-secondary)">
            <MapPinHouse size={17} className="text-(--color-primary)" />
            {user.profile.address.city}
          </p>
        </div>
        <div className="mt-3 flex min-h-7 flex-row flex-wrap justify-center gap-2">
          {user.roles.map((role) => (
            <p key={role} className="rounded-full bg-(--color-primary-light) px-2.5 py-1 text-xs font-medium text-(--color-primary-dark)">
              {role}
            </p>
          ))}
        </div>
        <div className="mt-3 space-y-2 border-t border-(--color-border) pt-3 text-sm text-(--color-text-secondary)">
          <p className="flex flex-row items-center gap-2">
            <SunMoon size={17} className="shrink-0 text-(--color-primary)" />{" "}
            <span className="capitalize">{user.settings.theme}</span>
          </p>
          <p className="flex flex-row items-center gap-2">
            <MailWarning size={17} className="shrink-0 text-(--color-primary)" />{" "}
            <span>
              E-postnotiser:{" "}
              <span className="font-medium text-(--color-text)">{user.settings.notifications.email ? "På" : "Av"}</span>
            </span>
          </p>
          <p className="flex flex-row items-center gap-2">
            <Bell size={17} className="shrink-0 text-(--color-primary)" />{" "}
            <span>
              Pushnotiser:{" "}
              <span className="font-medium text-(--color-text)">{user.settings.notifications.push ? "På" : "Av"}</span>
            </span>
          </p>
        </div>
        <div className="mt-3">
          <button className="flex w-full flex-row items-center justify-center gap-2 rounded-lg bg-(--color-primary-light) px-3 py-2 text-sm font-medium text-(--color-primary-dark) transition hover:bg-(--color-primary) hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary-dark)">
            Visa mer <MoveRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default UserCard
