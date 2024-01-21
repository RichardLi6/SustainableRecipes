const axios = require('axios');
const fs = require('fs');

const apiEndpoint = 'https://www.themealdb.com/api/json/v1/1/search.php';

const fetchRecipesByLetter = async (letter) => {
    try {
        const response = await axios.get(apiEndpoint, {
            params: {
                f: letter,
            },
        });

        const meals = response.data.meals;

        if (meals) {
            // Save the fetched recipes to a file
            fs.appendFileSync('allRecipes.json', JSON.stringify(meals, null, 2), 'utf-8');
            console.log(`Fetched recipes for letter ${letter} and saved to allRecipes.json.`);
        }
    } catch (error) {
        console.error(`Error fetching recipes for letter ${letter}:`, error.message);
    }
};

const fetchAllRecipes = async () => {
    // Create an empty file
    fs.writeFileSync('newRecipes.json', '[]', 'utf-8');

    // Iterate over letters of the alphabet
    for (let letter of 'abcdefghijklmnopqrstuvwxyz') {
        await fetchRecipesByLetter(letter);
    }

    console.log('Fetched all recipes.');
};

fetchAllRecipes();

