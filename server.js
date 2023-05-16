require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 2000;
const recipeController = require('./controllers/recipes');

const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
const{Recipes} = require('./models')

app.get('/', (req, res) => {
    res.send('Greetings earthlings');
})

app.use('', recipeController);

app.get('/*', (req, res) => {
    res.json({comment: "This is a bad URL"});
})

app.listen(PORT, () => {
    console.log(`Server is listening to PORT ${PORT}`)
})