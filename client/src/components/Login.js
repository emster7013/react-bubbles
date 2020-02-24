import React, {useState} from "react";
import axiosWithAuth from '../util/axiosWithAuth';
import styled from 'styled-components';

const LoginDiv = styled.div `
background: red;

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
    axiosWithAuth() 
    .put('/login', loginz)
    .then(res =>{localStorage.setItem('token', res.data.payload);
  setLoginz(loginz)
  props.history.push('/colors')
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
          <h1>Welcome to the Login!</h1>
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
