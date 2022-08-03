import './App.css';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route ,Routes,Link } from "react-router-dom";
import Login from './Pages/Sign_InAndOut/Login';



function App() {
  return (
    <div className='App'>
    <Router>
    <Routes>
    <Route path="/" element={<HomePage />} />
    </Routes>
    <Routes>
    <Route path='/Login' element={<Login />}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
