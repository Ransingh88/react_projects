import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import useFetch from "../../../hooks/useFetch"
import "./style.scss"

const HeroBanner = () => {
  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("")
  const { data, loading, error } = useFetch("/movie/top_rated")
  const { url } = useSelector((state) => state.home)

  const navigate = useNavigate()

  const searchQueryHandler = (e) => {
    if ((e.key === "Enter") & (query.length > 0)) {
      navigate(`/search/${query}`)
    }
  }

  useEffect(() => {
    const bg =
      url?.backdrop +
      data?.results?.[Math.floor(Math.random() * data.results.length)]
        ?.backdrop_path
    setBackground(bg)
  }, [data])

  return (
    <div className="heroBanner">
      <div className="backdrop-img">
        <img src={background} alt="" />
      </div>
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore Now
          </span>
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
            <button onClick={searchQueryHandler}>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
