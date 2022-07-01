var calendar = document.querySelector(".calendar")
var today = moment().format("dddd, MMMM Do YYYY")
var now = moment().format("HH")
localStorage.getItem('test')

loadSettings()
function loadSettings() {
    $('#9').val(localStorage.a)
    $('#10').val(localStorage.b)
    $('#11').val(localStorage.c)
    $('#12').val(localStorage.d)
    $('#13').val(localStorage.e)
    $('#14').val(localStorage.f)
    $('#15').val(localStorage.g)
    $('#16').val(localStorage.h)
    $('#17').val(localStorage.j)
}


function backgroundChecker () {

    for(var i = 0; i < 25; i++){
        
        if(now > i) {
            console.log($('#'+i))
            $('#'+i).addClass("bg-secondary")

    }

        if (now == i) {
            $('#'+i).addClass("bg-danger")
        }

        if (now < i) {
            $('#'+i).addClass("bg-success")
        }

       
}

$('#9b').on("click", function() {
    localStorage.a = $('#9').val();
})
$('#10b').on("click", function() {
    localStorage.b = $('#10').val();
})
$('#11b').on("click", function() {
    localStorage.c= $('#11').val();
})
$('#12b').on("click", function() {
    localStorage.d = $('#12').val();
})
$('#13b').on("click", function() {
    localStorage.e = $('#13').val();
})
$('#14b').on("click", function() {
    localStorage.f = $('#14').val();
})
$('#15b').on("click", function() {
    localStorage.g = $('#15').val();
})
$('#16b').on("click", function() {
    localStorage.h = $('#16').val();
})
$('#17b').on("click", function() {
    localStorage.j = $('#17').val();
})

}
backgroundChecker()