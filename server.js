const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const Data = require('./controllers/data')
const router = express.Router();
const cors = require('cors')
require ('./db/db')
require("@babel/register");
require('css-modules-require-hook')({
    generateScopedName: '[name]__[local]___[hash:base64:5]',
});
// require('babel-register')({
//     presets: ['es2015','react']
// });


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cors());
app.use('/api', router)


const MapContainer = require('./src/MapContainer/map')
app.use('/api/v1/map/', MapContainer);

const port =process.env.PORT || 3000
app.listen(port);