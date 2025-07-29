const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoute = require('./routes/bfhlRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/bfhl', bfhlRoute); // Route: /bfhl

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});