import { BrowserRouter } from "react-router-dom";
import Buttons from "./components/Buttons";
import Login from "./components/Login";
import Navbar from "./components/NavBar";
import SisBroNumber from "./components/SisBroNumber";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import { Context } from "./index";

function App() {
  const { auth } = useContext(Context)
  const [ user ] = useAuthState(auth)
  //console.log(user)
  const bro = 0
  const sis = 0
    return (
      <BrowserRouter>
        <Navbar />
        <SisBroNumber bro={bro} sis={sis}/>
        {user ?
          <Buttons />
          :
          <Login />
        }                      
      </BrowserRouter>
    );
}

export default App;
