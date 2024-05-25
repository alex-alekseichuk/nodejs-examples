const Trades = require('../models/trades');

const types = ['buy', 'sell'];

async function listTrades(where) {
    return await Trades.findAll({where});
}

async function getTradeById(id) {
    return await Trades.findByPk(id);
}

async function createTrade(tradeData) {
    if (types.indexOf(tradeData.type) === -1) return;
    if (tradeData.shares < 1 || tradeData.shares > 100) return;
    return Trades.create(tradeData)
}

module.exports = {
    listTrades,
    getTradeById,
    createTrade,
}
