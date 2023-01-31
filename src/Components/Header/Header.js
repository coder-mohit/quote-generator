import React, {useState, useEffect} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
         {/* <img src=".../assests/logo" alt="Girl in a jacket" width="500" height="600">  */}
         <li><Link to="/"  className="header__nav-item" >Home</Link></li>   
       <li>  <Link to="/bookmark"  className="header__nav-item" >Bookmark</Link></li>
      </ul>
      )}
     <button onClick={toggleNav} className="btn">☰</button>
    </nav>
  )
}