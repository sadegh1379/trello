import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div
      className="fixed bottom-0 bg-slate-100 w-full p-3 border-t
    flex items-center"
    >
      <div
        className="md:max-w-screen-2xl mx-auto
          flex items-center w-full justify-between"
      >
        <Logo />
        <div
          className="flex justify-between w-full md:w-auto 
        items-center space-x-4"
        >
          <Button size="sm" variant="ghost">
            Privacy Policy
          </Button>
          <Button size="sm" variant="ghost">
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  )
}
