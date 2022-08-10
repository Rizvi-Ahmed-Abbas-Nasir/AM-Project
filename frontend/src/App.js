import './App.css';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Register from './Pages/Auth_Users/registerPage'
import LoginPage from './Pages/Auth_Users/loginPage';

function App() {
  return (
    <div className='App'>
    <Router>
    <AuthProvider>
    <Routes>
    <Route  exact path="/" element={<HomePage />} />
    </Routes>
    <Routes>
      <Route path='register' element={<Register/>}/>
    </Routes>
    <Routes>
      <Route path='login' element={<LoginPage/>}/>
    </Routes>
    </AuthProvider>
    </Router>
    </div>
  );
}

export default App;
