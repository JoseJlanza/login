//Modify the login app to register a new user. Test that a new user can register, and login on the same page without reloading the page. Check to make sure that the username is not already taken and that the password is at least 8 characters long.

var objPeople = [
	{
		username: "Jose",
		password:"password21"
	},
	{
		username: "Amani",
		password: "password14"
	},
	{
		username: "Nicole",
		password: "password23"
	}
 ]

 //login functionality

 function getInfo() {
 	//retrieve data input from the form
 	var username = document.getElementById("username").value
 	var password = document.getElementById("password").value
 	//loop through all the user objects and confirm if the username and passwords are correct
 	for(i = 0; i < objPeople.length; i++) {
 		if(username == objPeople[i].username && password == objPeople[i].password) {
 		// greet new user
 		alert("Welcome "+ username)
 		return
 	}
 }
 	// error if username and password do not match
 	console.log("incorrect username of password")
}

	//register new user functionality

	function registerUser() {
		var registerUser = document.getElementById("newUsername").value
		var registerPassword = document.getElementById("newPassword").value
		var newUser = {
			username: registerUser,
			password: registerPassword
		}
		//checks to make sure the username is not already taken, stops the function if it is.
		for(i = 0; i < objPeople.length; i ++) {
			if(registerUser == objPeople[i].username) {
				alert("that username is already in use")
				return
			}	else if(registerPassword.length < 8) {
				alert("That password is too short")
				return
			}
		}

	//pushes the new user into the objPeople array as a new object at the end

	objPeople.push(newUser)
	//check objPeople to confirm it was added
	console.log(objPeople)
	//greet new user
	alert("Welcome "  + newUser.username)
 }