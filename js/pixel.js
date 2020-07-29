function openNav() {
    var x = window.matchMedia("(max-width: 800px)");
    var y = window.matchMedia("(max-width: 1920px)");
    var z = window.matchMedia("(max-width: 500px)");
    var a = window.matchMedia("(max-width: 330px)");

    if (y.matches) {
        document.getElementById("mySidenav").style.width = "100%";
        console.log("jjjjjj")

    }
    if (y.matches) {
        document.getElementById("mySidenav").style.width = "850px";
        console.log("a")

    }
    if (z.matches) {
        document.getElementById("mySidenav").style.width = "100%";

    }
    if (a.matches) {
        document.getElementById("mySidenav").style.width = "100%";

    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


$("input[type=checkbox]").click(function() {

    if ($(this).prop("checked") == true) {
        setTimeout(function() {
            $('body').css("background-color", "#4d4040")
            $('#mySidenav').css("background-color", "#797272")
            $('h1').css("color", "#fff")
            $('p').css("color", "#fff")




        }, 300);
    } else if ($(this).prop("checked") == false) {
        setTimeout(function() {
            $('body').css("background-color", "white")
            $('#mySidenav').css("background-color", "#F4F6FD")
            $('h1').css("color", "#000")
            $('p').css("color", "#000")



        }, 300);
    }


});
$(".open").click(function() {

    $(".open1").slideToggle()

})
$(".open").click(function(event) {
    event.preventDefault();

});