import React from "react"
import { useSelector } from "react-redux"
import "./style.scss"

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home)
  return (
    <div className="genres">
      {data?.map((genreid) => {
        // eslint-disable-next-line array-callback-return
        if (!genres[genreid]?.name) return
        return (
          <div key={genreid} className="genre">
            {genres[genreid]?.name}
          </div>
        )
      })}
    </div>
  )
}

export default Genres
