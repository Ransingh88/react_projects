import React from "react"
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import Recommendation from "./carousels/recommendation/Recommendation"
import Similar from "./carousels/similar/Similar"
import Cast from "./cast/Cast"
import DetailsBanner from "./detailsBanner/DetailsBanner"
import "./style.scss"
import VideosSection from "./videosSection/VideosSection"

const Details = () => {
  const { mediaType, id } = useParams()
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`)
  const { data: credits, loading: creditLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  )
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  )
}

export default Details
