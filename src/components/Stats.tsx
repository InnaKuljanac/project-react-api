import { CircleUserRound, Headset, ShieldUser, UserPen } from "lucide-react"
import type { User } from "../types/User"

type StatsProps = {
  users: User[]
}

const Stats = ({ users }: StatsProps) => {
  const totalUsers = users.length

  const totalAdmins = users.filter((user) => user.roles.includes("admin")).length

  const totalEditors = users.filter((user) => user.roles.includes("editor")).length

  const totalSupport = users.filter((user) => user.roles.includes("support")).length

  return (
    <>
      <article className="relative overflow-hidden rounded-xl border border-(--color-border) bg-[linear-gradient(135deg,var(--color-card),var(--color-primary-light))] p-4 shadow-sm">
        <div className="absolute right-0 top-0 h-16 w-16 rounded-full bg-(--color-primary-light) blur-2xl" />
        <div className="relative">
          <h2 className="text-(--color-primary-dark)">
            <CircleUserRound size={38} />
          </h2>
          <p className="mt-3 p-2 text-4xl font-bold tracking-tight text-(--color-text)">{totalUsers}</p>
          <p className="mt-1 text-s font-bold text-(--color-text)">Användare</p>
        </div>
      </article>

      <article className="relative overflow-hidden rounded-xl border border-(--color-border) bg-[linear-gradient(135deg,var(--color-card),var(--color-accent-light))] p-4 shadow-sm">
        <div className="absolute right-0 top-0 h-16 w-16 rounded-full bg-(--color-accent-light) blur-2xl" />
        <div className="relative">
          <h2 className="text-(--color-accent)">
            <ShieldUser size={38} />
          </h2>
          <p className="mt-3 p-2 text-4xl font-bold tracking-tight text-(--color-text)">{totalAdmins}</p>
          <p className="mt-1 text-s font-bold text-(--color-text)">Admins</p>
        </div>
      </article>

      <article className="relative overflow-hidden rounded-xl border border-(--color-border) bg-[linear-gradient(135deg,var(--color-card),var(--color-secondary-light))] p-4 shadow-sm">
        <div className="absolute right-0 top-0 h-16 w-16 rounded-full bg-(--color-secondary-light) blur-2xl" />
        <div className="relative">
          <h2 className="text-(--color-secondary)">
            <UserPen size={38} />
          </h2>
          <p className="mt-3 p-2 text-4xl font-bold tracking-tight text-(--color-text)">{totalEditors}</p>
          <p className="mt-1 text-s font-bold text-(--color-text)">Redaktörer</p>
        </div>
      </article>

      <article className="relative overflow-hidden rounded-xl border border-(--color-border) bg-[linear-gradient(135deg,var(--color-card),var(--color-accent-green))] p-4 shadow-sm">
        <div className="relative">
          <h2 className="text-(--color-success)">
            <Headset size={38} />
          </h2>
          <p className="mt-3 p-2 text-4xl font-bold tracking-tight text-(--color-text)">{totalSupport}</p>
          <p className="mt-1 text-s font-bold text-(--color-text)">Support</p>
        </div>
      </article>
    </>
  )
}

export default Stats
