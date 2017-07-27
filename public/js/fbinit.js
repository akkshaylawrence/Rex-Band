(function ($) {
	var config = {
		apiKey: "AIzaSyDmEcN3NqLcI3mMliJPUM-HUn3rSwyvVFs",
		authDomain: "rex-band.firebaseapp.com",
		databaseURL: "https://rex-band.firebaseio.com",
		projectId: "rex-band",
		storageBucket: "rex-band.appspot.com",
	};
	firebase.initializeApp(config);
})(jQuery);
firebase.auth().signInAnonymously();
var database = firebase.database();
var d;
if (document.location.href.match(/[^\/]+$/)[0] == "music.html") {
	database.ref('Data/Music').once('value').then(function (s) {
		d = JSON.stringify(s.val());
		music(d);
	}, function (error) {
		console.error(error);
	});
} else if (document.location.href.match(/[^\/]+$/)[0] == "tour.html") {
	database.ref('Data/Tour').once('value').then(function (s) {
		d = JSON.stringify(s.val())
		tour(d);
	}, function (error) {
		console.error(error);
	});
}
function music(d) {
	obj = JSON.parse(d);
	var fP;
	var i = 0;
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			fP = obj[key];
			console.log(key);
			var dt = document.createElement('div');
			var ct = document.getElementById("albumsv");
			dt.classList.add("alb");
			dt.classList.add("col");
			dt.classList.add("s12");
			dt.classList.add("m6");
			dt.classList.add("l3");
			dt.innerHTML =
				'<div class="card hoverable">\
            <div class="card-image waves-effect waves-block waves-light">\
               <a id="link' + i + '" target="_blank"><img id="albp' + i + '" class="activator"></a>\
            </div>\
            <div class="card-content">\
               <span id="albt' + i + '" class="card-title activator grey-text text-darken-4"></span>\
            </div>\
         </div>\
			';
			ct.appendChild(dt);
			document.getElementById("albt" + i).innerHTML = fP.albumname;
			document.getElementById("albp" + i).src = fP.albumart_dlink;
			i += 1;
		}
	}
}
function tour(d) {
	obj = JSON.parse(d);
	var fP;
	var i = 0;
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			fP = obj[key];
			var ct = document.getElementById("toursv");
			var dt = document.createElement('div');
			dt.classList.add("alb");
			dt.classList.add("col");
			dt.classList.add("s12");
			dt.classList.add("m6");
			dt.classList.add("l3");
			dt.innerHTML =
				'<div class="card hoverable">\
            <div class="card-image waves-effect waves-block waves-light">\
               <a target="_blank"><img id="tourp' + i + '" class="activator"></a>\
            </div>\
            <div class="card-content">\
               <span id="tourt' + i + '" class="card-title activator grey-text text-darken-4"></span>\
            </div>\
         </div>\
         ';
			ct.appendChild(dt);
			document.getElementById("tourt" + i).innerHTML = fP.tourname;
			document.getElementById("tourp" + i).src = fP.tourposter_dlink;
			i += 1;
		}
	}
}