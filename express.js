require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");

const PORT = process.env.PORT || 3000;
const app = express();
const pool = new Pool({
  user: process.env.DATABASE_USER, //env dosyasındaki veriyi bu şekilde eşitliyoruz
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME
});

app.use(express.json());

app.get('/users', async(req,res) =>{
    console.log("Users Calisti!!!!!!!!!!!!!!!");
    res.status(200).json({message: "Data geldi"});
})

app.listen(PORT, () => {
  console.log("Sunucu Ayakta!!! PORT: ", PORT);
});
