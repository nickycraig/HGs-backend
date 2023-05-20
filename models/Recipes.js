const mongoose = require('mongoose');

const recipesSchema = new mongoose.Schema(
    {
        name: String,
        type: String,
        image: String,
        cuisine: Array,
        comments: String,
        recipeLink: String
    },
    {
        timestamps: true
    }
);

const Recipes = mongoose.model('Recipe', recipesSchema);

module.exports = Recipes;