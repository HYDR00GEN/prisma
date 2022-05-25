import express from "express";
import "dotenv/config"
import router from "./router"

const server = express();

//letting server read json body post format
server.use(express.json())

server.use("/", express.static(__dirname+"/public"))

//givin responsab. router to manage "/"
server.use("/", router)











export default server