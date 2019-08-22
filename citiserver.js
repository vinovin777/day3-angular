let express = require("express");
let cors = require("cors");
let data = require("./herodata.json")

let app = express();
app.use(cors());

app.get("/", function(req, res){
    res.send(JSON.stringify(data));
})

app.listen(2020);
console.log("server is now live on localhost:2020/data")
