import './App.css';
import HomePage from './HomePage';
import { BrowserRouter , Route ,Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Register from './Pages/Auth_Users/registerPage'
import LoginPage from './Pages/Auth_Users/loginPage';
import AddToCart from './Pages/AddTOCart/AddToCart';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <AuthProvider>
    <Routes >
    <Route  exact path="/" element={<HomePage />} />
    </Routes>
    <Routes>
      <Route path='register' element={<Register/>}/>
    </Routes>
    <Routes>
      <Route path='login' element={<LoginPage/>}/>
    </Routes>
    <Routes>
      <Route path='AddToCart' element={<AddToCart/>}/>
    </Routes>
    </AuthProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
