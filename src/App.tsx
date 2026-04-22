import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const Homepage = lazy(() => import('./pages/home/Home').then(m => ({ default: m.Homepage })))
const Programok = lazy(() => import('./pages/program/Program'))
const Kontakt = lazy(() => import('./pages/kontakt/Kontakt'))
const About = lazy(() => import('./pages/about/About'))

function App() {
  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <Header />
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/programok" element={<Programok />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/rolunk" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
