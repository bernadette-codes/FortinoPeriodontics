// Copyright Year
var d = new Date(),
    n = d.getFullYear();
document.getElementById("year").innerHTML = n;

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


    //activate google map
    $(".gmap").on("mouseenter",function(){
        $(this).addClass("active");
    }).on("mouseleave",function(){
        $(this).removeClass("active");
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

    $(".more-to-explore").appendTo($("#explore-container"));

    $(".hover-change").on("mouseover", function() {
        var $this = $(this);
        $this.data("original", $this.attr("src"));
        $this.attr("src", $this.data("hover"));
    }).on("mouseleave", function() {
        var $this = $(this);
        $this.data("hover", $this.attr("src"));
        $this.attr("src", $this.data("original"));
    });

    //faq
    $("#faqs>h3").on("click", function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active").next("div").slideUp().removeClass("active-div");

        } else{
            $("#faqs>h3").removeClass("active").next("div").slideUp();
            $(this).addClass("active").next("div").slideDown().addClass("active-div");
        }
    });



    /*

      $("#callout-video-wrapper").on("click", ".play-video", function() {
              $("#callout-video").html('<iframe width="100%" height="auto" src="https://www.youtube.com/embed/bQespIIUkDQ?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
              return false;
          });


    var theWindow = $(window),
        body = $("body");
    if(theWindow.width() > 550){
      $("#review-rotation").cycle({
        slides: ">div",
        fx: "carousel",
        carouselVisible: "3",
        carouselFluid: true,
        pager: "#review-pager",
        prev: ">.prev",
        next: ">.next",
        timeout: "10000",
        pagerTemplate: "<span></span>"
      })
    } else{
      $("#review-rotation").cycle({
        slides: ">div",
        pager: "#review-pager",
        timeout: "10000",
        pagerTemplate: "<span></span>"
      })
    }



      */


    // cool form
    if(!String.prototype.trim){(function(){var rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;String.prototype.trim=function(){return this.replace(rtrim,'')}})()}[].slice.call(document.querySelectorAll('input.input__field')).forEach(function(inputEl){if(inputEl.value.trim()!==''){classie.add(inputEl.parentNode,'input--filled')}
        inputEl.addEventListener('focus',onInputFocus);inputEl.addEventListener('blur',onInputBlur)});function onInputFocus(ev){classie.add(ev.target.parentNode,'input--filled')}
    function onInputBlur(ev){if(ev.target.value.trim()===''){classie.remove(ev.target.parentNode,'input--filled')}}
    'use strict';function classReg(className){return new RegExp("(^|\\s+)"+className+"(\\s+|$)")}
    var hasClass,addClass,removeClass;if('classList' in document.documentElement){hasClass=function(elem,c){return elem.classList.contains(c)};addClass=function(elem,c){elem.classList.add(c)};removeClass=function(elem,c){elem.classList.remove(c)}}
    else{hasClass=function(elem,c){return classReg(c).test(elem.className)};addClass=function(elem,c){if(!hasClass(elem,c)){elem.className=elem.className+' '+c}};removeClass=function(elem,c){elem.className=elem.className.replace(classReg(c),' ')}}
    function toggleClass(elem,c){var fn=hasClass(elem,c)?removeClass:addClass;fn(elem,c)}
    var classie={hasClass:hasClass,addClass:addClass,removeClass:removeClass,toggleClass:toggleClass,has:hasClass,add:addClass,remove:removeClass,toggle:toggleClass};if(typeof define==='function'&&define.amd){define(classie)}else{window.classie=classie}



    var slideshows = $('.cycle-slideshow').on('cycle-prev cycle-next', function(e, opts) {
        // advance the other slideshow
        slideshows.not(this).cycle('goto', opts.currSlide);
    });

    $('#carousel .cycle-slideshow figure').click(function () {
        console.log("clicked");
        var index = $('#carousel .cycle-slideshow').data('cycle.API').getSlideIndex(this);
        slideshows.cycle('goto', index);
    });



});

