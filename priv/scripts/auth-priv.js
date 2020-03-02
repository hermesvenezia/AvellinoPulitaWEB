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
	var database = firebase.firestore();
	database.settings({ timestampsInSnapshots: true });

//listen for auth status change
firebase.auth().onAuthStateChanged(user => { 
	if(!user){
		location.href = '../index.html';
	}
	console.log(user);
});

//logout 

const logOut = document.querySelector('#logOut');
logOut.addEventListener('click', (e) => {
	e.preventDefault();
	firebase.auth().signOut();
});

document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});