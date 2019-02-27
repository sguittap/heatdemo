const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const Data = require('./controllers/data')
const router = express.Router();
const cors = require('cors')
require ('./db/db')


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cors());
app.use('/api', router)

//landing page
const MapContainer = require('./src/MapContainer/map')
app.use('/api/v1/map/', MapContainer);

const port =process.env.PORT || 3000
app.listen(port);