const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        title: 'jungle book',
        description: 'chaddi pehan ke phool khila h',
    }
    res.json(obj);
})

module.exports = router;