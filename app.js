const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hello World!.");
})

app.get("/new", function(req, res){
    res.send("새로 배포된 페이지입니다.");
})

app.listen(process.env.PORT || 5000);

module.exports = app;
