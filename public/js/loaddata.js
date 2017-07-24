var childData, childKey;
console.log(document.location.href.match(/[^\/]+$/)[0]);
if (document.location.href.match(/[^\/]+$/)[0] == "index.html") {
   database.ref('Landing_Page_Images').on('child_added', function (child) {
      childKey = child.key;
      childData = child.val();
      document.getElementById("indfull").src = childData;
      document.getElementById("indfull1").src = childData;
   });
} else if (document.location.href.match(/[^\/]+$/)[0] == "music.html") {
   database.ref('Latest').on('child_added', function (child) {
      childKey = child.key;
      childData = child.val();
      if (childKey == 'albumart_dlink') {
         document.getElementById("nalbumart").src = childData;
         document.getElementById("nalbumart1").src = childData;
      } else if (childKey == 'albumname') {
         document.getElementById("nalbumname").innerHTML = childData;
         document.getElementById("nalbumname1").innerHTML = childData;
      }
   });
}else if(document.location.href.match(/[^\/]+$/)[0] == "tour.html"){
   database.ref('Latest').on('child_added', function (child) {
      childKey = child.key;
      childData = child.val();
      if (childKey == 'tourposter_dlink') {
         document.getElementById("tourp").src = childData;
         document.getElementById("tourp1").src = childData;
      } else if (childKey == 'albumname') {
         document.getElementById("tourname").innerHTML = childData;
         document.getElementById("tourname1").innerHTML = childData;
      }
   });
}