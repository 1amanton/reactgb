import { useEffect, useState } from "react"
import classes from "./Msg.module.css"

export const Msg = ({ author, text }) => {

    const [isbotcolor, setIsbotcolor] = useState(false)

    useEffect(() => {
        if (author === "BOT") {
            setIsbotcolor(true)
            console.log("THIS IS BOT", author)
        }
        return
        console.log("NOT BOT", author)
    }, [])

    return (
        <div style={isbotcolor ? { "backgroundColor": "lightgreen" } : { "backgroundColor": "white" }} className={classes.msg} >
            <h5>MSG</h5>
            <h3>{author}</h3>
            <p>{text}</p>
        </div >
    )
}