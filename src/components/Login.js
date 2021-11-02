import React, { useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { Context } from "..";
import firebase from "firebase/compat/app";

const Login = () => {
  const {auth} = useContext(Context);
  const loginGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
    console.log(user)
  }
  const loginFB = async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
    console.log(user)
  }
  const loginGithub = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
    console.log(user)
  }
  const loginFB = async () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
    console.log(user)
  }
  return (
    <Container className="d-flex flex-column">
      <Button onClick={loginGoogle} variant={"outline-dark"} className="mt-5" style={{fontSize: 50}}> Google </Button>  
      <Button onClick={loginGithub}variant={"outline-dark"} className="mt-5" style={{fontSize: 50}}> Git hub </Button>
      <Button onClick={loginFB}variant={"outline-dark"} className="mt-5" style={{fontSize: 50}}> Facebook </Button>
    </Container>
  )
}

export default Login;
