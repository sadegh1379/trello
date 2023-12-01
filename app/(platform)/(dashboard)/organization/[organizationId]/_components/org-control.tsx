'use client'
import { useOrganizationList } from '@clerk/nextjs'
import { useEffect } from 'react'
import { useParams } from 'next/navigation'

export const OrgControl = () => {
  const { organizationId } = useParams()
  const { setActive } = useOrganizationList()

  useEffect(() => {
    if (!setActive) return
    setActive({
      organization: organizationId as string,
    })
  }, [organizationId, setActive])
  return null
}
