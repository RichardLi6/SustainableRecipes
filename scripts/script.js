//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBTplFdftNT3SVRcEbq009SW8RvgPbvPQw",
    authDomain: "sustainablerecipes-50334.firebaseapp.com",
    projectId: "sustainablerecipes-50334",
    storageBucket: "sustainablerecipes-50334.appspot.com",
    messagingSenderId: "156175240083",
    appId: "1:156175240083:web:7d50d630707471154c7666"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
// const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const admin = require('firebase-admin'); // Use 'admin' for server-side operations
const axios = require('axios');

// Initialize Firebase with your project config
const serviceAccount = require('./firebaseAPI_SustainableRecipes.js');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://console.firebase.google.com/project/sustainablerecipes-50334/firestore/data',
});

// Fetch data from the API
const fetchData = async () => {
    try {
        const apiKey = 'a7306ded38f84fd38c6c71e702b79cd4'; // Replace with your actual API key

        const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
            params: {
                apiKey: apiKey,
            },
        });

        const data = response.data;

        const db = admin.firestore(); // Use 'admin.firestore()' for server-side Firestore operations
        const collectionRef = db.collection('recipe');

        data.forEach(item => {
            collectionRef.add(item);
        });

        console.log('Data imported successfully.');
    } catch (error) {
        console.error('Error importing data:', error);
    }
};

fetchData();
