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
      <article className="relative overflow-hidden rounded-xl border border-violet-100 bg-gradient-to-br from-white to-violet-50 p-4 shadow-sm">
        <div className="absolute right-0 top-0 h-16 w-16 rounded-full bg-violet-200/40 blur-2xl" />
        <div className="relative">
          <h2 className=" text-violet-700">
            <CircleUserRound size={38} />
          </h2>
          <p className="mt-3 p-2 text-4xl font-bold tracking-tight text-slate-900">{totalUsers}</p>
          <p className="mt-1 text-s font-bold text-(--color-text)">Användare</p>
        </div>
      </article>

      <article className="relative overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-4 shadow-sm">
        <div className="absolute right-0 top-0 h-16 w-16 rounded-full bg-blue-200/40 blur-2xl" />
        <div className="relative">
          <h2 className="text-s font-bold font-semibold uppercase tracking-wide text-blue-700">
            <ShieldUser size={38} />
          </h2>
          <p className="mt-3 p-2 text-4xl font-bold tracking-tight text-slate-900">{totalAdmins}</p>
          <p className="mt-1 text-s font-bold text-(--color-text)">Admins</p>
        </div>
      </article>

      <article className="relative overflow-hidden rounded-xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-4 shadow-sm">
        <div className="absolute right-0 top-0 h-16 w-16 rounded-full bg-emerald-200/40 blur-2xl" />
        <div className="relative">
          <h2 className="text-s font-bold font-semibold uppercase tracking-wide text-emerald-700">
            <UserPen size={38} />
          </h2>
          <p className="mt-3 p-2 text-4xl font-bold tracking-tight text-slate-900">{totalEditors}</p>
          <p className="mt-1 text-s font-bold text-(--color-text)">Redaktörer</p>
        </div>
      </article>

      <article className="relative overflow-hidden rounded-xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-4 shadow-sm">
        <div className="relative">
          <h2 className="text-s font-bold font-semibold uppercase tracking-wide text-emerald-800">
            <Headset size={38} />
          </h2>
          <p className="mt-3 p-2 text-4xl font-bold tracking-tight text-slate-900">{totalSupport}</p>
          <p className="mt-1 text-s font-bold text-(--color-text)">Support</p>
        </div>
      </article>
    </>
  )
}

export default Stats
