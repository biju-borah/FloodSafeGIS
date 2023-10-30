import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/shared/Header";
import IntroPage from "./pages/introPage"
import { Footer } from "./components/shared/Footer";
import "./Global.css";
import SecondPage from "./pages/secondPage";
import ThirdPage from "./pages/thirdPage";
import FinalPage from "./pages/finalPage";
// import OurTeamPage from "./pages/ourTeamPage";
import OurMissionPage from "./pages/ourMissionPage";
import { Mid } from "./components/Mid";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<IntroPage />} key="route-intro-screen" />
          <Route
            exact
            path="/location"
            element={<SecondPage />}
            key="route-result-screen"
          />
          <Route
            exact
            path="/chenimari"
            element={<ThirdPage />}
            key="route-result-screen"
          />
          <Route
            exact
            path="/details/:id"
            element={<FinalPage />}
            key="route-result-screen"
          />
          <Route
            exact
            path="/test"
            element={<Mid />}
            key="route-test-screen"
          />
          <Route
            exact
            path="/ourMission"
            element={<OurMissionPage />}
            key="our-mission-screen"
          />
          {/* <Route
            exact
            path="/ourTeam"
            element={<OurTeamPage />}
            key="our-team-screen"
          /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
