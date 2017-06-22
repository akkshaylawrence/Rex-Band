// Create a reference to the file we want to download
var starsRef = storageRef.child('images/');
// Get the download URL
var a = document.getElementById('yourlinkId'); //or grab it by tagname etc
starsRef.getDownloadURL().then(function (url) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function (event) {
        var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
}).catch(function (error) {
    switch (error.code) {
        case 'storage/object_not_found':
            alert("FILE UNAVAILABLE!!");
            break;
    }
});