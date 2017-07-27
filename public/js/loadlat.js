var cD, cK;
if (document.location.href.match(/[^\/]+$/)[0] == "index.html") {
   database.ref('Data/Landing_Page_Images').on('child_added', function (c) {
      cK = c.key;
      cD = c.val();
      document.getElementById("indfull").src = cD;
      document.getElementById("indfull1").src = cD;
   });
} else if (document.location.href.match(/[^\/]+$/)[0] == "music.html") {
   database.ref('Data/Latest').on('child_added', function (c) {
      cK = c.key;
      cD = c.val();
      if (cK == 'albumart_dlink') {
         document.getElementById("nalbumart").src = cD;
         document.getElementById("nalbumart1").src = cD;
      } else if (cK == 'albumname') {
         document.getElementById("nalbumname").innerHTML = cD;
         document.getElementById("nalbumname1").innerHTML = cD;
      }
   });
} else if (document.location.href.match(/[^\/]+$/)[0] == "tour.html") {
   database.ref('Data/Latest').on('child_added', function (c) {
      cK = c.key;
      cD = c.val();
      if (cK == 'tourposter_dlink') {
         document.getElementById("tourp").src = cD;
         document.getElementById("tourp1").src = cD;
      } else if (cK == 'tourname') {
         document.getElementById("tourname").innerHTML = cD;
         document.getElementById("tourname1").innerHTML = cD;
      } else if (cK == 'tourdate') {
         document.getElementById("tourdate").innerHTML = 'Starts ' + cD;
      }
   });
}