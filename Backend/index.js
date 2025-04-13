
const express = require("express");
const App = express();
App.use(express.json())

App.post("/singup", async function(req, res) {
    const email =  req.body.email
    const password = req.body.password
})


App.listen(3000);