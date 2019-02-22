$(document).ready(function(){

  window.onscroll = function() {myFunction()};

  var navbar = document.getElementById("mainNav");
  var sticky = navbar.offsetTop;

  // var main = document.getElementById("me");
  // var mainWidth = main.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky+60) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }


// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// // Bind click handler to menu items
// // so we can get a fancy scroll animation
// menuItems.click(function(e){
//   var href = $(this).attr("href"),
//       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
//   $('html, body').stop().animate({
//       scrollTop: offsetTop
//   }, 300);
//   e.preventDefault();
// });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }
});




$('.js-scroll-trigger').click(function() {
  $('.navbar-collapse').collapse('hide');
});



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



});


 // function w3_open() {
 //   document.getElementById("main").style.marginLeft = "25%";
 //   document.getElementById("mySidebar").style.width = "25%";
 //   document.getElementById("mySidebar").style.display = "block";
 //   document.getElementById("openNav").style.display = 'none';
 // }
 // function w3_close() {
 //   document.getElementById("main").style.marginLeft = "0%";
 //   document.getElementById("mySidebar").style.display = "none";
 //   document.getElementById("openNav").style.display = "inline-block";
 // }
