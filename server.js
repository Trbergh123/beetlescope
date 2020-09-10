// module imports
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');


const session = require('express-session');


// session data
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// placeholder ...................

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// create server
const app = express();
const PORT = process.env.PORT || 3001;

// server middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));
app.use(setUser);
// app.use('/projects', projectRouter);

// turn on routes
app.use(routes);


 
// connect to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on port ' + `${PORT}`));
});