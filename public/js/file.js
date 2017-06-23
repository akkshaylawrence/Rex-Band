function download(name) {
    var storage = firebase.storage();
    var storageRef = storage.ref("Lyrics/" + name + ".pdf");
    storageRef.getDownloadURL().then(function (url) {
        console.log(url);
        var url_dec = decodeURIComponent(url);
        console.log(url_dec);
        var filename = url_dec.substring(url.lastIndexOf("/") + 1).split("?")[0];
        len = filename.length;
        filename = filename.slice(7, len);
        alert(filename);
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function () {
            var a = document.createElement('a');
            a.href = window.URL.createObjectURL(xhr.response);
            a.download = filename;
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