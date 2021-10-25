require("dotenv").config()
var CronJob = require('cron').CronJob;
const axios = require("axios")
var job = new CronJob('* * * * *', async function () {
    const {data: timings} = await axios.get(`https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400`)
    await axios.post(`${process.env.serviceURL}/trigger/sunrise/some-random-key`, {value1: timings.results.sunrise})
}, null, true, 'America/Los_Angeles');
job.start();