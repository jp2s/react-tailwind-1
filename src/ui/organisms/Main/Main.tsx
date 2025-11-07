import { Hero } from '../../molecules/Hero/Hero.tsx'
import { Header } from '../../molecules/Header/Header.tsx'
import { Footer } from '../../atoms/Footer/Footer.tsx'
import { Sections } from '../../molecules/Sections/Sections.tsx'

export const Main = () => (
  <div className="min-h-screen bg-white text-black font-mono">
    <Header />

    <Hero />

    <Sections />

    <Footer />
  </div>
)
