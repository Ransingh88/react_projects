import "./App.css";
import Navbar from "./components/layout/header/Navbar";
import HelpNotification from "./components/notification/HelpNotification";
import AppRoutes from "./routes/AppRoutes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <div className="bg-white text-chinese_black ">
      <div className="container mx-auto">
        <HelpNotification />
        <Navbar />
        <AppRoutes />
        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
