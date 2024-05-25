const express = require('express');
const tradesController = require('../controllers/trades');

const router = express.Router();

module.exports = router;

router.get('/', async function(req, res, next) {
    const filter = {}
    if (req.query.type) filter.type = req.query.type;
    if (Number(req.query.user_id)) filter.user_id = Number(req.query.user_id);
    res.json(await tradesController.listTrades(filter));
});

router.get('/:id', async function(req, res, next) {
    const trade = await tradesController.getTradeById(Number(req.params.id));
    if (!trade) return res.status(404).end('ID not found');
    res.json(trade);
});

router.post('/', async function(req, res, next) {
    const trade = await tradesController.createTrade(req.body);
    if (!trade) return res.status(400).end();
    res.status(201).json(trade);
});

router.all('/', (_, res) => res.status(405).end());
router.all('/:id', (_, res) => res.status(405).end());
