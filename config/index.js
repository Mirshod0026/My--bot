require('dotenv').config();

const appConfig = {
    token: process.env.TOKEN,
    port: process.env.PORT || 8080
}

module.exports = { appConfig }