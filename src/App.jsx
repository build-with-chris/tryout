import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Option2 from './pages/Option2'
import Option3 from './pages/Option3'
import Option4 from './pages/Option4'
import Gallerie from './pages/Gallerie'

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Option4 />} />
            <Route path="/option2" element={<Option2 />} />
            <Route path="/option3" element={<Option3 />} />
            <Route path="/option4" element={<Option4 />} />
            <Route path="/galerie" element={<Gallerie />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
