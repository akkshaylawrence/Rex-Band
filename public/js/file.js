function fileDl(name) {
    var storage = firebase.storage();
    var storageRef = storage.ref("Lyrics/" + name + ".pdf");
    storageRef.getDownloadURL().then(function (url) {
        console.log(url);
        var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
        console.log(filename);
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function () {
            var a = document.createElement('a');
            a.href = window.URL.createObjectURL(xhr.response); // xhr.response is a blob
            a.download = filename; // Set the file name.
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            delete a;
        };
        xhr.open('GET', url);
        xhr.send();
    }).catch(function (error) {
        switch (error.code) {
            case 'storage/object_not_found':
                break;
            case 'storage/unauthorized':
                break;
        }
    });
}