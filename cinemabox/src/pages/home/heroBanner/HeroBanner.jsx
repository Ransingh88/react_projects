import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import useFetch from "../../../hooks/useFetch"
import "./style.scss"
import Img from "../../../components/lazyLoadImage/Img"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"

const HeroBanner = () => {
  const [background, setBackground] = useState("")
  const [query, setQuery] = useState("")
  const { data, loading } = useFetch("/movie/upcoming")
  const { url } = useSelector((state) => state.home)

  const navigate = useNavigate()

  const searchQueryHandler = (e) => {
    if ((e.key === "Enter") & (query.length > 0)) {
      navigate(`/search/${query}`)
    }
  }

  const searchButtonHandler = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`)
    }
  }

  useEffect(() => {
    const bg =
      url?.backdrop +
      data?.results?.[Math.floor(Math.random() * data.results.length)]
        ?.backdrop_path
    setBackground(bg)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
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
            <button onClick={searchButtonHandler}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner
