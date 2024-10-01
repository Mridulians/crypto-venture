import Header from "./components/header/Header";
import Footer from "./components/footer/Footer.jsx";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import FearAndGreed from "./pages/FearAndGreed/FearAndGreed.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Form from "./pages/SubmissionForm/Form.jsx";
import CompleteRambo from "./pages/RamboChart/CompleteRambo.jsx";
import NewsPage from "./pages/News/NewsPage.jsx";
import Policy from "./pages/Policy/Policy.jsx";
import CryptoBubbles from "./pages/CryptoBubbles/CryptoBubbles.jsx";
import Testing from "./pages/Testing.jsx";
import LatestNewsFromYt from "./pages/LatestNewsFromYt/LatestNewsFromYt.jsx";
// import Review from "./components/Review/Review.jsx";


const App = () => {
  return (
    <>
      <ScrollToTop
        smooth={true}
        top="20"
        color="black"
        height="20"
        width="20"
        style={{
          borderRadius: "90px",
          backgroundColor: "#FABC2C",
          display: "flex",
          justifyContent: "center",
          fontWeight: "700",
          alignItems: "center",
        }}
      />

      <Header />

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fearandgreed" element={<FearAndGreed />} />
          <Route path="/rambochart" element={<CompleteRambo />} />
          <Route path="/form" element={<Form />} />
          <Route path="/news/:category" element={<NewsPage />} />
          <Route path="/policyandregulations" element={<Policy />} />
          <Route path="/bubbles" element={<CryptoBubbles />} />
          <Route path="/yt" element={<Testing />} />
          <Route path="/latest" element={<LatestNewsFromYt />} />
        </Routes>
      </div>
      
      {/* <Review /> */}
      <Footer />
    </>
  );
};

export default App;


// const YOUTUBE_API_KEY = 'AIzaSyDUBAdysMlQg9btbEMqe26kaJscaWG9p6I'; // Replace with your YouTube API key
// const NEWS_API_KEY = '45fdfe58da864dd7843632e3d4f6d9b9'; // Replace with your News API key