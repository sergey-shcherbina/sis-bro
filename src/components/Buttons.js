import React, { useContext, useState } from 'react';
import { Container, Button, Card, Row } from 'react-bootstrap';
import { Context } from '..';
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from 'firebase/compat/app';

const Buttons = () => {
  const {auth, firestore} = useContext(Context)
  const [user] = useAuthState(auth)
  const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async (value) => {
        firestore.collection('messages').add({
            id: user.uid,
            name: user.displayName,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
    
    console.log(loading)

  const add0 = (num) => {
    if (num >=0 && num <= 19) return '0' + num
    return num
  }
  const convertedTime = (time) => {
    let date = new Date(time * 1000)
    return date.getHours() + ' : ' + add0(date.getMinutes())
  }
  const message = (messages) => { 
    return <>{!loading && messages[messages.length-1].text}<br/>
      Sent by {!loading && messages[messages.length-1].name.substring(0, 1).toUpperCase() + 
      messages[messages.length-1].name.substring(1, messages[messages.length-1].name.indexOf(' '))} at {!loading && 
      messages[messages.length-1].createdAt && convertedTime(messages[messages.length-1].createdAt.seconds)}</>
    } 
    
  const margin = !loading && messages[messages.length-1].text === 'Bro!' ? "50%" : "-50%"
  const buttonStyle = {width: 260, height: 260, borderRadius: 130, border: "20px solid", fontSize: 90}
  
  return (
    <Container className="d-flex flex-column">
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <div style={{marginLeft: margin, color: "grey", cursor: "pointer"}}>
          {message(messages)}
        </div>       
      </div>
      <div  style={{display: "flex", justifyContent: "space-around", marginTop: 40}}>
        <Button
          onClick={() => sendMessage('Sis!')}
          variant={"outline-dark"} 
          style={buttonStyle}
        >
          SIS!
        </Button>
        <Button
          onClick={() => {sendMessage('Bro!')}}
          variant={"outline-dark"} 
          style={buttonStyle}
        >
          BRO!
        </Button>
      </div>     
    </Container>
  )
}

export default Buttons


// import React, {useContext, useState} from 'react';
// import {Context} from "../index";
// import {useAuthState} from "react-firebase-hooks/auth";
// import {Avatar, Button, Container, Grid} from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";
// import {useCollectionData} from "react-firebase-hooks/firestore";
// import firebase from "firebase//compat/app";

// const Buttons = () => {
//     const {auth, firestore} = useContext(Context)
//     const [user] = useAuthState(auth)
//     const [value, setValue] = useState('')
//     const [messages, loading] = useCollectionData(
//         firestore.collection('messages').orderBy('date')
//     )

//     const sendMessage = async (value1) => {
//         firestore.collection('messages').add({
//             id: user.uid,
//             displayName: user.displayName,
//             text: value1,
//             date: firebase.firestore.FieldValue.serverTimestamp()
//         })
//     }

    

//     return (
//         <Container>
//             <Grid container
//                   justify={"center"}
//                   style={{height: window.innerHeight - 50, marginTop: 20}}>
//                 <div style={{width: '80%', height: '60vh', border: '1px solid gray', overflowY: 'auto'}}>
//                     {messages && messages.slice(messages.length - 2).map(message =>
//                         <div style={{
//                             margin: 10,
//                             border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
//                             marginLeft: user.uid === message.uid ? 'auto' : '10px',
//                             width: 'fit-content',
//                             padding: 5,
//                         }}> 
//                             <Grid container>
//                                 <div>{message.displayName}</div>
//                             </Grid>
//                             <div>{message.text}</div>
//                         </div>
//                       )}
//                 </div>
//                 <Grid
//                     container
//                     direction={"column"}
//                     alignItems={"flex-end"}
//                     style={{width: '80%'}}
//                 >
//                     <TextField
//                         fullWidth
//                         rowsMax={2}
//                         variant={"outlined"}
//                         value={value}
//                         onChange={e => setValue(e.target.value)}
//                     />
//                     <Button onClick={sendMessage} variant={"outlined"}>Отправить</Button>
//                 </Grid>
//                 <Button onClick={() => sendMessage('Sis')} variant={"outlined"}>Отправить</Button>
//                 <Button onClick={() => sendMessage('Bro')} variant={"outlined"}>Отправить</Button>
//             </Grid>
//         </Container>
//     );
// };

// export default Buttons;