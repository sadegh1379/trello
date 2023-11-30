import { Footer } from './_components/Footer'
import { Navbar } from './_components/Navbar'

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-200">
      <Navbar />
      <main className="pt-24 pb-20 bg-slate-200">{children}</main>
      <Footer />
    </div>
  )
}
export default MarketingLayout
