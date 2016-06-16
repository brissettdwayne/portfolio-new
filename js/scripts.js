console.log("Im Up");

$(window).load(function(){
  home();
  projects();
  contact();
  aboutMe();
});


function projects(){
  $('#project-one').click(function(){
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 700);
  })
}

function home(){
  $('#home').click(function(){
    $('html, body').animate({
        scrollTop: $("#main").offset().top - 110
    }, 700);
  })
}

function contact(){
  $('#contact-one').click(function(){
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 100
    }, 700);
  })
}

function aboutMe() {
  $('#about-me-one').click(function(){
    $('html, body').animate({
        scrollTop: $("#about-me").offset().top - 100
    }, 700);
  })
}
