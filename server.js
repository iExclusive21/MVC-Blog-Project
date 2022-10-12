const express = require('express')
const app = express()
const port = 3002;


// const handlebars = require('express-handlebars')


// app.set('view engine', 'handlebars')
// app.engine('handlebars', handlebars({
//     layoutsDir: `${__dirname}/views/layouts`
// }))
// app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World1234 !')
});

app.listen(port,() => {
    console.log(`App listening to port ${port}`);
})

