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