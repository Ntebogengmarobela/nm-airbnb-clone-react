import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import SearchPage from "./components/SearchPage";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
