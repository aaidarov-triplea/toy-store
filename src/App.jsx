import "./App.css";
import Footer from "./components/Footer";
import ForBusinnes from "./components/ForBusinnes";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InstaPage from "./components/InstaPage";
import StuffedAndWoodenToys from "./components/StuffedAndWoodenToys";
import Subscribe from "./components/Subscribe";
import ToyCardItem from "./components/ToyCardItem";
import VideoContent from "./components/VideoContent";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <StuffedAndWoodenToys />
      <ToyCardItem />
      <VideoContent />
      <ForBusinnes />
      <Subscribe />
      <InstaPage />
      <Footer />
    </>
  );
}

export default App;
