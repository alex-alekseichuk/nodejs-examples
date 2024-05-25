// Uncomment the code below to use Sequelize ORM
const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

// Uncomment the code below to use Mongoose ORM
// const mongoose = require('mongoose');


// Insert your model definition below
const Trades = sequelize.define('trade', {
    type: Sequelize.STRING,
    user_id: Sequelize.INTEGER,
    symbol: Sequelize.STRING,
    shares: Sequelize.INTEGER,
    price: Sequelize.INTEGER,
    timestamp: Sequelize.INTEGER,
}, {
    timestamps: false,
});

module.exports = Trades;
