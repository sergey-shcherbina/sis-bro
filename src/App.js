import { BrowserRouter } from "react-router-dom";
import Buttons from "./components/Buttons";
import Login from "./components/Login";
import Navbar from "./components/NavBar";
import Statistics from "./components/Statistics";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useContext } from "react";
import { Context } from ".";

function App() {
  const {auth, firestore} = useContext(Context);
  const [user] = useAuthState(auth);
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  );
  let sis = !loading && messages[messages.length-1].sisNum;
  let bro = !loading && messages[messages.length-1].broNum;
  
    return (
      <BrowserRouter>
        <Navbar />
        <Statistics sis={sis} bro={bro} />
        {user ?
          <Buttons sis={sis} bro={bro}/>
          :
          <Login />
        }                      
      </BrowserRouter>
    );
}

export default App;
