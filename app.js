const express = require('express');
require('./src/db/repository');
const port = 3000;

const app = express();

app.use(express.json());

const UserRoutes = require('./src/resources/users/user-routes')
const OrderRoutes = require('./src/resources/orders/order-routes');

app.use('/users', UserRoutes);
app.use('/orders', OrderRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404)
    res.send("Resource not found")
});

app.use((next, req, res) => {
    res.status(500)
    res.send("Something went wrong!")
});

app.listen(port, () => console.log(`server listening to port ${port}`))

module.exports = app;
