require("dotenv").config() 
require("./config/database").connect();

const express = require("express")
const app = express()
const applets = require("./model/applets")

app.use(express.json())

app.post('/trigger/:eventId/:key', async (req, res) => {
    try{
        const applet = await applets.findOne({event: req.params.eventId})
        require(`./modules/${applet.actionService}.service.module`)(req.params.eventId, req.body, req.params.key, applet.output)
        res.send(`OK`)
    }catch(e){
        console.log(e)
    }
})

app.listen(process.env.PORT, () => console.log("service server started"))