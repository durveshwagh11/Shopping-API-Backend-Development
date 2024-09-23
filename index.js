const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/users")

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected"))
    .catch((err) => {
        console.log("Error connecting to DB:", err);
    });


app.get("/api/test", (req, res) => {
    console.log("test is successful");
    res.send("Test is successful");  // Send response to client
});

app.use("/api/users", userRoute)
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});
