const express = require("express")
const mongoose = require("mongoose")
const app = express()
const PORT = process.env.PORT || 5000
require("dotenv").config()

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("connected to database"))
.catch(() => console.log("not connected"))

app.use(express.json())
app.use("/exercise", require("./routes/exercise"))
app.use("/record", require("./routes/record"))
app.listen(PORT, () => console.log(`listening on port: ${PORT}`))