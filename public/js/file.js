function fileDl(name) {
    var storage = firebase.storage();
    var storageRef = storage.ref("Lyrics/" + name + ".pdf");
    storageRef.getDownloadURL().then(function (url) {
        console.log(url);
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function (event) {
            var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
    });
}