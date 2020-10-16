import React, { useEffect } from 'react';
import socketIOClient from "socket.io-client";

function App () {
  // const ENDPOINT = "/"
  // const ENDPOINT = "http://localhost:4001" this will access the port on your local machine, duh..
  const ENDPOINT = "http://www.offthecouch.tk:4001"

  const socket = socketIOClient(ENDPOINT);

  const sendSocket = () => {
    socket.send("a message to you")
  }

  useEffect(() => {

    sendSocket()
    // socket.send("a message to you")
        
    // return () => socket.disconnect();
  }, []);


  return (
   <img src="https://res.cloudinary.com/danleaver/image/upload/v1601914154/dpl_review/cello_aqtoay.jpg" />  
  )
}



export default App;
