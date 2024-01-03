const firebaseConfig = {
    apiKey: "AIzaSyCL8GJtvmgKojeSylrszDK-ssFMy7UFH5A",
    authDomain: "electo-c6727.firebaseapp.com",
    projectId: "electo-c6727",
    storageBucket: "electo-c6727.appspot.com",
    messagingSenderId: "681249564763",
    appId: "1:681249564763:web:de3761eaab38eb7026b77e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

// Set up our register function
function register() {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    // Validate input fields
    if (validate_email(email) == false) {
        alert('Email is wrong format')
        return
        // Don't continue running the code
    }
    if (validate_password(password) == false) {
        alert('Password has to be more than 6 Letters')
        return
    }

    if (validate_password(password) == false && validate_email(email) == false) {
        alert('Email is wrong Format, and password should be more than 6 characters')
        return
    }

    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser

            // Add this user to Firebase Database
            var database_ref = database.ref()

            // Create User data
            var user_data = {
                email: email,
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).set(user_data)

            // DOne
            alert('You have successfully created an account, You can log in')
        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}

// Set up our login function
function login() {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    // Validate input fields
    if (validate_email(email) == false) {
        alert('Email is wrong format')
        return
        // Don't continue running the code
    }
    if (validate_password(password) == false) {
        alert('Password has to be more than 6 Letters')
        return
    }


    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser

            // Add this user to Firebase Database
            var database_ref = database.ref()

            // Create User data
            var user_data = {
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).update(user_data)

            // DOne
            alert('User Logged In!!')
            window.location.href = 'index.html';

        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}




// Validate Functions
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        // Email is good
        return true
    } else {
        // Email is not good
        return false
    }
}

function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}