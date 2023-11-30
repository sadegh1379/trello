import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'

const headingFont = localFont({
  src: '../public/fonts/font.woff2',
})

export const Logo = () => {
  return (
    <Link href="/">
      <div
        className="hover:opacity-75 transition items-center
          gap-x-2 hidden md:flex"
      >
        <Image src="/logo.svg" width={30} height={30} alt="logo" />
        <p className={cn('text-neutral-700 text-lg', headingFont.className)}>
          Taskify
        </p>
      </div>
    </Link>
  )
}
