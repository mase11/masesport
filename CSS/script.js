Function login() {
 var email = document.getElementById("email").Value;
 var email = document.getElementById("pwss").Value;



firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
 // Handle Errors here.
 var errorCode = error.code;
 var errorMessage = error.message;
 // ...
});}