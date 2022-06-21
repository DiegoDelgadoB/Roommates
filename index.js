const express = require('express');
const app = express();
const fs = require('fs');
const { getUsers } = require("./agregar.js");

app.listen(3000, () => console.log("Servidor activo en http://localhost:3000"));

app.use(express.json());

