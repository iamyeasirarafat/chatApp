import express from "express";

const app = express();

app.get('/', (req, res, next) => {
    res.json({ message: "hello world this is from express" })
})

app.listen(3000, () => {
    console.log("server is running");
})