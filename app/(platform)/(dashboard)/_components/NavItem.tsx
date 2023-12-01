import Image from 'next/image'
import { Activity, CreditCard, Layout, Settings } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

export type TOrganization = {
  id: string
  slug: string
  imageUrl: string
  name: string
}

interface NavItemProps {
  isActive: boolean
  isExpanded: boolean
  onExpand: (id: string) => void
  organization: TOrganization
}

export const NavItem = ({
  isActive,
  isExpanded,
  onExpand,
  organization,
}: NavItemProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const routes = [
    {
      lable: 'Boards',
      icon: <Layout className="w-4 h-4 mt-2" />,
      href: `/organization/${organization.id}`,
    },
    {
      lable: 'Activity',
      icon: <Activity className="w-4 h-4 mt-2" />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      lable: 'Settings',
      icon: <Settings className="w-4 h-4 mt-2" />,
      href: `/organization/${organization.id}/settings`,
    },
    {
      lable: 'Bulling',
      icon: <CreditCard className="w-4 h-4 mt-2" />,
      href: `/organization/${organization.id}/bulling`,
    },
  ]

  const onClick = (href: string) => {
    router.push(href)
  }
  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          'flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline',
          isActive && !isExpanded && 'bg-sky-500/10 text-sky-700',
        )}
      >
        <div className="flex items-center gap-x-2 ">
          <div className="w-7 h-7 relative">
            <Image
              fill
              src={organization.imageUrl}
              alt="organization"
              className="rounded-sm object-cover"
            />
          </div>
          <span className="font-medium text-sm">{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        {routes.map((route) => (
          <Button
            key={route.href}
            size="sm"
            onClick={() => onClick(route.href)}
            className={cn(
              'w-full font-normal flex gap-2 items-center justify-start pl-10 mb-1',
              pathname === route.href && 'bg-sky-500/10 text-sky-700',
            )}
            variant="ghost"
          >
            <span className="pb-2">{route.icon}</span>
            <span>{route.lable}</span>
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}
