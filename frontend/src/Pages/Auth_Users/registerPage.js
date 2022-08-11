import { useState, useContext } from "react";
import AuthContext from '../../context/AuthContext';
import { Link } from "react-router-dom";
import './registerPage.css'
import iconsource from '../../assets/images/icons2.jpeg';
import Header from "../../Header";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(email, username, password);
  };

  return (
    <>
    <Header />
    <section className="Component3">
      <div className="SignUptext">
      <h2>Sign Up</h2>
      </div>
       <Link to = "/" >
        <img className="HeaderIcon2" src={iconsource} alt='Headericon' />
      </Link>
      <div className="Pageregister">
      <form onSubmit={handleSubmit}>
        <div className="Input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className="Input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="Input"></div>
        <div className="Input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button>Sign Up</button>
      </form>
      </div>
      <div className="Component4">
      <div className="SignUpWithGoogle">
        <img className="Google" src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"  alt=""/>
        <p>Sign In With Google</p>
      </div>
      <div className="login">
      <Link to='/login'><a>Login</a></Link>
      </div>
      </div>
    </section>
    </>
  );
}

export default Register;
