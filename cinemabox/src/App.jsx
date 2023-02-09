import { useEffect } from "react"
import { useDispatch } from "react-redux"
import "./App.css"
import { fetchDataFromApi } from "./utils/service"
import {
  getApiConfigurations,
  getGenres,
  getLanguages,
} from "./store/features/home/homeSlice"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Routes from "./routes/AppRoutes"

function App() {
  const dispatch = useDispatch()

  const fetchApiConfig = async () => {
    const data = await fetchDataFromApi("/configuration")
    const dataLanguage = await fetchDataFromApi("/configuration/languages")
    const url = {
      backdrop: `${data.images.secure_base_url}original`,
      poster: `${data.images.secure_base_url}original`,
      profile: `${data.images.secure_base_url}original`,
    }
    dispatch(getApiConfigurations(url))
    dispatch(getLanguages(dataLanguage))
  }

  const mapGenresData = async () => {
    const promises = []
    const endPoints = ["tv", "movie"]
    const allGenres = {}

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises)

    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item))
    })

    dispatch(getGenres(allGenres))
  }

  useEffect(() => {
    fetchApiConfig()
    mapGenresData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className="">
      <Header />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
