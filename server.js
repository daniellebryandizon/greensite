const express = require('express');
const conenctDB = require('./config/db');
const app = express();

app.use(express.json({
    extended: false
}));

//routes
app.use('/user', require('./routes/User'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`);
});