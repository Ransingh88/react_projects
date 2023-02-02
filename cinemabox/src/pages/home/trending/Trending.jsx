import React, { useState } from "react"
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper"
import SwitchTabs from "../../../components/switchTabs/SwitchTabs"
import useFetch from "../../../hooks/useFetch"
import Carousel from "../../../components/carousel/Carousel"

const Trending = () => {
  const [trendingTimeWindow, setTrendingTimeWindow] = useState("day")

  const { data, loading } = useFetch(`/trending/all/${trendingTimeWindow}`)

  const onTabChangeHandler = (tab) => {
    setTrendingTimeWindow(tab === "Day" ? "day" : "week")
  }

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChangeHandler} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending
