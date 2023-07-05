const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require('dotenv').config()
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dbConn = require("./config/db.config");
import helmet from "helmet";
import axios from 'axios';

app.use(cors());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(helmet.xssFilter());

const server = http.createServer(app);

import indexRouter from "./routers/index.router";
import { axios_config } from "./config/axios.config";
const { connectDB } = require("./config/db.config");

const port = process.env.PORT;
const base_url = "http://localhost:" + port + "/"

connectDB()
app.use('/notification', indexRouter);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket: any) => {
  console.log(`socket`, socket.id);

  //test
  socket.on("send_message", async (data: any) => {

    let url = base_url + "notification/list"
    let config =  axios_config("GET" , url )
    let response :any = await axios(config);

    socket.broadcast.emit("recieve_message" ,config)
  });

  // operation start

  socket.on("new_merchant_reg_msg", async (data: any , authority:any) => {
    
    let url = base_url + "notification/create?authority="+authority
    let config =  axios_config("POST" , url , data )
    let response :any = await axios(config);
    socket.broadcast.emit("new_merchant_reg_rcv_msg" ,response.data)
  });

  socket.on("new_order", async (data: any , authority:any) => {
    
    let url = base_url + "notification/create-order?authority="+authority
    let config =  axios_config("POST" , url , data )
    let response :any = await axios(config);
    socket.broadcast.emit("new_merchant_reg_rcv_msg" ,response.data)
  });

  socket.on("merchant_varification_status", async (data: any , authority:any) => {
    
    let url = base_url + "notification/merchant_varification_status?authority="+authority
    let config =  axios_config("POST" , url , data )
    let response :any = await axios(config);
    socket.broadcast.emit("admin_notification" ,response.data)
    socket.broadcast.emit("merchant_notification" ,response.data)
  });

});

// Start the server

server.listen(port, () => {
  dbConn
  console.log("Server listening on port " + port);
});
