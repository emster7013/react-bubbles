import React, {useState} from "react";
import axios from 'axios';
import styled from 'styled-components';

const LoginDiv = styled.div `
background: red;
align-content: center;

`

const Login = props => {
  const [loginz, setLoginz] = useState({
    username:'',
    password:''
  })
  

  const handleChange = e =>{
    setLoginz({...loginz, [e.target.name]:
       e.target.value})
  }

  const handleSubmit = e =>{
    e.preventDefault();
    axios 
    .post('http://localhost:5000/api/login', loginz)
    .then(res =>{
      console.log('login data', res.data)
      localStorage.setItem('token', res.data.payload);setLoginz(loginz)
      props.history.push('/protected')
  })
  .catch(err=>{console.log('inavlid login', err);
  });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    
    <form onSubmit={handleSubmit}>
      <LoginDiv>
        <div>
          <h1>Welcome to the Bubbles Login!</h1>
    <input
      type="text"
      name="username"
      placeholder="username"
      value={loginz.username}
      onChange={handleChange}
    />
    <br/>
    <input
      type="password"
      name="password"
      placeholder="password"
      value={loginz.password}
      onChange={handleChange}
    />
    </div>
    </LoginDiv>
    <button>Log in</button>
  </form>
  
  );
};

export default Login;
