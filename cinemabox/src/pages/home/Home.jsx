import React from "react"
import HeroBanner from "./heroBanner/HeroBanner"
import Popular from "./popular/Popular"
import "./style.scss"
import Trending from "./trending/Trending"

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
    </div>
  )
}

export default Home
