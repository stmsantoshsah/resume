const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlPasrer: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("mongoDb connected successfully");
    })
    .catch((error) => {
        console.log("mongoDb connection error:", error);
    })
app.get('/', (req, resp) => {
    resp.send("Hello, MongoDb connected!");
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})