
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'
import NewForm from './NewForm'
import EditForm from './EditForm'


export default function MovieList() {
    const [movies, setMovies] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [clickedMovieId, setClickedMovieId] = useState("")
    useEffect(() => {
        getMovie()
    }, [])

    const getMovie = () => {
        axios.get("api/v1/movies")
            .then((response) => {
                console.log("get", response.data)
                setMovies(response.data.$values)
            }).catch((err) => {
                console.log("error", err);
            })
    }
    const addMovie = (movie) => {
        axios.post("api/v1/movies", movie)
            .then(res => {
                console.log("post", res);
                const updateMovieList = [...movies]
                updateMovieList.push(res.data)
                setMovies(updateMovieList);


            }).catch((err) => {
                console.log("error", err);
            })
    }
    const editView = (id) => {
        setIsEdit(!isEdit)
        setClickedMovieId(id)

    }
    const editMovie = (movie) => {
        axios.put(`api/v1/movies/${movie.id}`, movie)
            .then((res) => {
                console.log("eidt", res);
            }).catch((err) => {
                console.log("error", err);
            })

    }
    const deleteMovie = (id) => {
        axios.delete(`api/v1/movies/${id}`)
            .then((res) => {
                const updatedMoviesList = [...movies];
                const index = updatedMoviesList.findIndex(mov => mov.id === id);
                if (index !== -1) {
                    updatedMoviesList.splice(index, 1);
                    setMovies(updatedMoviesList);

                }
                console.log("delete", res);
            }).catch((err) => {
                console.log("error", err);
            })
    }

    return (
        <div>
            <h1>Movie List</h1>
            <NewForm addMovie={addMovie} />
            <ul>
                {movies.map((movie, index) => <div key={index}>
                    <Movie {...movie} editView={editView} deleteMovie={deleteMovie} />
                    {isEdit && clickedMovieId === movie.id ?
                        <EditForm movie={movie} editMovie={editMovie} /> : null}
                </div>



                )}
            </ul>

        </div>
    )
}
