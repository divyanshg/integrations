const axios = require("axios")
module.exports = async (event, data, key, text) => {
    await axios.post(`${webhookURL}/trigger/${event}/key/${key}}`, data)
}