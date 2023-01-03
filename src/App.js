import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Dishes from "./components/Dishes";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Dishes />
        <Dishes />
        <Dishes />
      </main>
      <Footer/>
    </>
  );
}

export default App;
