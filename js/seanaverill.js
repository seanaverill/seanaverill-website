
// Dark Mode Code
function myFunction() {
    let element = document.body;
    let mItem1 = document.getElementById('mItem1');
    let mItem2 = document.getElementById('mItem2');
    let mItem3 = document.getElementById('mItem3');
    let logo = document.getElementById('logo');
    element.classList.toggle("light");
    mItem1.classList.toggle("lightbutton");
    mItem2.classList.toggle("lightbutton");
    mItem3.classList.toggle("lightbutton");
    logo.classList.toggle("lightbutton");
    }


// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyFunc()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyFunc() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}





/* Accordion Code
$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });

  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });
    */   