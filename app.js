let express = require('express');
let bp = require('body-parser');
let route =require('./routes/commonRoutes');

let app = express();
app.engine('html', require('ejs').renderFile)
app.use(bp.urlencoded({ extended: true }));


app.use('/',`route`);

let port = 6090;
app.listen(port, () => {
    console.log(`***********Server listing port********* ${port}`)
});