const route = require("express").Router()
const { getAllMessage ,addMessage } = require("../controller/message.controller")

route.post("/all",getAllMessage)
route.post("/",addMessage)

module.exports = route