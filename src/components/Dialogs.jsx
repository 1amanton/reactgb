import { useEffect } from "react"
import { Addmsg } from "./Addmsg"
import classes from "./Dialogs.module.css"
import { Msg } from "./Msg"

export const Dialogs = ({ messages, setMessages, addMessage }) => {

    useEffect(() => {
        const list = [
            {
                author: "John",
                text: "Hello",
            },
            {
                author: "Anna",
                text: "How are u?",
            }
        ]
        setMessages((prevState) => [...prevState, ...list])

    }, [])

    return (
        <div className={classes.dialogs}>
            <h1>Dialogs</h1>

            <div className={classes.messages}>
                {messages.map((item, idx) => {
                    return (
                        <Msg key={idx} author={item.author} text={item.text} />
                    )
                })}
            </div>

            {/* <Addmsg messages={messages} setMessages={setMessages} addMessage={addMessage} /> */}

        </div>
    )
}