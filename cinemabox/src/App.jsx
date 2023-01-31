import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { fetchDataFromApi } from "./utils/service";
import { getApiConfigurations } from "./store/features/home/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./routes/AppRoutes";

function App() {
  const dispatch = useDispatch();

  const fetchApiConfig = async () => {
    const data = await fetchDataFromApi("/configuration");
    const url = {
      backdrop: `${data.images.secure_base_url}original`,
      poster: `${data.images.secure_base_url}original`,
      profile: `${data.images.secure_base_url}original`,
    }
    dispatch(getApiConfigurations(url));
  };

  useEffect(() => {
    fetchApiConfig()
  }, []);
  return (
    <div className="">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
