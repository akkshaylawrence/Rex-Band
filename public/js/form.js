function saveForm() {
    var database = firebase.database();
    var firstname = document.getElementById('first_name').value;
    var lastname = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var country = document.getElementById('country').value;
    var text = document.getElementById('textarea1').value;
    var sub = document.getElementById('filled-in-box').value;
    userId = Math.floor((Math.random() * 1000000) + 1);
    database.ref('Feedback/' + userId).set({
        firstname: firstname,
        lastname: lastname,
        email: email,
        country: country,
        message: text
    });
    if (sub == 'on') {
        database.ref('Subscribers/' + userId).set({
            email: email
        });
    }
}