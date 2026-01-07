
import express from "express"

const app = express();
app.get( "/", ( req, res) => {
  res.send("hallo friend").status(201)
})

const port = process.env.PORT || 3000;
