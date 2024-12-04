const express = require('express');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/orders');
require('./cron/statusUpdater'); // Start the CRON job

const app = express();
app.use(bodyParser.json());

app.use('/menu', menuRoutes);
app.use('/orders', orderRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
