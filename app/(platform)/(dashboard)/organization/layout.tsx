import { Sidebar } from '../_components/Sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main
      className="pt-20 md:pt-24 px-4 2xl:max-w-screen-xl
        mx-auto"
    >
      <div className="flex gap-x-7">
        {/* TODO: added hidden to classnames */}
        <div className="w-64 shrink-0  md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  )
}
