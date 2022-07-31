import './App.css';
import Header from './Header';
import HomePage from './HomePage';
import HomeSection from './HomeSection';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
      <Header />
    <Routes>
    <Route path="/" element={<HomePage/>} />
    </Routes>
    <HomeSection />
    </Router>
     
    </div>
  );
}

export default App;
