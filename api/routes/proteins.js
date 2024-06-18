const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

router.get('/', async (req, res) => {
    const apiKey = req.headers['key-api'];
    if (!apiKey) {
        return res.status(403).json({ error: "x-api-key header missing" });
    }

    const validApiKey = 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf';
    if (apiKey !== validApiKey) {
        return res.status(403).json({ error: 'invalid api key' });
    }

    try{
        const proteins = await loadPostsCollection();
        res.send(await proteins.find({}).toArray());
        res.status(201);
    } catch{
        res.status(403);
    }
})

async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://root:root@db-express.4fwcimy.mongodb.net/?retryWrites=true&w=majority&appName=DB-Express'
    );
    return client.db('ramenGo').collection('Proteins')
}

module.exports = router;