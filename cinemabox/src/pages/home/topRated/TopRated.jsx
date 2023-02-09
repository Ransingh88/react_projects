import React, { useState } from "react"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import SwitchTabs from "../../../components/switchTabs/SwitchTabs"
import useFetch from "../../../hooks/useFetch"
import Carousel from "../../../components/carousel/Carousel"

const TopRated = () => {
  const [endPoint, setEndpoint] = useState("movie")

  const { data, loading } = useFetch(`/${endPoint}/top_rated`)

  const onTabChangeHandler = (tab) => {
    setEndpoint(tab === "Movie" ? "movie" : "tv")
  }

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs
          data={["Movie", "TV Show"]}
          onTabChange={onTabChangeHandler}
        />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} mediaType={endPoint} />
    </div>
  )
}

export default TopRated
