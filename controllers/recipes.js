const express = require('express');
const router = express.Router();
let recipes = require('../models/Recipes');

const seededData = [
    {
                name: "Indian Muligatawny Soup",
                type: "soup",
                image: "https://thewanderlustkitchen.com/wp-content/uploads/2016/04/vegetarian-indian-mulligatawny-soup-3-1200.jpg", 
                cuisine: ["indian", "vegetarian"],
                mainIngredients: ["red lentils", "coconut milk", "curry spices"],
                recipeLink: "https://thewanderlustkitchen.com/indian-mulligatawny-soup/"
            }, {
                name: "Kale-Radicchio Salad with Farro",
                type: "salad",
                image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F03%2Fmain%2F1802w-kale-radicchio-salad-run-fast-eat-slow.jpg%3Fitok%3DGq3ClEJU&w=800&c=sc&poi=face&q=60", 
                cuisine: ["healthy", "vegetarian"],
                mainIngredients: ["kale", "radicchio", "farro"],
                recipeLink: "https://www.cookinglight.com/recipes/kale-radicchio-salad-run-fast-eat-slow"
            }, {
                name: "Spicy Pork Shoulder Congee",
                type: "entree",
                image: "https://www.foodandwine.com/thmb/4BemgvkPD1a7WkzgPLvNwnK-CN8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/201311-xl-spicy-pork-shoulder-congee-2000-ba90ae0462364b4182e8d6d85855ddeb.jpg", 
                cuisine: ["asian", "porridge"],
                mainIngredients: ["rice", "pork shoulder"],
                recipeLink: "https://www.foodandwine.com/recipes/spicy-pork-shoulder-congee"
            }, {
                name: "Stewed Chicken Tacos",
                type: "entree",
                image: "https://www.foodiecrush.com/wp-content/uploads/2013/04/Stewed-Chicken-Tacos-FoodieCrush.com-006.jpg", 
                cuisine: ["mexican", "tacos"],
                mainIngredients: ["chicken thighs", "new mexico chiles", "cumin"],
                recipeLink: "https://www.foodiecrush.com/stewed-chicken-tacos/"
            }, {
                name: "Black Beans",
                type: "side dish",
                image: "https://cookieandkate.com/images/2020/07/best-black-beans-recipe-2-2-550x824.jpg", 
                cuisine: ["mexican", "vegetarian"],
                mainIngredients: ["dry beans", "cilantro", "cumin"],
                recipeLink: "https://cookieandkate.com/best-black-beans-recipe/"
            }, {
                name: "Creamy Sesame Miso Ramen",
                type: "soup",
                image: "https://www.halfbakedharvest.com/wp-content/uploads/2020/02/30-Minute-Creamy-Sesame-Miso-Ramen-with-Crispy-Mushrooms-1-700x1050.jpg", 
                cuisine: ["ramen", "vegetarian"],
                mainIngredients: ["miso paste", "tahini", "noodles"],
                recipeLink: "https://www.halfbakedharvest.com/creamy-sesame-miso-ramen/"
            }, {
                name: "Chocolate Coconut Sorbet",
                type: "dessert",
                image: "http://4.bp.blogspot.com/-bF_Jsvhb5oU/TZXnwAmUE9I/AAAAAAAAEIY/E59qlFmd1_Q/s400/choccocosorbet.jpg", 
                cuisine: ["frozen desserts"],
                mainIngredients: ["chocolate", "coconut milk"],
                recipeLink: "http://pastrystudio.blogspot.com/2011/04/chocolate-coconut-sorbet.html" 
            }, {
                name: "Spinach Artichoke Dip",
                type: "appetizer",
                image: "https://static01.nyt.com/images/2019/01/26/dining/26COOKING-SPINACH-ARTICHOKE-DIP1/26COOKING-SPINACH-ARTICHOKE-DIP1-articleLarge-v2.jpg?w=1280&q=75", 
                cuisine: ["american classics"],
                mainIngredients: ["spinach", "artichokes", "cheese"],
                recipeLink: "https://cooking.nytimes.com/recipes/1018248-spinach-artichoke-dip?action=click&module=RecipeBox&pgType=recipebox-page&region=all&rank=12"
            }
]

router.get('/recipes', async (req, res, next) => {
    try {
        const myRecipes = await recipes.find({});
        console.log(recipes);
        res.json(myRecipes);
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/recipes/seed/', async (req, res, next) => {
    try{
        await recipes.deleteMany({});
        await recipes.insertMany(seededData);
        res.redirect('/recipes');
    } catch(err) {
        console.log(err);
        next();
    }
})

router.get('/recipes/:id', async (req, res, next) => {
    try {
        const myRecipe = await recipes.findById(req.params.id);
        res.json(myRecipe);
    } catch(err) {
        console.log(err);
        next();
    }
})


module.exports = router;