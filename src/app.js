const express = require('express');
const { Server } = require('http');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('port', process.env.PORT || 3000);

app.use(require('./routes/customer'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/stylesheets'));
app.use('/js', express.static(__dirname + '/javascripts'));
app.use('/img', express.static(__dirname + '/img'));


console.log(__dirname);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);


app.listen(app.get('port'), () => {
    console.log(`server en puerto ${app.get('port')}`);
});