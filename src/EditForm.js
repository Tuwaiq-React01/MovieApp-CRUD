import React from 'react'

export default function EditForm(props) {
    const [newMovie, setNewMovie] = React.useState(props.movie)
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
        props.editMovie(newMovie);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        name="name"
                        type="text"
                        value={newMovie.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Cover Url</label>
                    <input
                        name="coverURL"
                        type="text"
                        value={newMovie.coverURL}
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
                    <input type="submit" value="Edit Movie Please" />
                </div>

            </form>


        </div>
    )
}
