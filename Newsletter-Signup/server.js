const express = require("express");
const request = require("request");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

const apiKey = "0d8e0bb89fc13d4c759e3017f3eb70e1-us12";
const listId = "661c9dc897";


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {

    console.log(apiKey);
    console.log(123);

    var { email, password, confirmPassword } = req.body;

    const data = {
        email_address: email,
        status: "subscribed",
        merge_fields: {
            FNAME: "Jason",
            LNAME: "Chau"
        }
    };

    var jsonData = JSON.stringify(data);

    https.request(url, options, () => {

    });

});

app.listen(3000, () => {
    console.log("server is up and running on port 3000")
});