// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function init(){
  var tcButton = document.getElementById("link");
  function myEvent(){
    alert("Surpise! There are no Terms & Conditions!");
  }
}

window.addEventListener('load', init)
