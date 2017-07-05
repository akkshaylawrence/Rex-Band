function saveForm() {
    var name = document.getElementById('names').value;
    var email = document.getElementById('emails').value;
    var country = document.getElementById('countrys').value;
    var state = document.getElementById('states').value;
    var phone = document.getElementById('phones').value;
    var subs = document.getElementById('subs');
    var subbtn = document.getElementById('subbtn');
    if (email == "") {
        document.getElementById('emails').focus();
        document.getElementById('emails').classList.add('invalid');
    } else {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                var uid = user.uid;
                database.ref('Subscribers/' + uid).set({
                    Name: name,
                    Email: email,
                    Country: country,
                    State: state,
                    Phone: phone
                });
                subs.classList.add("disabled");
                subs.innerHTML = "Submitted";
                Materialize.toast('We will keep in touch!', 4000);
                subbtn.classList.remove('red')
                subbtn.innerHTML = "Subscribed";
                $('#modal1').modal('close');
            }
        });
    }
}
function saveContact() {
    var firstname = document.getElementById('first_name').value;
    var lastname = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var country = document.getElementById('country').value;
    var text = document.getElementById('textarea1').value;
    var submit = document.getElementById('submit');
    if (email === "" || text.length < 1) {
        if (email==="" || email.length < 11) {
            document.getElementById('email').focus();
            document.getElementById('email').classList.add('invalid');
        }
        if (text.length < 1) {
            document.getElementById('textarea1').focus();
            document.getElementById('textarea1').classList.add('invalid');
        }
    } else {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                var uid = user.uid;
                database.ref('Feedback/' + uid).set({
                    Firstname: firstname,
                    Lastname: lastname,
                    Email: email,
                    Country: country,
                    Message: text
                });
                submit.classList.add("disabled");
                submit.innerHTML = "Submitted";
                document.getElementById("clear").reset();
                Materialize.toast('We will get back to you soon!', 4000);
            }
        });
    }
}