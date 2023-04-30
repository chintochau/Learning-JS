const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/")
});

app.post("/", (req, res) => {
    const apiKey = "fc22a1855584c6c5ced5fe55780e6b4c"
    const city = req.body.cityName
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    https.get(url, (response) => {
        response.on("data", (data) => {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const description = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            res.write('<div><img src="https://openweathermap.org/img/wn/' + icon + '@2x.png"/>')
            res.write(`<p>The weather of ${city} is currently ${description}.</p>`)
            res.write(`<h1>The Temperature in ${city} is ${temp} degrees Celcius </h1>`)
            res.write('</div>')
            res.send();
        })

    })
})

app.listen(3000, () => {
    console.log("server running on port 3000")
})