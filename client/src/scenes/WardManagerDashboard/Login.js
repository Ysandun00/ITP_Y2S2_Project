import React,{useState} from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import image from './image/yasitha.jpg';
import axios from 'axios';

import './Login.css';
function Login (){

    const [EmailAddress, setEmailAddress] = useState('');
    const [Password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    // const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);
  
    const handleSubmit = e => {
      e.preventDefault();
  
      axios.post('http://localhost:3001/wardlogin', { EmailAddress,Password })
        .then(res => {
          setLoggedIn(true);
          alert('login successfull !!');
          window.location.href ="http://localhost:3000/view";
        })
        .catch(err => {
          setError(err.response.data.message);
          alert('Invalid email or password!');
        });


        

        if (!EmailAddress || !Password) {
            alert('Please fill in all fields');
            return;
          }
      
          if (!isValidEmail(EmailAddress)) {
            alert('Please enter a valid email address');
            return;
          }
    };


      const isValidEmail = (email) => {
        // Email validation regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);

      };

return(
<>
 <Navbar></Navbar>
 <hr style = {{height:'100px'}}></hr>

<body>
 <div class="y2">
    <section class="Form my-4 mx-5">
        <div class="container">
            <div class="row no-gutter">
                <div class="col-lg-5">
                <img src='assets/img/yasitha.jpg' class="img-fluid" alt="" />
        
                </div>
                <div class="col-lg-7 px-5 pt-5 ">
                    <h1 class="font-weight-bold py-3">Welcome to Ward managment</h1>
                    <h4>Sign into your account</h4>
                    <form onSubmit={handleSubmit}>
                        <div class="form-row">
                            <div class="col-lg-7">
                                <input type="text"   placeholder="Enter the email" onChange={(e) => setEmailAddress(e.target.value)}
 class="btnt" required></input>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-lg-7">
                                <input type="password"  placeholder="Enter the password"  onChange={(e) => setPassword(e.target.value)}
            minLength='6'
 class="btnt" required></input>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-lg-7">
                               <button type="submit" class="btn2 mt-3 mb-5"> Login</button>
                            </div>
                        </div>
                        <a href="#">Forgot password</a>
                        <p>Don't have an account?<a href="#">Register here</a></p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
</body>
      <div className='footer'><Footer/></div>
</>

)

}
export default Login;