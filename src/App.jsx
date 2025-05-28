import { lazy, Suspense } from 'react'
import Navbar from './components/ui/Navbar'
import LoadingSpinner from './components/ui/LoadingSpinner'

// Lazy load sections
const Header = lazy(() => import('./components/sections/Header'))
const About = lazy(() => import('./components/sections/About'))
const Skills = lazy(() => import('./components/sections/Skills'))
const Experience = lazy(() => import('./components/sections/Experience'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Contact = lazy(() => import('./components/sections/Contact'))

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Suspense>
    </>
  )
}

export default App