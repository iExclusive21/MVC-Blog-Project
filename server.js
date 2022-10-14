const express = require('express')
const app = express()
const port = 3002;

app.use(express.static('public'));

const handlebars = require("express-handlebars");


app.engine('handlebars', handlebars.engine({
    layoutsDir: `${__dirname}/views/layouts`
}));
app.set('view engine', 'handlebars');
// app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('main', {layout: 'index' });
});

app.listen(port,() => {
    console.log(`App listening to port ${port}`);
})

