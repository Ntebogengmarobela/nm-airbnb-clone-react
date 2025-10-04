import './App.css';
import Header from "./components/layout/Header";
import Home from './components/Home';
import Footer from "./components/layout/Footer"

const App =() => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      {/* 
      Home Page
       Header

       Banner
        Search
      
      Card 

      Footer

      Search Page
       Header
      */}
    </div>
  );
}

export default App;
