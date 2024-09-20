import express from "express";

const app = express();

// health check
app.get("/health", (req, res) => {
    res.status(200).send({
        message: "Application is running fine",
        timestamp: Date.now()
    });
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})