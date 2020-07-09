import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { FormControl, InputLabel, Input } from '@material-ui/core';

import './App.css';
import Message from './Message';


function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ username: 'Deep', text: 'hey'}, {username: 'hmm', text: 'hey'}]);
  const [username, setUsername] = useState('');


useEffect(() =>  {

  

setUsername(prompt('enter your name'));


}, [input])


  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {username: username, text: input} ]);
    setInput('');


  }

  return (
    <div className="App">
      <h1>Messenger</h1>
      <h2> Welcome {username} </h2>
      <form>

        <FormControl>
          <InputLabel>Enter a message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>

        </FormControl>

      </form>


      {
        messages.map(message  => {


   return    <Message username={message.username} text={message.text} />


        })
      }



    </div>
  );
}

export default App;
