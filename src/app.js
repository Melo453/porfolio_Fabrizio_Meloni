const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes/customer'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/stylesheets'));
app.use('/js', express.static(__dirname + '/javascripts'));
app.use('/img', express.static(__dirname + '/img'));


console.log(__dirname);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.listen(3000, () =>{
    console.log('server abierto en puerto 3000');
});