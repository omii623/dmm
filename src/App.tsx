//import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
//import {Homepage} from './pages/home/Home'
//import About from './pages/about/About'
//import NotFound from './pages/notfound/NotFound'

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <Footer />
    </div>
  )
}

/*
<main>
        <Routes>
          <Route path="/" element={<Navigate to="/index" replace />} />
          <Route path="/index" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
*/

export default App
