import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import ProfileList from './pages/ProfileList/ProfileList'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import BreweryList from './pages/BreweryList/BreweryList'
import BreweryDetails from './pages/BreweryDetails/BreweryDetails'
import EventList from './pages/EventList/EventList'
import EventDetails from './pages/EventDetails/EventDetails'
import NewEvent from './pages/NewEvent/NewEvent';
import * as authService from './services/authService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/breweries"
          element={<BreweryList />}
        />
        <Route
          path="/brewery"
          element={<BreweryDetails />}
        />
        <Route
          path="/events"
          element={<EventList />}
        />
        <Route
          path="/event"
          element={<EventDetails />}
        />
        <Route
          path="/new"
          element={<NewEvent />}
        />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <ProfileList /> : <Navigate to="/login" />}
        />
        <Route path="/profile" element={<ProfileDetails />}/>
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
