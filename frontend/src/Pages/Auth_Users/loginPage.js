import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import './loginPage.css'
import { Link } from "react-router-dom";
import iconsource from '../../assets/images/icons2.jpeg';
import Header from "../../Header";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <>
    <Header />
    <section className="Component5">
      <Link to = "/" >
        <img className="HeaderIcon2" src={iconsource} alt='Headericon' />
      </Link>
      <div className="Pageregister1">
      <form onSubmit={handleSubmit}>
      <div className="Input1">
        <label hlabeltmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter Username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" />
      </div>
        <button type="submit">Login</button>
      </form>
      </div>
      <div className="Component6">
      <div className="SignUpWithGoogle2">
        <img className="Google" src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"  alt=""/>
        <p>Sign In With Google</p>
      </div>
      <div className="signUp">
      <Link to='/register'><a>Sign Up ?</a></Link>
      </div>
      </div>
    </section>
    </>
  );
};

export default LoginPage;
