var now = moment().format("HH")
loadSettings()

// Loads the storage that was stored based on open
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

// Compares each time against the current time to change the background based on data gained
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

// Event listeners for each time block to store data written
$('#9b').on("click", function() {
    localStorage.a = $('#9').val().trim();
})
$('#10b').on("click", function() {
    localStorage.b = $('#10').val().trim();
})
$('#11b').on("click", function() {
    localStorage.c= $('#11').val().trim();
})
$('#12b').on("click", function() {
    localStorage.d = $('#12').val().trim();
})
$('#13b').on("click", function() {
    localStorage.e = $('#13').val().trim();
})
$('#14b').on("click", function() {
    localStorage.f = $('#14').val().trim();
})
$('#15b').on("click", function() {
    localStorage.g = $('#15').val().trim();
})
$('#16b').on("click", function() {
    localStorage.h = $('#16').val().trim();
})
$('#17b').on("click", function() {
    localStorage.j = $('#17').val().trim();
})

}
backgroundChecker()