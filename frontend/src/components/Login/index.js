import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <LoginWrapper>
      <LoginTitle>Login</LoginTitle>
      <LoginForm>
        <LoginFormControl>
          <label>Email Address</label>
          <input type='text' placeholder='example@library.com' />
        </LoginFormControl>
        <LoginFormControl>
          <label>Password</label>
          <input type='password' />
        </LoginFormControl>
        <LoginButtons>
          <button type='submit'>Login</button>
          <span>or</span>
          <button>Login with Google</button>
        </LoginButtons>
      </LoginForm>
    </LoginWrapper>
  )
}

const LoginWrapper = styled.div`
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginTitle = styled.h2`
  margin-bottom: 2rem;
`

const LoginForm = styled.form`
  border: 1px solid lightgrey;
  padding: 2rem;
  width: 25rem;
`

const LoginFormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  input {
    border: 1px solid lightgrey;
    margin-top: 0.5rem;
    padding: 0.7rem;
    color: var(--black);
    letter-spacing: 1px;
    font-family: var(--primary-ff);
  }
`

const LoginButtons = styled.div`
  display: flex;
  flex-direction: column;
  span {
    text-align: center;
    margin: 0.5rem 0;
  }
  button {
    border: none;
    background: var(--primary-clr-2);
    color: #fff;
    padding: 0.7rem;
    font-family: var(--primary-ff);
    cursor: pointer;
  }
`

export default Login