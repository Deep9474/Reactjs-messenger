import React from 'react'

function Message(props) {
    return (
        <div>
            <h1>{props.username}: {props.text}</h1>
        </div>
    )
}

export default Message
