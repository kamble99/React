import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import About from './component/about'
import Menu from './component/menu'
import Contact from './component/contact'
import Cart from './component/cart'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import OldBook from './component/OldBook'
import NewBook from './component/NewBook'
import User from './component/User'
import Login from './component/Login'
import Dashboard from './component/Dashboard'

function App() {

  return (
    <>

      <BrowserRouter>
        <Link to='/about'>About</Link><br></br>
        <Link to='/menu'>Menu</Link><br></br>
        <Link to='/contact'>Contact</Link><br></br>
        <Link to='/cart'>Cart</Link><br></br>
        <Link to='/book/oldbook'>Old Book</Link><br></br>
        <Link to='/book/newbook'>New Book</Link><br></br>
        <Link to='/user/1'>User 1</Link><br></br>
        <Link to='/user/2'>User 2</Link><br></br>
        <Link to='/login'>Login</Link><br></br>
       


        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/book'>
            <Route path='oldbook' element={<OldBook />} />
            <Route path='newbook' element={<NewBook />} />
          </Route>
          <Route path='/user/:id' element={<User />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dash' element={<Dashboard/>} />

          


        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
