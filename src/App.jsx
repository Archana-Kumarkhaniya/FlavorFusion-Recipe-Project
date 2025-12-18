import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Favourites from './Favourites'
import RecipesPage from './Recipes'
import Footer from './Footer'
import Login from './Login'
import Signup from './Signup'
import Forgot from './Forgot'
import Otppage from './Otppage'
import Resetpass from './Resetpass'
import UserProfile from './UserProfile'
import ProductPage from './ProductPage'
import Loader from './Loader'

const App = () => {

  const [user, setUser] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    // check logged in user
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"))
    if (storedUser) setUser(storedUser)

    // 5 sec loader
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // 🔥 Tailwind Loader (Responsive)
if (loading) {
  return <Loader/>
}

  return (
    <BrowserRouter>
      <Navbar
        user={user}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Routes>
        <Route path='/' element={<Home searchQuery={searchQuery} />} />
        <Route path='/about' element={<About searchQuery={searchQuery} />} />
        <Route path='/favourites' element={<Favourites searchQuery={searchQuery} />} />
        <Route path='/recipes' element={<RecipesPage searchQuery={searchQuery} />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/otppage' element={<Otppage />} />
        <Route path='/resetpass' element={<Resetpass />} />
        <Route path='/userprofile' element={<UserProfile user={user} setUser={setUser} />} />
        <Route path='/recipe/:id' element={<ProductPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
