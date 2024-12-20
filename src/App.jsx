
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <div className="flex min-h-screen w-full bg-[#FAFAFA]">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Home/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
