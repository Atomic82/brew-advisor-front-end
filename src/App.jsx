import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import BreweryList from './pages/BreweryList/BreweryList'
import BreweryDetails from './pages/BreweryDetails/BreweryDetails'
import EventList from './pages/EventList/EventList'
import EventDetails from './pages/EventDetails/EventDetails'
import NewEvent from './pages/NewEvent/NewEvent';
import * as authService from './services/authService'
import * as breweryService from './services/breweryService'
import * as eventService from './services/eventService'
import * as reviewService from './services/reviewService'
import EditEvent from './pages/EditEvent/EditEvent';

const App = () => {
  const [userLocation, setUserLocation] = useState([])
  const [breweries, setBreweries] = useState([])
  const [events, setEvents] = useState([])
  const [reviews, setReviews] = useState({})
  const [user, setUser] = useState(authService.getUser())
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()
  
  useEffect(() => {
    if(user) {
      eventService.getAll()
        .then(allEvents => {
          setEvents(allEvents)
        })
    }
  }, [user])
  

  const handleChangeSetLocation = locationValue => {
    setBreweries('')
    breweryService.getAll(locationValue)
    .then(localBreweries => {
      setBreweries(localBreweries.businesses)
      setUserLocation(locationValue)
    })
    
  }

  const handleNewEvent = newEventData => {
    eventService.create(newEventData)
    .then(newEvent => {
      console.log(newEvent)
      setEvents([...events, newEvent])
      navigate('/')
    })
  }

  const handleDeleteEvent = id => {
    eventService.deleteOne(id)
      .then(deletedEvent => {
        setEvents(events.filter(event => event._id !== deletedEvent._id))
        navigate('/events')
      })
  }

  const handleUpdateEvent = updatedEventData => {
    eventService.update(updatedEventData)
      .then(updatedEvent => {
        console.log(updatedEvent)
        const newEventsArray = events.map(event => event._id === updatedEvent._id ? updatedEvent : event)
        setEvents(newEventsArray)
        navigate('/events')
      })
  }

  const handleAddReview = newReviewData => {
    console.log(user)
    reviewService.create(newReviewData, user.profile)
    .then(newReview => {
      setReviews([...reviews, newReview])
    })
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleClick = (profile) => {
    setProfile(profile)
  }

  return (
    <>
      <NavBar 
        user={user} 
        handleLogout={handleLogout} 
        handleChangeSetLocation={handleChangeSetLocation} 
      />
      <Routes>
        <Route 
          path="/" 
          element={<Landing user={user} handleChangeSetLocation={handleChangeSetLocation} />} 
        />
        <Route
          path="/breweries"
          element={<BreweryList breweries={breweries} />}
        />
        <Route
          element={<BreweryDetails handleAddReview={handleAddReview} user={user} />}
          path="/breweries/:id"
        />
        <Route
          path="/events"
          element={<EventList events={events}/>}
        />
        <Route
          path="/events/:id"
          element={<EventDetails handleDeleteEvent={handleDeleteEvent} user={user} />}
        />
        <Route
          path="/new"
          element={<NewEvent handleNewEvent={handleNewEvent}/>}
        />
        <Route
          path="/edit"
          element={<EditEvent handleUpdateEvent={handleUpdateEvent}/>}
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
          element={user ? 
            <Profiles
              key={profile.id} 
              handleClick={handleClick}
              handleAddReview={handleAddReview} 
              user={user}
            /> : 
              <Navigate 
                to="/login" 
              />
          }
        />
        <Route path="/profile" element={<ProfileDetails profile={profile} />}/>
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        
      </Routes>
    </>
  )
}

export default App
