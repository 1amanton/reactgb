import classes from "./Addmsg.module.css"
import { useState } from "react"
import { AUTHOR } from "../constants"


export const Addmsg = ({ messages, setMessages, addMessage }) => {
    console.log(messages)

    // const [author, setAuthor] = useState("Author")
    const [text, setText] = useState("")

    // const changeAuthor = (e) => {
    //     setAuthor(e.target.value)
    // }
    const changeText = (e) => {
        setText(e.target.value)
    }

    const addMsg = (e) => {
        e.preventDefault()

        let obj = {
            author: AUTHOR.user,
            text: text,
        }

        addMessage(obj)
        // setAuthor("")
        setText("")
    }

    return (
        <div className={classes.addmsg}>

            <h3>Add new message</h3>
            <span className={classes.user}>Name: {AUTHOR.user}</span>
            <br />
            <form onSubmit={addMsg} className={classes.form}>
                {/* <input type="text" onChange={changeAuthor} />
                <br /> */}
                <input type="text" value={text} onChange={changeText} />
                <br />
                <button disabled={!text}>Post</button>
            </form>
        </div>
    )
}