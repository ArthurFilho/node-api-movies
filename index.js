const express = require("express")
const app = express()
const port = 3000

const movies = require("./src/movies/movies.json")
const genres = require("./src/movies/genres.json")
const base = require("./src/movies/base.json")

app.get("/", (req, res) => {
    return res.json(base)
})


app.get("/movies", (req, res) => {
    return res.json(movies)
})

app.get("/genres", (req, res) => {
    return res.json(genres)
})

app.listen(port, ()=> {
    console.log("servidor rodando...")
})