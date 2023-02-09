import React from "react"
import Hero from "./heroSection/Hero"
import TrustedBrands from "../../components/ourTrustedBrands/TrustedBrands"
import RecomendedCourse from "./recomendedCourse/RecomendedCourse"
import NewlyLunchedCourse from "./newlyLunchedCourse/NewlyLunchedCourse"
import RecentlyViewedCourse from "./recentlyViewedCourse/RecentlyViewedCourse"
import StudentViewingCourse from "./studentViewingCourse/StudentViewingCourse"

const Home = () => {
  return (
    <div>
      <Hero />
      <RecomendedCourse />
      <NewlyLunchedCourse />
      <RecentlyViewedCourse />
      <StudentViewingCourse/>
      {/* <div className="bg-ghost_white2 h-[500px]">rr</div> */}
      <TrustedBrands />
    </div>
  )
}

export default Home
