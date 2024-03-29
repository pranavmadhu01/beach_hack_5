import "./App.css";
import { Suspense, useEffect, useState,lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Schedulepage from "./pages/Schedulepage/Schedulepage";
// import Sponsorspage from "./pages/Sponsorspage/Sponsorspage";
// import Aboutpage from "./pages/Aboutpage/Aboutpage";
// import Activesoonpage from "./pages/Activesoonpage/Activesoonpage";
// import Bottomnav from "./components/Bottomnav/Bottomnav";
// import Header from "./components/Header/Header";
// import Leaderboardpage from "./pages/Leaderboard/Leaderboardpage";
import Aos from "aos";
import "aos/dist/aos.css";
import Loading from "./Loading";
const Home = lazy(() => import("./pages/Home/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const Schedulepage = lazy(() => import("./pages/Schedulepage/Schedulepage"));
const Leaderboardpage = lazy(() =>
  import("./pages/Leaderboard/Leaderboardpage")
);
const Sponsorspage = lazy(() => import("./pages/Sponsorspage/Sponsorspage"));
const Aboutpage = lazy(() => import("./pages/Aboutpage/Aboutpage"));
const Bottomnav = lazy(() => import("./components/Bottomnav/Bottomnav"));
const Header = lazy(() => import("./components/Header/Header"));

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Header
            anchorlinks={[
              "home",
              "schedule",
              "leaderboard",
              "sponsors",
              "about",
            ]}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/schedule" element={<Schedulepage />} />
            <Route path="/leaderboard" element={<Leaderboardpage />} />
            <Route path="/sponsors" element={<Sponsorspage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Bottomnav />
        </Suspense>
      </BrowserRouter>
    </>
  );
}
export default App;
