const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');
const config = require("./config/keys.js");
const ImageRouter = require("./routes/api-routes");
const PORT = process.env.PORT || 5000;

require("dotenv").config();

app.use(cors());

app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(bodyParser.json());

const db = process.env.mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch((err) => console.log(err));

app.use("/api-routes", ImageRouter);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.options('*', cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`API Server is up and Listening at - http://localhost:${PORT}`);
  });