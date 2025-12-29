const websocket = require("ws")
const port = 5000
const crypto = require("crypto")
const wss = new websocket.Server({ port: port })

const { randomUUID } = crypto

const clients = {}

wss.on("connection", ws => {
    const uuid = randomUUID()

    clients[uuid] = { id: uuid, name: "Default", }
})
