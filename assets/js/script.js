
$(function(){

    //toggle nav
    $("#responsive-nav").on("click",".menu",function(e){
        var nav = $("header nav");
        if(nav.hasClass("opened")){
            //close the nav
            nav.find(">ul").slideUp("fast",function(){
                nav.removeClass("opened");
            });
        }else{
            // open the mobile
            nav.toggleClass("opened").find(">ul").slideToggle();
        }
        return false;
    });


    //Animated Header
    var theWindow = $(window),
        body = $("body"),
        header = $("header");
    if(window.location.hash)
        body.addClass("scrolled");
    theWindow.on("scroll", function(){
        if(theWindow.width() > 975){
            if(theWindow.scrollTop() > 50){
                body.addClass("scrolled");
                header.addClass("animated fadeInDown");
            }else{
                body.removeClass("scrolled");
                header.removeClass("animated fadeInDown");
            }
        }
    });

    //Zoom-in Photos
    var $imgBig = $("#imgBig"),
        $overlay = $("#overlay"),
        $overlayContent = $("#overlayContent");

    $("#gallery-page section img").click(function(){
        $imgBig.attr("src",$(this).prop('src'));
        $overlay.show(350);
        $overlayContent.show(350);
    });

    // Hide Bigger Photos
    $imgBig.click(function(){
        $(this).attr("src", "");
        $overlay.hide();
        $overlayContent.hide();
    });

});

// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;


// Accordion for Procedures Page
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Patient Referrals Form Attach File Button
document.getElementById("additional-files").onchange = function () {
    var names = [];
    for (var i = 0; i < $(this).get(0).files.length; ++i) {
        names.push($(this).get(0).files[i].name);
    }
    var fileName = names.join(', ');
    document.getElementById("uploadFile").style.display = "block";
    document.getElementById("uploadFile").value = fileName;
};
