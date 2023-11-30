import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div
      className="fixed top-0 h-14 bg-white w-full px-4 border-b
    shadow-sm flex items-center"
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
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="sign-up">Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
