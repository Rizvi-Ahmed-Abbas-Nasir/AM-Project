import { useState, useContext, useEffect } from "react";
import AuthContext from '../../context/AuthContext';
import { Link } from "react-router-dom";
import './registerPage.css'
import iconsource from '../../assets/images/icons2.jpeg';
import Header from "../../Header";
import GoogleButton from 'react-google-button';
import axios from "axios";
import { gapi } from 'gapi-script';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from "react-router-dom";

const googleClientId ='1036516700296-qp80hk14rrbapconlj912eg757ggd18t.apps.googleusercontent.com';
const drfClientId ='Yb9H2YIjYM3rY9xnXMYTAW9mrCv7sHmG76J1PJGf' ;
const drfClientSecret ='dlsVmJCku3Fp7jq7xoaj3NzUPdYbjbRGbEkeJynr227QdhuLdVQuzbeNIqWGWStcdyosu2wabPbEPMyAdVtMiU5cRN8RiiIpw4zwLdwiS7F5ywNKW1RQkamIjeA3pLcO';
const baseURL = "http://127.0.0.1:8000";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(email, username, password);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: googleClientId ,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const handleGoogleLogin = response => {
    console.log('SUCCESS', response);
    axios
    .post(`${baseURL}/auth/convert-token/`, {
      token: response.accessToken,
      backend: "google-oauth2",
      grant_type: "convert_token",
      client_id: drfClientId,
      client_secret: drfClientSecret,
    })
    .then((res) => {
      const { access_token, refresh_token } = res.data;
      console.log({ access_token, refresh_token });
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      navigate('/')
    })
    .catch((err) => {
      console.log("Error Google login", err);
    });
    
  };
  const onFailure = response => {
    console.log('FAILED', response);
  };

  return (
    <>
    <Header />
    <section className="Component3">
      <div className="SignUptext">
      {/* <h2>Sign Up</h2> */}
      </div>
      <div className="Pageregister">
      <form onSubmit={handleSubmit}>
        <div className="usernameInput1">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className="emailInput">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="passwordInput1">
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
      <div className="oldUser">
          <p>Already Have Account?</p>
        <Link to='/login'><a>Login</a></Link>
        </div>
        <div className="Component9">
      <div className="SignUpWithGoogle2">
        <GoogleLogin 
        render={renderProps => <GoogleButton {...renderProps} />}
         clientId={googleClientId}
         onSuccess={(response) => handleGoogleLogin(response)}
         onFailure={onFailure}
        />
      </div>
      </div>
    </section>
    </>
  );
}

export default Register;
