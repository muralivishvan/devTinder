const express = require('express');

const app = express();


app.use("/user", (req, res) => {
    res.send("This is a default route for the user page");
})

// GET request for the user page 

app.get("/user", (req, res) => {
    res.send({
        firstName: "Murali",
        lastName: "Vishwan"
    })

});

// POST request for the user page
app.post("/user", (req, res) => {
    res.send("This is a post request for the user page");

});

//PUT request for the user page
app.put("/user", (req, res) => {
    res.send("This is a put request for the user page");

});

// PATCH request for the user page
app.patch("/user", (req, res) => {
    res.send("This is a patch request for the user page");
});

//DELETE request for the user page
app.delete("/user", (req, res) => {
    res.send("This is a delete request for the user page");
});





app.listen(7777, () => {
    console.log("Server is running on port 7777");
});