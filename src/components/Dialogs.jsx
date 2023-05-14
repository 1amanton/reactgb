import classes from "./Dialogs.module.css"
import { Msg } from "./Msg"

export const Dialogs = ({ messages, setMessages }) => {

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

        </div>
    )
}