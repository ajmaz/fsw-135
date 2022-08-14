const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require ("mongoose");

// middleware
app.use(express.json());
app.use(morgan("dev"));

// Connect to DB
mongoose.connect("mongodb://localhost:3000/",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log("connected to the DB")
)


app.get('/test', (req, res) => {
    res.send("GREAT")
})


app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(3000, () => {
    console.log("Listening on port 3000.")
});