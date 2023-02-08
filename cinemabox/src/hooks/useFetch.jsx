import { useEffect, useState } from "react"
import { fetchDataFromApi } from "../utils/service"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setData(null)
    setError(null)

    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false)
        setData(res)
      })
      .catch((error) => {
        setLoading(false)
        setError(error)
      })
  }, [url])
  return { data, loading, error }
}

export default useFetch
