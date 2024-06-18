const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
    const apiKey = req.headers['key-api'];
    const {brothId,  proteinId} = req.body;
    const idsOrder = { brothId,  proteinId };

    if (!apiKey) {
        return res.status(403).json({ error: "x-api-key header missing" });
    }

    const validApiKey = 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf';
    if (apiKey !== validApiKey) {
        return res.status(403).json({ error: 'invalid api key' });
    }
    
    if(!brothId || !proteinId){
        return res.status(400).json({ error:  "both brothId and proteinId are required" })
    }
    try{
        const broths = await loadPostsBroths();
        const brothSelected = await broths.findOne({id: idsOrder.brothId })
        const proteins = await loadPostsProteins();
        const proteinSelected = await proteins.findOne({id: idsOrder.proteinId })

        const newOrder = {
            orderId: await generateOrderId(validApiKey),
            description: `${brothSelected.name} and ${proteinSelected.name} Ramen`,
            image: setImageOrderByProteinName(proteinSelected.name)
        }

        res.send(newOrder);
        return res.status(201);
    } catch(error){
        return res.status(500).json({ error: "could not place order" });
    }
})

async function generateOrderId(apiKey) {
    try {
        const response = await axios.post('https://api.tech.redventures.com.br/orders/generate-id', {}, {
            headers: {
                'x-api-key': apiKey
            }
        });
        return response.data.orderId;
    } catch (error) {
        throw new Error('Failed to generate orderId: ' + error.response.data.message);
    }
}

function setImageOrderByProteinName(proteinSelected){
    switch(proteinSelected){
        case 'Chasu':
            return "/public/images/ProteinChasu.png";
        case 'Yasai Vegetarian':
            return "/public/images/ProteinYasaiVegetarian.png";
        case 'Karaague':
            return "/public/images/ProteinKaraague.png";
        default: '';
    }
}

async function loadPostsBroths(){
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://root:root@db-express.4fwcimy.mongodb.net/?retryWrites=true&w=majority&appName=DB-Express'
    );
    return client.db('ramenGo').collection('Broths')
}

async function loadPostsProteins(){
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://root:root@db-express.4fwcimy.mongodb.net/?retryWrites=true&w=majority&appName=DB-Express'
    );
    return client.db('ramenGo').collection('Proteins')
}


module.exports = router;