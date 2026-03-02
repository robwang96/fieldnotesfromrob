import { Nav }      from '@/components/sections/Nav'
import { Hero }     from '@/components/sections/Hero'
import { Divider }  from '@/components/sections/Divider'
import { Projects } from '@/components/sections/Projects'
import { Writing }  from '@/components/sections/Writing'
import { Contact }  from '@/components/sections/Contact'
import { Footer }   from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Divider glyph="✦" />
        <Projects />
        <Divider glyph="△" />
        <Writing />
        <Divider glyph="◆" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
