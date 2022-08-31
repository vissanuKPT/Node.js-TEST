const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const products = require("./data/products.json");
const productRouter = express.Router();

const app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine", "ejs")

productRouter.route("/").get((req,res) =>{
    res.render("products",
        products,
    );
});

productRouter.route("/1").get((req,res) =>{
    res.send("HI Go Go 1");
});


app.use("/products",productRouter)

app.get("/", (req,res) => {

    res.render('index',{username: 'VISSANU945', customers: ["KK","TT","PP"]});

})

app.listen(PORT, ()=>{
    debug("Listening on port" + chalk.blue(" : " + PORT));

})