const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://root:root@db-express.4fwcimy.mongodb.net/?retryWrites=true&w=majority&appName=DB-Express';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Conectado ao MongoDB');
});

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Routers
const broths = require('./routes/broths');
app.use('/api/broths', broths);

const proteins = require('./routes/proteins');
app.use('/api/proteins', proteins);

const orders = require('./routes/orders');
app.use('/api/orders', orders);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});