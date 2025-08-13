
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ListPage from './pages/ListPage'
import DetailPage from './pages/DetailPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/pokemon/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
