const mqtt = require("mqtt");
const config = require("../config");
let client = mqtt.connect(`mqtt://localhost:${config.mqttPort}`)

client.on('connect', (e) => {
    console.log("success connect mqtt server");
})

module.exports = {
    client
};