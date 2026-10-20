const express = require('express');

const app = express();



// GET request for the user page 

app.get("/user/:userID/:name/:password", (req, res) => {
    console.log(req.params)
    res.send({
        firstName: "Murali",
        lastName: "Vishwan"
    })

});




app.listen(7777, () => {
    console.log("Server is running on port 7777");
});