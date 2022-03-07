import React from "react"

export function MessageList({messages}) {
    return (
    <ul>
        {messages.map((i) => (
                <li key={i.id}>{i.author}: {i.text}</li>
            ))}
    </ul>
    )
}

