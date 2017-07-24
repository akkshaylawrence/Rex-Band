var i = 0;
document.getElementById("file3").addEventListener('click', addLand, false);
document.getElementById("file2").addEventListener('click', addLand, false);
document.getElementById("file1").addEventListener('click', addLand, false);
function addLand() {
	i += 1;
	if (i == 3) { //TODO - Change to 3 after comlpeting implementation.
		document.getElementById("trbtn").classList.remove("disabled");
		document.getElementById("trbtn").style.display = "block";
	}
}
landbtn.addEventListener('click', function () {
	//Image1
	var file = document.getElementById('file1').files[0];
	var image1 = firebase.storage().ref('Landing_Page/image1'); // Create a reference to uploaded file
	image1.put(file).then(function (snapshot) {
		var url = snapshot.downloadURL;
		database.ref('Landing_Page_Images/').update({
			image1_link: url // adding download url to db Home_Page/image_link : "https:/www.."
		})
	})
	Image2
	var file = document.getElementById('file2').files[0];
	filename2 = file.name;
	var image2 = firebase.storage().ref('Landing_Page/image2'); // Create a reference to uploaded file
	image2.put(file).then(function (snapshot) {
	   var url = snapshot.downloadURL;
	   database.ref('Landing_Page_Images/').update({
	      image2_link: url // adding download url to db Home_Page/image_link : "https:/www.."
	   })
	})
	//Image3
	var file = document.getElementById('file3').files[0];
	filename3 = file.name;
	var image3 = firebase.storage().ref('Landing_Page/image3'); // Create a reference to uploaded file
	image3.put(file).then(function (snapshot) {
	   var url = snapshot.downloadURL;
	   database.ref('Landing_Page_Images').update({
	      image3_link: url // adding download url to db Home_Page/image_link : "https:/www.."
	   })
	})
});