import React from 'react'

export default function Movie(props) {
    return (
        <li>
            title {props.name}
            <button onClick={() => props.editView(props.id)}> Edit</button>
            <button onClick={() => props.deleteMovie(props.id)}> Delete it</button>

        </li>
    )
}
