
// Initialize Firebase
    var config = {
        apiKey: "AIzaSyD81zyKZYOC4t37-1tsjg4IiSvmkMw2e-U",
		authDomain: "avellino-pulita.firebaseapp.com",
		databaseURL: "https://avellino-pulita.firebaseio.com",
		projectId: "avellino-pulita",
		storageBucket: "avellino-pulita.appspot.com",
		messagingSenderId: "479893718168",
		appId: "1:479893718168:web:c6597a383a4d999be9fced",
		measurementId: "G-J5JJ280NK0"
    };
    firebase.initializeApp(config); 
//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => { 
	e.preventDefault();
	//get user information 
	const email = loginForm['email'].value;
	const psw =  loginForm['psw'].value;
	firebase.auth().signInWithEmailAndPassword(email, psw).then( cred => {
		console.log("user-iN");
		location.href = '../priv/segnalazioni.html';
	}).catch(function(error) {
		var errorCode = error.code; 
		var errorMessage = error.message;
		alert(errorMessage);
	});
})