var intervalId = window.setInterval(function(){
    if(
        document.getElementById('1st').value == "9" &&
        document.getElementById('2st').value == "6" &&
        document.getElementById('3st').value == "8" &&
        document.getElementById('4st').value == "2" &&
        document.getElementById('5st').value == "6" &&
        document.getElementById('6st').value == "1"
    ){
        document.getElementsByClassName("destravado")[0].style.display = "flex";
        document.getElementsByClassName("trancado")[0].style.display = "none";
    }
}, 1000);
$( function() {
    $( "#draggable" ).draggable();
} );