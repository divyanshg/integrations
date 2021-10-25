require("dotenv").config()
const express = require("express")
const app = express()

app.post('/trigger/:eventId/:key', (req, res) => {
    try{
        require("./modules/email.service.module")(req.body, req.params.key)
        res.send("ok")
    }catch(e){
        console.log(e)
    }
})

app.listen(process.env.PORT, () => console.log("service server started"))