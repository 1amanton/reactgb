import { useEffect, useState } from 'react';
import { Dialogs } from './components/Dialogs';

function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    const list = [
      {author: "Anton",
      text: "Hello",  
      },
      {author: "Anna",
      text: "How are u?",  
      },
      {author: "John",
      text: "Thanx",  
      },
      {author: "Helen",
      text: "Good bye",  
      },  
    ]
    setMessages((prevState) => [...prevState,...list])

  },[])


  return (
    <div className="App">
      <Dialogs messages={messages} setMessages={setMessages} />

    </div>
  );
}

export default App;
