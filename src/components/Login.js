import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Context } from '../index';
import firebase from 'firebase/compat/app';

const Login = () => {
  const { auth } = useContext(Context)
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const { user } = await auth.signInWithPopup(provider)
    console.log(user)
  }

  return (
    <Container className="d-flex flex-column">
      <Button onClick={login} variant={"outline-dark"} className="mt-5" style={{fontSize: 50}}> Google </Button>  
      <Button variant={"outline-dark"} className="mt-5" style={{fontSize: 50}}> Facebook </Button>
      <Button variant={"outline-dark"} className="mt-5" style={{fontSize: 50}}> Git hub </Button>
    </Container>
  )
}

export default Login
