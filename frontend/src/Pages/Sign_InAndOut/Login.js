import React from 'react'
import './Login.css';
import Header from '../../Header';

function Login() {
    return (
        <div className='LoginContanier'>
            <Header />
            <div className='LoginPage'>
                <div className='UpperText'>
                    <h2>Welcome Back</h2>
                </div>
                <div className='FirstInput'>
                    <text>Email</text>
                    <input placeholder='Email'></input>
                </div>
                <div className='SecondInput'>
                    <text>Password</text>
                    <input placeholder='Password'></input>
                </div>
                <div className='button'>
                    <div className='buttontext'>
                        <text>Forget Password?</text>
                    </div>
                    <button>Login</button>
                </div>
                <div className='OrText'>
                    <text>------ OR -----</text>
                    <div className='AllImage'>
                        <div className='image'>
                            <img className='LogoImage1' src='https://cdn-icons-png.flaticon.com/512/300/300221.png' alt='googel' />
                        </div>
                        <div>
                            <img className='LogoImage2' src=' https://cdn-icons-png.flaticon.com/512/733/733547.png' alt="Abbas" />
                        </div>
                        <div>
                            <img className='LogoImage3' src='https://cdn-icons-png.flaticon.com/512/733/733579.png' alt='google' />
                        </div>
                        <div>
                            <img className='LogoImage4' src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='google' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login