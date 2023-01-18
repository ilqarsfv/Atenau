$(document).ready(function(){


let swiper = new Swiper(".mySwiper", {
    loop: true,
    // mousewheel: true,
    speed: 1500,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      waitForTransition:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

swiper.on('slideChange', function() {
    TweenMax.to('.swiper-content h2', .1 ,{
        y: '-100px',
        opacity: 0
    })
    TweenMax.to('.swiper-content .swiper-desc', .2   ,{
        y: '-100px',
        opacity: 0
    })
    TweenMax.to('.swiper-content #buttons', .3   ,{
        y: '-100px',
        opacity: 0
    })
  })

swiper.on('slideChangeTransitionEnd', function(){
    TweenMax.to('.swiper-content h2', .4, {
        y:'0px',
        // delay: .2,
        opacity: 1
    })
    TweenMax.to('.swiper-content h2', 0, {
        y:'50px',
        opacity: .5
    })
    TweenMax.to('.swiper-content h2', 0, {
        y:'100px',
        opacity: 0
    })
    TweenMax.to('.swiper-content .swiper-desc', .6, {
        y:'0px',
        opacity: 1
    })
    TweenMax.to('.swiper-content .swiper-desc', 0, {
        y:'50px',
        opacity: .5
    })
    TweenMax.to('.swiper-content .swiper-desc', 0, {
        y:'100px',
        opacity: 0
    })
    TweenMax.to('.swiper-content #buttons', .9, {
        y:'0px',
        opacity: 1
    })
    TweenMax.to('.swiper-content #buttons', 0, {
        y:'50px',
        opacity: .5
    })
    TweenMax.to('.swiper-content #buttons', 0, {
        y:'100px',
        opacity: 0
    })
})


let sp = document.querySelector(".mySwiper .swiper-pagination")
let pgc = document.querySelector("#main-slider .pag-container")
pgc.appendChild(sp)



$("#menu-list>li").each((index,item)=>{
    $(item).mouseenter(()=>{
        $(item).siblings().children(".sub-title").addClass("active")
        $(item).find("svg").addClass("active")
    })
    $(item).mouseleave(()=>{
        $(item).siblings().children(".sub-title").removeClass("active")
        $(item).find("svg").removeClass("active")
    })
    
})

const add = function (item,item2) {
    $(item).mouseenter(()=>{
        $(item2).addClass("active")
    })
    $(item).mouseleave(()=>{
        $(item2).removeClass("active")
    })
}
add(".swiper-button-next", ".swiper-button-prev")
add(".swiper-button-prev",".swiper-button-next")


// subscribe
for (let i = 0; i < $(".sub").length; i++) {
    $(".subBox").html($(".subContent").eq(0).text())
    $(".subTitle").eq(0).addClass("active");
    $(".sub").eq(i).click(function (e) {
      let target = $(e.target)
      let a = 0;
      $(".subBox").html(target.parent().children().eq(1).text());
      while (a < $(".subTitle").length) {
        $(".subTitle").eq(a++).attr('class', 'subTitle');
      }
      $(".subTitle").eq(i).addClass("active");
    });
  }

// projects
$("#projects .owl-carousel").owlCarousel({
    loop: false,
    margin:  30,
    nav: true,
    stagePadding: 108, 
    responsiveClass: true,
    navText: ["<img src='/img/right.png' />", "<img src='/img/right.png' />"],
    dots: false,
    onDragged: callback,
    responsive: {
      0: {
        items: 1,
        stagePadding: 20
      },
      768: {
        items: 2,
        stagePadding: 100
      },
      1000: {
        items: 3
      },
    },
  });

  function callback() {
    for (let i = 0; i < $("#projects .owl-stage").children().length; i++ ) {    
        if ($("#projects .owl-item").eq(i).hasClass("active")) 
        {
          $("#projects .owl-item").eq(i).css({
            opacity: "1"
          })
        } 
        else {
          $("#projects .owl-item").eq(i).css({
            opacity: ".6"
          })
        }
    }
  }
  const mediaQuery = window.matchMedia('(min-width: 768px)')
if(mediaQuery.matches) {
  function opacityOwl() {
    for (let i = 0; i < $("#projects .owl-item").length; i++) {
      if ($("#projects .owl-item").eq(i).hasClass("active")) {
        $("#projects .owl-item").eq(i).css({opacity: "1"})
      } else {
        $("#projects .owl-item").eq(i).css({
          opacity: ".2",
          transition: "all .5s"
        })
      }
    }
  }
  
  $("#projects .owl-item.active").last().next().css({opacity: ".2"})

  $("#projects .owl-prev").click(function(){
    opacityOwl();
    if ($("#projects .owl-item").first().hasClass("active")) {
      $("#projects .owl-prev").removeClass("visible");
    }
    if(!$("#projects .owl-item").first().hasClass("active")) {
      $("#projects .owl-next").css({visibility: "visible"})
    }
  })
  
  $("#projects .owl-next").click(function(){
    opacityOwl();
    $("#projects .owl-prev").addClass("visible");
    if($("#projects .owl-item").last().hasClass("active")) {
      $("#projects .owl-next").css({visibility: "hidden"})
    }
  })
  
  for (let i = 0; i < $("#projects .owl-item").length; i++) {
    if ($("#projects .owl-item").eq(i).hasClass("active")) {
      $("#projects .owl-prev").css({visibility: "hidden"})
    }
  }
  
}

// partners
$("#partners .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    // center: true,
    stagePadding: 1,
    navContainer: "#part-nav", 
    responsiveClass: true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    dots: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 20
      },
      768: {
        items: 2,
        stagePadding: 100
      },
      1000: {
        items: 5
      },
    },
  });


//   callform input

$('.form-group input').focusout(function() {
  let inp_val = $(this).val();
  if (inp_val === "") {
    $(this).removeClass('has-value');
  } else {
    $(this).addClass('has-value');
  }
});


$("#language").click(()=>{
  $("#languages").toggleClass("active")
})

$(window).scroll(function(){
  if($("body").scrollTop() > 720 || $("html").scrollTop() > 720) {
  $("header").addClass("stop");
  $("header #logo img").attr("src", "/img/footer-logo.png")
  console.log("kecdi");
  } else {
      $("header").removeClass("stop");
      $("header #logo img").attr("src", "/img/logo.png")
  }
});

})