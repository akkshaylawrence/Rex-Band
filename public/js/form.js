function saveForm() {
    var database = firebase.database();
    var name = document.getElementById('name');
    var lastname = document.getElementById('last_name');
    var email = document.getElementById('email');
    var country = document.getElementById('country');
    var text = document.getElementById('textarea1');
    var state = document.getElementById('state');
    var phone = document.getElementById('phone');
    var submit = document.getElementById('submit');
    if (lastname == null) {
        var userID = phone.value;
        database.ref('Subscribers/' + userID).set({
            firstname: name.value,
            email: email.value,
            country: country.value,
            state: state.value,
            phone: phone.value
        });
        Materialize.toast('We will keep in touch!', 4000)
    } else {
        var userIDf = name.value + lastname.value;
        database.ref('Feedback/' + userIDf).set({
            firstname: name.value,
            lastname: lastname.value,
            email: email.value,
            country: country.value,
            message: text.value
        });
        submit.classList.add("disabled");
        submit.innerHTML = "Submitted";
        Materialize.toast('We will get back to you soon!', 4000)
    }
}