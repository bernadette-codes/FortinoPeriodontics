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

    // //Landing Page Photos
    // var windowHeight = $(window).height(),
    //     windowWidth = $(window).width(),
    //     $landing = $(".main-page .crossfade"),
    //     $header = $("header.slideDown").height(),
    //
    //
    // //Page on Resize
    // $(window).on("resize", function() {
    //     var windowHeight = $(window).height();
    //
    //     $landing.css({"height": windowHeight-$header, "width": windowWidth});
    // });
    //
    // //Landing Page Size
    // $landing.css("height",(windowHeight - $header));

    var windowHeight = $(window).height(),
        $header = $("header").height(),
        $landing = $(".main-page .crossfade");

    $landing.css("height",(windowHeight - $header));


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



    $(".hover-change").on("mouseover", function() {
        var $this = $(this);
        $this.data("original", $this.attr("src"));
        $this.attr("src", $this.data("hover"));
    }).on("mouseleave", function() {
        var $this = $(this);
        $this.data("hover", $this.attr("src"));
        $this.attr("src", $this.data("original"));
    });

    // cool form
    if(!String.prototype.trim){(function(){var rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;String.prototype.trim=function(){return this.replace(rtrim,'')}})()}[].slice.call(document.querySelectorAll('input.input__field')).forEach(function(inputEl){if(inputEl.value.trim()!==''){classie.add(inputEl.parentNode,'input--filled')}
        inputEl.addEventListener('focus',onInputFocus);inputEl.addEventListener('blur',onInputBlur)});function onInputFocus(ev){classie.add(ev.target.parentNode,'input--filled')}
    function onInputBlur(ev){if(ev.target.value.trim()===''){classie.remove(ev.target.parentNode,'input--filled')}}
    'use strict';function classReg(className){return new RegExp("(^|\\s+)"+className+"(\\s+|$)")}
    var hasClass,addClass,removeClass;if('classList' in document.documentElement){hasClass=function(elem,c){return elem.classList.contains(c)};addClass=function(elem,c){elem.classList.add(c)};removeClass=function(elem,c){elem.classList.remove(c)}}
    else{hasClass=function(elem,c){return classReg(c).test(elem.className)};addClass=function(elem,c){if(!hasClass(elem,c)){elem.className=elem.className+' '+c}};removeClass=function(elem,c){elem.className=elem.className.replace(classReg(c),' ')}}
    function toggleClass(elem,c){var fn=hasClass(elem,c)?removeClass:addClass;fn(elem,c)}
    var classie={hasClass:hasClass,addClass:addClass,removeClass:removeClass,toggleClass:toggleClass,has:hasClass,add:addClass,remove:removeClass,toggle:toggleClass};if(typeof define==='function'&&define.amd){define(classie)}else{window.classie=classie}



});

