import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Option2 from './pages/Option2'
import Option3 from './pages/Option3'
import Option4 from './pages/Option4'
import Gallerie from './pages/Gallerie'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Option4 />} />
        <Route path="/option2" element={<Option2 />} />
        <Route path="/option3" element={<Option3 />} />
        <Route path="/option4" element={<Option4 />} />
        <Route path="/gallerie" element={<Gallerie />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
