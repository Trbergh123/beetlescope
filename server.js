// module imports
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');


// create server
const app = express();
const PORT = process.env.PORT || 3001;


// session data
// placeholder ..................


// server middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// turn on routes
app.use(routes);


// connect to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on port ' + `${PORT}`));
});