const express = require("express")
const app = express()

const PORT = process.env.PORT || 8000
app.get("/", (req, res) => {
    return res.json({"message": "Hey this is a container with node project"})
})

app.listen(PORT, () => console.log(`Server started on port:${PORT || 8000}`))