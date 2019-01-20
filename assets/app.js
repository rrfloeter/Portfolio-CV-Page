//change image when scrolling
$(window).scroll(function () {
    var img_url = "assets/last_one.jpg";
    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 580) {
        img_url = "assets/red.jpg";
    }
    $('.body').css('background-image', 'url(' + img_url + ')');
    // $('.body').css('background-size':'100% 100%');

    if ($(window).scrollTop() >= 580) {
        $(".bar1").show();
        $("#box1").show();
        $("#box2").show();
        $("#box3").show();
    } else {
        $(".bar1").hide();
        $("#box1").hide();
        $("#box2").hide();
        $("#box3").hide();
    }

   
});

$(function () {
$("#downbutton").click(function() {
    $("html, body").animate({ scrollTop: 744 }, "slow");
  });

  $(window).scroll(function(){
    var scroll = $('#scroll');
    if ($(this).scrollTop() > 400) {
        scroll.fadeIn('slow');
    } else {
        scroll.fadeOut('slow');
    }
});
});
