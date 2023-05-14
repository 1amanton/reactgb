import { useState } from "react"


export const Addmsg = ({ messages, setMessages }) => {
    console.log(messages)

    const [author, setAuthor] = useState("Author")
    const [text, setText] = useState("Your Message")

    const changeAuthor = (e) => {
        setAuthor(e.target.value)
    }
    const changeText = (e) => {
        setText(e.target.value)
    }

    const addMsg = (e) => {
        e.preventDefault()

        let obj = {
            author: author,
            text: text,
        }

        setMessages((prevState) => [...prevState, obj])
    }

    return (
        <div>

            <h3>Add new message</h3>
            Name: {author}
            <br />
            Message: {text}
            <form onSubmit={addMsg}>
                <input type="text" placeholder={author} onChange={changeAuthor} />
                <br />
                <input type="text" placeholder={text} onChange={changeText} />
                <br />
                <button>Post</button>
            </form>
        </div>
    )
}