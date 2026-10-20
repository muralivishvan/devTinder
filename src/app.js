const express = require('express');

const app = express();


app.use("/home", (req, res) => {
    res.send("This is the home route");
});

app.use("/dashboard", (req, res) => {
    res.send("This is the dashboard route");
})

app.use("/test", (req, res) => {
    res.send("This is a test route");

})
app.use((req, res) => {
    res.send("Hello World!");

})



app.listen(7777, () => {
    console.log("Server is running on port 7777");
});