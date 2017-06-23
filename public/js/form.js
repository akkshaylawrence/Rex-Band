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
    userId = Math.floor((Math.random() * 1000000) + 1);
    if (lastname == null) {
        database.ref('Subscribers/' + userId).set({
            firstname: name.value,
            email: email.value,
            country: country.value,
            state: state.value,
            phone: phone.value
        });
    } else {
        database.ref('Feedback/' + userId).set({
            firstname: name.value,
            lastname: lastname.value,
            email: email.value,
            country: country.value,
            message: text.value
        });
        submit.classList.add("disabled");
        submit.innerHTML = "Submitted";
    }
}