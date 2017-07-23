function addRow() {
	var i, j;
	document.getElementById("albtn").classList.remove("disabled");
	document.getElementById("albtn").style.display = "block";
	var number = document.getElementById('nosong').value;
	number = parseInt(number);
	var container = document.getElementById("list");
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}
	for (i = 0; i < number; i++) {
		j = i + 1;
		container.innerHTML += '<div class="row song">\
        <div class="divider"></div>\
   <div class="input-field col.s12">\
      <input type="text" id="song' + j + '">\
      <label for="song' + j + '">Enter song name</label>\
   </div>\
   <div class="input-field col s12">\
      <input type="text" id="songY' + j + '">\
      <label for="songY' + j + '">Enter YouTube link</label>\
   </div>\
   <div class="input-field col s12">\
      <div class="file-field input-field">\
         <div class="btn">\
            <span>Browse</span>\
            <input type="file" id="file' + j + '"></div>\
         <div class="file-path-wrapper">\
            <input type="text" id="filename1" placeholder="Lyrics Files" class="file-path validate">\
         </div>\
      </div>\
   </div>\
   <div class="col s12">\
      <div class="file-field input-field">\
         <div class="btn">\
            <span>Browse</span>\
            <input type="file" id="file1' + j + '">\
         </div>\
         <div class="file-path-wrapper">\
            <input type="text" id="filename11" placeholder="Chord Files" class="file-path validate">\
         </div>\
      </div>\
   </div>\
</div>\
';
	}
	return;
}
albtn.addEventListener('click', function () {
	var i, j;
	var patha = 'Music/' + albumname.value;
	database.ref(patha).set({
		albumwriteup: albumtext.value,
		youtubelink: ytube.value,
		ituneslink: itunes.value,
		soundcloudlink: soundc.value
	});
	var filename = document.getElementById('albumname');
	var alb = albumname.value;
	var file = document.getElementById('fileb').files[0];
	var albumart = firebase.storage().ref('Albumart/' + alb);
	var task = albumart.put(file).then(function (snapshot) {
		var url = snapshot.downloadURL;
		database.ref('Music/' + alb + '/').update({
			albumart_dlink: url
		})
	});
	var no = document.getElementById('nosong').value;
	no = parseInt(no);
	for (i = 1; i <= no; i++) {
		s = 'song' + i;
		var s = document.getElementById(s).value;
		var pathh = 'Music/' + albumname.value + '/Songs/' + s;
		var youtubelink = 'songY' + i;
		youtubelink = document.getElementById(youtubelink).value;
		database.ref(pathh).set({
			Youtube: youtubelink
		})
	}
	for (i = 1; i <= no; i++) {
		var fileid = "file" + i;
		var songl = "song" + i;
		var songl = document.getElementById(songl).value;
		var lyrfile = document.getElementById(fileid).files[0];
		var lyrics = firebase.storage().ref('Lyrics/' + songl);
		var task = lyrics.put(lyrfile);
	}
	for (i = 1; i <= no; i++) {
		var fileid = "file1" + i;
		var songc = "song" + i;
		var songc = document.getElementById(songc).value;
		var chordfile = document.getElementById(fileid).files[0];
		var chords = firebase.storage().ref('Chords/' + songc);
		var task = chords.put(chordfile);
	}
});