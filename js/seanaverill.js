
// Dark Mode Code
function myFunction() {
    let element = document.body;
    let logo = document.getElementById('logo');
    element.classList.toggle("light");
    logo.classList.toggle("lightbutton");

    // Menu Items
    const menus = document.querySelectorAll('.menuitem');
    for (const menuitem of menus) {
      menuitem.classList.toggle('lightbutton');
    }

    // Panel Headers
    const panHead = document.querySelectorAll('.panel-heading');
    for (const panelheading of panHead) {
      panelheading.classList.toggle('panelheadlight');
    }

    // Panel Bodies
    const panColl = document.querySelectorAll('.panel-collapse');
    for (const panelcollapse of panColl) {
      panelcollapse.classList.toggle('panelbacklight');
    }

    // Comany Links
    const comWeb = document.querySelectorAll('.companywebsite');
    for (const companywebsite of comWeb) {
      companywebsite.classList.toggle('companywebsitelight');
    }

    // Social Links
    const darkicons = document.querySelectorAll('.darkicons');
    for (const lighticons of darkicons) {
      lighticons.classList.toggle('lighticons');
    }


    }


// Social Slide Out Code
function sliderFunc() {
  let socialslide = document.getElementById('slider');
  socialslide.classList.toggle("slideout");

  let slidearrow = document.getElementById('slidearrow');
  slidearrow.classList.toggle("slidearrow");
  


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

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



// Cards
