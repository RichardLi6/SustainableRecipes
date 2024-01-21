//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton() {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            //if the pointer to "user" object is not null, then someone is logged in
            // User is signed in.
            // Load the navbar for logged in users
            console.log($('#navbarPlaceholder').load("../text/nav_after.html"));
        } else {
            // No user is signed in.
            console.log($('#navbarPlaceholder').load('../text/nav_before.html'));
        }
    });
}
loadSkeleton(); //invoke the function