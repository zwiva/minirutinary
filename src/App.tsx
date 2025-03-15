import { useState } from 'react'
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import History from './pages/History';
import './App.css'

function App() {
  const [page, setPage] = useState("home");
  return (
    <>
      <Navbar setPage={setPage} />
      {page === "home" && <Home />}
      {page === "history" && <History />}
      {page === "about" && <About />}
      <Footer />
    </>
  );
}

export default App