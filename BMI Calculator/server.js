const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", (req, res) => {
    const { n1, n2 } = req.body
    const result = n1 / Math.pow(n2/100,2);

    res.send("Your BMI is " + result);
});

app.listen(3000, () => {

});