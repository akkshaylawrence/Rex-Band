var i=0;
document.getElementById("file3").addEventListener('click', addLand, false);
document.getElementById("file2").addEventListener('click', addLand, false);
document.getElementById("file1").addEventListener('click', addLand, false);
function addLand() {
   i+=1;
   if(i==3){
   document.getElementById("trbtn").classList.remove("disabled");
   document.getElementById("trbtn").style.display = "block";
   }
}