import { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import './loginPage.css'
import { Link } from "react-router-dom";
import iconsource from '../../assets/images/icons2.jpeg';
import Header from "../../Header";
import axios from "axios";
import { gapi } from 'gapi-script';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from "react-router-dom";
import GoogleButton from 'react-google-button';

const googleClientId ='1036516700296-qp80hk14rrbapconlj912eg757ggd18t.apps.googleusercontent.com';
const drfClientId ='Yb9H2YIjYM3rY9xnXMYTAW9mrCv7sHmG76J1PJGf' ;
const drfClientSecret ='dlsVmJCku3Fp7jq7xoaj3NzUPdYbjbRGbEkeJynr227QdhuLdVQuzbeNIqWGWStcdyosu2wabPbEPMyAdVtMiU5cRN8RiiIpw4zwLdwiS7F5ywNKW1RQkamIjeA3pLcO';
const baseURL = "http://127.0.0.1:8000";


const handleGoogleLogin = (response) => {
  axios
    .post(`${baseURL}/auth/convert-token`, {
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
    })
    .catch((err) => {
      console.log("Error Google login", err);
    });

   
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
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
  // const onLogoutSuccess = () => {
  //   console.log('SUCESS LOG OUT');
  // };

  return (
    <>
    <Header />
    <section className="Component5">
    <div className="SignUptext">
      <h2>Login</h2>
      </div>
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
        <GoogleLogin 
        render={renderProps => <GoogleButton {...renderProps} />}
         clientId={googleClientId}
         onSuccess={(response) => handleGoogleLogin(response)}
         onFailure={onFailure}
        />
      </div>
      <div className="signUp">
      <Link to='/register'><a>Sign Up</a></Link>
      </div>
      </div>
    </section>
    </>
  );
};

export default LoginPage;
