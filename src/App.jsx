import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './Home/Home'
import AdminLogin from './AdminPanel/AdminLogin/AdminLogin'
import Admin from './AdminPanel/Admin/Admin'
import EcoCartoon from './components/EcoCartoon/EcoCartoon'
import Startups from './components/Startups/Startups'
import OurStartups from './components/OurStartups/OurStartups'
import Quiz from './components/Quiz/Quiz'
import './styles/App.css'
function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<AdminLogin />} />
          <Route path='/admin' element={<Admin/>}/>
          <Route path="/cartoon" element={<EcoCartoon/>}/>
          <Route path="/startups" element={<Startups/>}/>
          <Route path='/our-startup' element={<OurStartups/>}/>
          <Route path='/quizzes' element={<Quiz/>}/>
        </Routes>
        <ToastContainer/>
    </>
  )
}
export default App