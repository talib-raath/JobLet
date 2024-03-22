const express = require("express")
const app = express()

app.get("/api", (req, res) => {
    res.json({ users: ["userOne", "userTwo", "userthree"] })
})
    
app.listen(3001, () => console.log("Server is running on port 3001"))    
