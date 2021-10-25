require("dotenv").config()
const express = require("express")
const axios = require("axios")

const app = express()

app.use(express.json())

app.post("/trigger/:event/key/:key", async (req, res) => {
    const data = req.body
    await axios.post(`${process.env.serviceURL}/trigger/${req.params.event}/${req.params.key}`, req.body)
    res.send(`Congratulations! You've fired the ${req.params.event} event`)
})

app.route("/trigger/:event/json/key/:key").get((req, res) => {
    res.send("get o")
}).post((req, res) => {
    res.send("post")
})

app.listen(process.env.PORT, () => console.log("server started on :", process.env.PORT))