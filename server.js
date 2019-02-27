const express = require('express');
const app = express();
//MapContainer from './MapContainer/map';

require ('./db/db')


//landing page
//app.use('/api/v1/heatmap/', MapContainer);

const port =process.env.PORT || 3000
app.listen(port);