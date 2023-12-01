'use client'
import { useOrganization, useOrganizationList } from '@clerk/nextjs'
import Link from 'next/link'
import { useLocalStorage } from 'usehooks-ts'
import { Accordion } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Plus } from 'lucide-react'
import { NavItem, TOrganization } from './NavItem'

interface SidebarProps {
  storageKey?: string
}

export const Sidebar = ({ storageKey = '' }: SidebarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {},
  )

  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization()

  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  })

  const defaultAccordioValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key)
      }
      return acc
    },
    [],
  )

  const onExpand = (id: string) => {
    setExpanded((cur) => ({
      ...cur,
      [id]: !expanded[id],
    }))
  }

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return <Skeleton />
  }

  return (
    <>
      <div className="font-medium text-xs flex items-center mb-1">
        <span className="pl-4">Workspace</span>
        <Button
          asChild
          type="button"
          size="icon"
          variant="ghost"
          className="ml-auto"
        >
          <Link href="/select-org">
            <Plus className="w-4 h-4" />
          </Link>
        </Button>
      </div>
      <Accordion
        type="multiple"
        defaultValue={defaultAccordioValue}
        className="mx-2"
      >
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrganization?.id === organization.id}
            isExpanded={expanded[organization.id]}
            organization={organization as TOrganization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </>
  )
}
