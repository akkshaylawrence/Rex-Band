function filterTable(){var e,t,a,l,n,o;for(e=document.getElementById("autocomplete-input1"),t=e.value.toUpperCase(),a=document.getElementById("sTable"),l=a.getElementsByTagName("tr"),o=0;o<l.length;o++)n=l[o].getElementsByTagName("td")[0],n&&(n.innerHTML.toUpperCase().indexOf(t)>-1?l[o].style.display="":l[o].style.display="none")}!function(e){var t={apiKey:"AIzaSyDmEcN3NqLcI3mMliJPUM-HUn3rSwyvVFs",authDomain:"rex-band.firebaseapp.com",databaseURL:"https://rex-band.firebaseio.com",projectId:"rex-band",storageBucket:"rex-band.appspot.com"};firebase.initializeApp(t),e(document).ready(function(){e(".button-collapse").sideNav({menuWidth:200,edge:"left",closeOnClick:!0,draggable:!0}),e(".modal").modal(),e(".parallax").parallax(),e("select").material_select(),e(".scrollspy").scrollSpy({scrollOffset:60}),e("table#sTable tr").click(function(){var t=e(this).find("td:first").text();download(t,"Lyrics/")})})}(jQuery),$("#autocomplete-input").keyup(function(){var e=new Array,t=this.value.toLowerCase();e=t.split(" ");var a=e.length;$(".alb").each(function(){for(var t=$(this),l=t.find("span").text().toLowerCase(),n=0,o=0;a>o;o++)l.indexOf(e[o])<0&&(t.hide(),n=1);0==n&&t.show()})});