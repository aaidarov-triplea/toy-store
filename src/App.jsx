import "./App.css";
import ForBusinnes from "./components/ForBusinnes";
import Header from "./components/Header";
import Hero from "./components/Hero";
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
    </>
  );
}

export default App;
