var tombolmenu = $ (".tombol-menu");
var menu = $("nav .menu ul");


function klikmenu() {
    tombolmenu.clik(function() {
        menu.toggle();
    });
    menu.clik(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $ (window).width();
    if (width < 990) {
        klikmenu();
    }

})
//check lebar
$(window).resize(function(){
    var width =$(window).width();
    if (width> 990) {
        menu.css("display","block")
    }
    else{
        menu.css("display","none")
    }
    klikmenu();
});

//efek scroll
$(document).ready(function (){
    var scroll_pos=0
    $(document).scroll(function(){
        scroll_pos=$(this).scrollTop();
        if (scroll_pos > 0){
            $("nav").addClass("");
            $("nav img.").show();
            $("nav img.").hide();
        }else{
            $("nav").removeClass("");
            $("nav img.").hide();
            $("nav img.").show();
        }
    })
})
var swiper = new Swiper(".blogs-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 10,
    navigation: {
        nextEl: "swiper-button-next",
        prevEl: "swipwe-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerview: 1,
        },
        768: {
            slidesPerview: 2,
        },
        991: {
            slidesPerview: 3,
        }
    }
}) 