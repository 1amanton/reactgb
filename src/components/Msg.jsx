import classes from "./Msg.module.css"

export const Msg = ({ author, text }) => {
    return (
        <div className={classes.msg}>
            <h5>MSG</h5>
            <h3>{author}</h3>
            <p>{text}</p>

        </div>
    )
}