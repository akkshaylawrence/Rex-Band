window.addEventListener("keydown", function (event) {
	if (event.defaultPrevented) {
		return;
	}
	switch (event.key) {
		case "Enter":
			logIn();
			break;
		case "":
			firebase.onAuthStateChanged(function (user) {
				if (user) {
					window.location = 'admin.html';
				}
			});
	}
});
function logIn() {
	var password = document.getElementById('password').value;
	var email = document.getElementById("email").value;
	if (password.length < 5) {
		document.getElementById("password").focus();
		document.getElementById('password').classList.add("invalid");
		return;
	}
	document.getElementById('login').innerHTML = "LOGGING YOU IN";
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
		console.log(error.message);
		document.getElementById("password").focus();
		document.getElementById('password').classList.add("invalid");
		document.getElementById('login').innerHTML = "LOGIN";
	});
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			window.location = 'admin.html';
		}
	});
}
function logOut() {
	firebase.auth().signOut().then(function () {
		window.location = 'admin-login.html'
		document.getElementById("email").focus();
	}).catch(function (error) {
		console.log(error.message);
	});
}