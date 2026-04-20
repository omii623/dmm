import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/header/Header'
import { Homepage } from './pages/home/Home'
import Programok from './pages/program/Program'
import Kontakt from './pages/kontakt/Kontakt'
import About from './pages/about/About'

function App() {
  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/programok" element={<Programok />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/rolunk" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
