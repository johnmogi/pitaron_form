
var $ = jQuery;

$(window).ready(function () {

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        var objectSelect1 = $("#step1");
        var objectSelect2 = $("#step2");
        var objectSelect3 = $("#step3");
        var objectSelect4 = $("#step4");
        var objectPosition1 = objectSelect1.offset().top;
        var objectPosition2 = objectSelect2.offset().top;
        var objectPosition3 = objectSelect3.offset().top;
        var objectPosition4 = objectSelect4.offset().top;
        if (scroll > objectPosition1) {
            $("#num1").addClass("active");
        } else {
            $("#num1").removeClass("active");
        }
        if (scroll > objectPosition2) {
            $("#num2").addClass("active");
        } else {
            $("#num2").removeClass("active");
        }
        if (scroll > objectPosition3) {
            $("#num3").addClass("active");
        } else {
            $("#num3").removeClass("active");
        }
        if (scroll > objectPosition4) {
            $("#num4").addClass("active");
        } else {
            $("#num4").removeClass("active");
        }
    });


    
});