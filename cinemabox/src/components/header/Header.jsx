import React, { useEffect, useState } from "react"
import "./style.scss"
import logo from "../../assets/cinemabox.png"

import { MdSearch, MdMenu, MdClose } from "react-icons/md"
import ContentWrapper from "../contentWrapper/ContentWrapper"
import { Link, useLocation, useNavigate } from "react-router-dom"

const Header = () => {
  const [show, setShow] = useState("top")
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [query, setQuery] = useState("")
  const [showSearch, setShowSearch] = useState("")
  const navigate = useNavigate()
  const location = useLocation()

  const openSearch = () => {
    setMobileMenu(false)
    setShowSearch(true)
  }

  const openMobileMenu = () => {
    setMobileMenu(true)
    setShowSearch(false)
  }

  const searchQueryHandler = (e) => {
    if ((e.key === "Enter") & (query.length > 0)) {
      navigate(`/search/${query}`)
      setTimeout(() => {
        setShowSearch(false)
      }, 500)
    }
  }

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("explore/movie")
    } else if (type === "tv") {
      navigate("explore/tv")
    }
    setMobileMenu(false)
  }

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide")
      } else {
        setShow("show")
      }
    } else {
      setShow("top")
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar)

    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movie")}>
            Movies
          </li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>
            TV Shows
          </li>
          <li className="menuItem">
            <MdSearch className="searchIcon" onClick={openSearch} />
          </li>
        </ul>
        <div className="mobileMenuItems">
          <MdSearch onClick={openSearch} />
          {mobileMenu ? (
            <MdClose onClick={() => setMobileMenu(false)} />
          ) : (
            <MdMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for a movie or TV shows..."
                onChange={(e) => {
                  setQuery(e.target.value)
                }}
                onKeyUp={searchQueryHandler}
              />
              <MdClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  )
}

export default Header
