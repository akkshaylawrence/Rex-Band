var i = 2;
$('.datepicker').pickadate({
	selectMonths: true,
	selectYears: 15
});
document.getElementById("fileb").addEventListener('click', addTour, false);
document.getElementById("addlink").addEventListener('mousedown', addLink, false);
function addTour() {
	document.getElementById("trbtn").classList.remove("disabled");
	document.getElementById("trbtn").style.display = "block";
}
function addLink() {
	var container = document.getElementById("ylist");
	var data = document.createElement('div');
	data.classList.add("row")
	data.innerHTML +=
		'<div class="col s1">\
            <i class="fa fa-youtube-play fa-2x"></i>\
         </div>\
         <div class="input-field col s10">\
            <input id="ytube' + i + '" type="text" class="validate">\
            <label data-error="Invalid Link!" for="ytube">YouTube Link</label>\
         </div>\
      ';
	container.appendChild(data);
	i += 1;
}
trbtn.addEventListener('click', function () {
	var patha = 'Data/Tour/' + tourname.value;
	database.ref(patha).set({
		date: tourdate.value,
		tourtext: tourtext.value,
		ticlink: ticlink.value
	});
	var pathl = 'Data/Latest/';
	database.ref(pathl).update({
		tourname: tourname.value,
		tourdate:tourdate.value
	});
	var filename = document.getElementById('tourname');
	var tour = tourname.value;
	var file = document.getElementById('fileb').files[0];
	var tourposter = firebase.storage().ref('Tour_Poster/' + tour);
	tourposter.put(file).then(function (snapshot) {
		var url = snapshot.downloadURL;
		database.ref('Tour/' + tour + '/').update({
			tourposter_dlink: url
		});
		database.ref('Latest/').update({
			tourposter_dlink: url
		});
	});
	var loc = document.getElementById('location').value;
	loc = loc.split(",");
	loclen = loc.length;
	for (j = 0, k = 0; j < loclen; j++, k++) {
		l = 'Location:' + k;
		var pathh = 'Tour/' + tourname.value + '/' + l + '/';
		database.ref(pathh).set({
			Location: loc[j]
		});
	}
});
