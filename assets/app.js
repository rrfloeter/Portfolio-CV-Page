//change image when scrolling
$(window).scroll(function () {
    var img_url = "assets/last_one.jpg";

    //test
    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 580) {
        img_url = "assets/red.jpg";
    }
    $('.body').css('background-image', 'url(' + img_url + ')');

    //hide boxes until scroll down is complete
    if ($(window).scrollTop() >= 580) {
        $(".bar1").fadeIn();
        $("#box1").fadeIn();
        $("#box2").fadeIn();
        $("#box3").fadeIn();
    } else {
        $(".bar1").hide();
        $("#box1").hide();
        $("#box2").hide();
        $("#box3").hide();
    }


});

//scroll happens when downbutton is hit
$(function () {
    $("#downbutton").click(function () {
        $("html, body").animate({ scrollTop: 744 }, "slow");
    });

    //combats the issue of the screen spazzing out when attempting to scroll back up or further down after hitting the arrow button
    $(window).scroll(function () {
        var scroll = $('#scroll');
        if ($(this).scrollTop() > 400) {
            scroll.fadeIn('slow');
        } else {
            scroll.fadeOut('slow');
        }
    });
});
