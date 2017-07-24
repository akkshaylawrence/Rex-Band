var i = 0;
// document.getElementById("file3").addEventListener('click', addLand, false);
// document.getElementById("file2").addEventListener('click', addLand, false);
document.getElementById("file1").addEventListener('click', addLand, false);
function addLand() {
	i += 1;
	if (i >= 1) {
		document.getElementById("landbtn").classList.remove("disabled");
		document.getElementById("landbtn").style.display = "block";
	}
}
landbtn.addEventListener('click', function () {
	var file = document.getElementById('file1').files[0];
	var image1 = firebase.storage().ref('Landing_Page/image1');
	image1.put(file).then(function (snapshot) {
		var url = snapshot.downloadURL;
		database.ref('Landing_Page_Images/').update({
			image1_link: url
		})
	})
	// var file = document.getElementById('file2').files[0];
	// filename2 = file.name;
	// var image2 = firebase.storage().ref('Landing_Page/image2');
	// image2.put(file).then(function (snapshot) {
	//    var url = snapshot.downloadURL;
	//    database.ref('Landing_Page_Images/').update({
	//       image2_link: url
	//    })
	// })
	// var file = document.getElementById('file3').files[0];
	// filename3 = file.name;
	// var image3 = firebase.storage().ref('Landing_Page/image3');
	// image3.put(file).then(function (snapshot) {
	//    var url = snapshot.downloadURL;
	//    database.ref('Landing_Page_Images').update({
	//       image3_link: url
	//    })
	// })
});