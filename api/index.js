const express = require('express');
const routes = require('./routes');

const app = express();

routes(app);

const port = 3000;
app.listen(port, () => console.log(`Server is running in port ${port}`));

module.exports = app