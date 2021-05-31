const express = require("express");
const mongoose = require("mongoose");
const app = express();
//const http = require("http").createServer(app);
//const io = require("socket.io")(http);
const PORT = process.env.PORT || 5000;
const path = require("path");
const cors = require("cors");
