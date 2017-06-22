(function ($) {
    var config = {
    apiKey: "AIzaSyDmEcN3NqLcI3mMliJPUM-HUn3rSwyvVFs",
    authDomain: "rex-band.firebaseapp.com",
    databaseURL: "https://rex-band.firebaseio.com",
    projectId: "rex-band",
    storageBucket: "rex-band.appspot.com",
    };
    firebase.initializeApp(config);
    $(document).ready(function () {
        $('.button-collapse').sideNav({
            menuWidth: 200,
            edge: 'left',
            closeOnClick: true,
            draggable: true
        });
        $('.parallax').parallax();
        $('select').material_select();
        $('.scrollspy').scrollSpy({
            scrollOffset: 60
        });
        $('table#sTable tr').click(function () {
            var val = $(this).find('td:first').text();
            fileDl(val);
        });
    });
})(jQuery);
function filterTable() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("autocomplete-input1");
    filter = input.value.toUpperCase();
    table = document.getElementById("sTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
$('#autocomplete-input').keyup(function () {
    var filter_array = new Array();
    var filter = this.value.toLowerCase();
    filter_array = filter.split(' ');
    var arrayLength = filter_array.length;
    $('.alb').each(function () {
        var _this = $(this);
        var title = _this.find('span').text().toLowerCase();
        var hidden = 0;
        for (var i = 0; i < arrayLength; i++) {
            if (title.indexOf(filter_array[i]) < 0) {
                _this.hide();
                hidden = 1;
            }
        }
        if (hidden == 0) {
            _this.show();
        }
    });
});