const express = require("express");
const cors = require("cors");
//const usuariosRutas = require("./rutas/rutasUsuarios");
const productosRutas = require("./rutas/rutasProductos");
const usuariosRutas=require("./rutas/rutasUsuarios");
const ventasRutas=require("./rutas/rutasVentas");

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use("/",productosRutas);
app.use("/", usuariosRutas);
app.use("/", ventasRutas);

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Servidor en http://localhost:"+port)
});