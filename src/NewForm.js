import React from 'react'

export default function NewForm(props) {
    const [newMovie, setNewMovie] = React.useState({})
    const handleChange = (event) => {
        const att = event.target.name;
        const newValue = event.target.value;
        const updateMovie = { ...newMovie }
        updateMovie[att] = newValue
        console.log("updateMovie", updateMovie);
        setNewMovie(updateMovie)

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addMovie(newMovie);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        name="name"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Cover Url</label>
                    <input
                        name="coverURL"
                        type="text"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Rating</label>
                    <input
                        name="rating"
                        type="number"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input type="submit" value="New Movie Please" />
                </div>

            </form>

        </div>
    )
}
