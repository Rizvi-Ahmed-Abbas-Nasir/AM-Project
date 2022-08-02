import './App.css';
import Header from './Header';
import HomePage from './HomePage';
import HomeSection from './HomeSection';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from './Footer';


function App() {
  return (
    <div className="App">
    <Router>
      <Header />
    <Routes>
    <Route path="/" element={<HomePage/>} />
    </Routes>
    <HomeSection />
    <Footer />
    </Router>
    </div>
  );
}

export default App;
