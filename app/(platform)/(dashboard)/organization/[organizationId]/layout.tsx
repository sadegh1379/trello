import { OrgControl } from './_components/org-control'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  )
}
