import exprress from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './routes/web';

// import conn from './configs/connectDb';
require('dotenv').config();

const app = exprress();
const port = process.env.PORT || 8080;

configViewEngine(app);
app.use(exprress.json());
app.use(exprress.urlencoded({urlencoded : true}))
var methodOverride = require("method-override");
app.use(methodOverride("_method"))
initWebRoute(app);

app.listen(port, () => {
    console.log(port);
})