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
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
