import "./App.css";
import HomeCard from "./components/HomeCard";
import Navbar from "./layout/Navbar";
import ReadBlog from "./routes/ReadBlog";
function App() {
  return (
    <>
      <Navbar />
      {/* <HomeCard />
      <HomeCard />
      <HomeCard /> */}
      <ReadBlog />
    </>
  );
}

export default App;
