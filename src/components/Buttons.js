import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Context } from '..';
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from 'firebase/compat/app';

const Buttons = ({sis, bro}) => { 
  const {auth, firestore} = useContext(Context);
  const [user] = useAuthState(auth);
  const [messages, loading] = useCollectionData(
    firestore.collection('messages').orderBy('createdAt')
  );
  
  const sendMessage = async (value, sis, bro) => {
    firestore.collection('messages').add({
        sisNum: sis,
        broNum: bro,
        id: user.uid,
        name: user.displayName,
        text: value,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    }

  const add0 = (num) => {
    if (num >=0 && num <= 9) {
      return '0' + num;
    }  
    return num;
  }
  const convertedTime = (time) => {
    let date = new Date(time * 1000);
    return date.getHours() + ' : ' + add0(date.getMinutes());
  }
  const text = !loading && messages[messages.length-1].text;
  const name = !loading && messages[messages.length-1].name.substring(0, 1).toUpperCase() + 
    messages[messages.length-1].name.substring(1, messages[messages.length-1].name.indexOf(' '));
  const createdAt = !loading && messages[messages.length-1].createdAt && convertedTime(messages[messages.length-1].createdAt.seconds); 

  const margin = !loading && messages[messages.length-1].text === 'Bro!' ? "50%" : "-50%";
  const buttonStyle = {width: 260, height: 260, borderRadius: 130, border: "20px solid", fontSize: 90};
  
  return (
    <Container className="d-flex flex-column">
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <div style={{marginLeft: margin, color: "gray"}}>
          {text}<br/> sent by {name} at {createdAt}
        </div>       
      </div>
      <div style={{display: "flex", justifyContent: "space-around", marginTop: 40}}>
        <Button
          onClick={() => {
            Number(sis++); 
            sendMessage('Sis!', sis, bro)}}
          variant={"outline-dark"} 
          style={buttonStyle}
        >
          SIS!
        </Button>
        <Button
          onClick={() => {
             bro++
             sendMessage('Bro!', sis, bro)
            }
          }
          variant={"outline-dark"} 
          style={buttonStyle}
        >
          BRO!
        </Button>
      </div>     
    </Container>
  )
}

export default Buttons;


