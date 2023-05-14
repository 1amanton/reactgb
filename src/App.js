import "./App.css"
import { useEffect, useState } from 'react';
import { Dialogs } from './components/Dialogs';
import { AUTHOR } from './constants';
import { Addmsg } from './components/Addmsg';

function App() {

  const [messages, setMessages] = useState([])

  const addMessage = (newMessage) => {
    setMessages((prevState) => [...prevState, newMessage])
  }

  useEffect(() => {
    console.log(messages, "APP USEEFFECT")
    if (
      messages.length > 0 && 
      messages[messages.length -1].author === AUTHOR.user
      ) 
      {
        const timeout = setTimeout(() => {
          addMessage({
            author: AUTHOR.bot,
            text: `Hi, ${AUTHOR.user} Im Bot! How are you? ${AUTHOR.user}`,
          })
        }, 1000)

        return () => clearTimeout(timeout)
      
      }

  }, [messages])




  return (
    <div className="content">
      <Dialogs messages={messages} setMessages={setMessages} addMessage={addMessage} />

      <Addmsg messages={messages} setMessages={setMessages} addMessage={addMessage} />

    </div>
  );
}

export default App;
