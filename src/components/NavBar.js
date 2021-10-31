import React, { useContext } from "react";
import { Navbar, Button, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../index";

const NavBar = () => {
  const { auth } = useContext(Context)
  const [ user ] = useAuthState(auth)
  return (
    <Navbar bg="dark" variant="dark" style={{color: "white", fontSize: 50}}>
      { user ? 
        <Button onClick={() => auth.signOut()} variant={"outline-light"} style={{marginLeft: "75%", fontSize: 40}}> Log out </Button> 
        :
        <Row className="m-auto">
          Authenticate please with ...
        </Row>  
      }
    </Navbar>
  )
}

export default NavBar
