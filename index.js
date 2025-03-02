const express = require('express');
const path = require('path');
const exphbs=require('express-handlebars');
const app = express();
const port = 3001;

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));  // Correct usage

app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "public")));
app.use('/', require('./routes/blog.js')); // Fix: Use relative path without path.join

app.listen(port, () => {
    console.log(`Blog app listening at http://localhost:${port}`);
});
