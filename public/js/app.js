// Initialize Firebase
var config = {
    apiKey: "AIzaSyDmEcN3NqLcI3mMliJPUM-HUn3rSwyvVFs",
    authDomain: "rex-band.firebaseapp.com",
    databaseURL: "https://rex-band.firebaseio.com",
    projectId: "rex-band",
    storageBucket: "rex-band.appspot.com"
};
firebase.initializeApp(config);

var ref = firebase.database().ref('players');

ref.on('value', function (snapshot) {
    console.log(snapshot.val());
});
