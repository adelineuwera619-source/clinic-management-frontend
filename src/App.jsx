import './App.css'
import LibraryHeader from './components/LibraryHeader'
import LibraryLogin from './components/LibraryLogin'
import LibraryBooks from './components/LibraryBooks'
import Office from './components/Office'
import Doctor from './components/Doctor'
import Appointment from './components/Appointment'
import { Route, Routes } from "react-router"

function App() {
  return (
    <div>
      <LibraryHeader />
      <Routes>
        <Route path="/" element={<LibraryLogin />} />
        <Route path="/office" element={<Office />} />
        <Route path="/books" element={<LibraryBooks />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="*" element={<LibraryLogin />} />
      </Routes>
    </div>
  )
}

export default App