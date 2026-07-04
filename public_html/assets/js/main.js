/*
|--------------------------------------------------------------------------
| Template Name: Anglo
| Author: Sifency
| Version: 1.0.0
|--------------------------------------------------------------------------
|--------------------------------------------------------------------------
| TABLE OF CONTENTS:
|--------------------------------------------------------------------------
|
| 1. Testimonial Slider
| 2. Client Image Slider
| 3. Scroll To Top
| 3. Preloader
| 4. Splite Text
| 5. Page Loading Transition
| 5. Header
| 5. Mobile Menu
| 7. Text Animation

*/

/*--------------------------------------------------------------
    ## Scripts initialization
  --------------------------------------------------------------*/
$.exists = function (selector) {
  return $(selector).length > 0;
};

$(window).on('load', function () {
  $(window).trigger('scroll');
  $(window).trigger('resize');
});

$(function () {
  $(window).trigger('resize');
  mainNav();
  stickyHeader();
  if ($.exists('.wow')) {
    new WOW().init();
  }
});
AOS.init();

/*--------------------------------------------------------------
  01_ Testimonial Slider
--------------------------------------------------------------*/
$(document).ready(function () {

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
    dots: false,
  });

  // Testimonial Slider Custom Button
  $('.customNextBtn').on('click', function () {
    owl.trigger('next.owl.carousel');
  });
  $('.customPreviousBtn').on('click', function () {
    owl.trigger('prev.owl.carousel');
  });
});

/*--------------------------------------------------------------
  02_ Client Image Slider
--------------------------------------------------------------*/
$(document).ready(function () {

  var owl = $('.owl-carousel-client');
  owl.owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    items: 5,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });

});


/*--------------------------------------------------------------
  03_ Scroll To Top
--------------------------------------------------------------*/
const toTop = document.querySelector(".to-top");

$(window).on('scroll', function () {
  if (window.pageYOffset > 50) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


/*--------------------------------------------------------------
  04_ Preloader
--------------------------------------------------------------*/
window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
});

/*--------------------------------------------------------------
  05. Sticky Header
--------------------------------------------------------------*/
function stickyHeader() {
  var $window = $(window);
  var lastScrollTop = 0;
  var $header = $('.cs_sticky_header');
  var headerHeight = $header.outerHeight() + 30;

  $window.scroll(function () {
    var windowTop = $window.scrollTop();

    if (windowTop >= headerHeight) {
      $header.addClass('cs_gescout_sticky');
    } else {
      $header.removeClass('cs_gescout_sticky');
      $header.removeClass('cs_gescout_show');
    }

    if ($header.hasClass('cs_gescout_sticky')) {
      if (windowTop < lastScrollTop) {
        $header.addClass('cs_gescout_show');
      } else {
        $header.removeClass('cs_gescout_show');
      }
    }

    lastScrollTop = windowTop;
  });
}
/*--------------------------------------------------------------
  06. Mobile Menu
--------------------------------------------------------------*/
function mainNav() {
  $('.cs_nav').append('<span class="cs_munu_toggle"><span></span></span>');
  $('.menu-item-has-children').append(
    '<span class="cs_munu_dropdown_toggle"></span>',
  );
  $('.cs_munu_toggle').on('click', function () {
    $(this)
      .toggleClass('cs_toggle_active')
      .siblings('.cs_nav_list')
      .slideToggle();
  });
  $('.cs_munu_dropdown_toggle').on('click', function () {
    $(this).toggleClass('active').siblings('ul').slideToggle();
    $(this).parent().toggleClass('active');
  });
  // Mega Menu
  // $('.cs_mega_wrapper>li>a').removeAttr('href');
  // Modal Btn
  $('.cs_mode_btn').on('click', function () {
    $(this).toggleClass('active');
    $('body').toggleClass('cs_dark');
  });
  // Side Nav
  $('.cs_icon_btn').on('click', function () {
    $('.cs_side_header').addClass('active');
  });
  $('.cs_close, .cs_side_header_overlay').on('click', function () {
    $('.cs_side_header').removeClass('active');
  });
  //  Menu Text Split
  $('.cs_animo_links > li > a').each(function () {
    let xxx = $(this).html().split('').join('</span><span>');
    $(this).html(`<span class="cs_animo_text"><span>${xxx}</span></span>`);
  });
}
/*--------------------------------------------------------------
  07_ Splite Text
--------------------------------------------------------------*/
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml14 .letters');
if (textWrapper) {
  var isRTL = document.querySelector('html').getAttribute('dir') === 'rtl';
  if (isRTL) {
    // For Arabic, wrap words to preserve cursive connections
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S+/g, "<span class='letter'>$&</span>");
  } else {
    // For English, wrap individual letters
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  }
}

anime.timeline({ loop: false })
  .add({
    targets: '.ml14 .line',
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0, 1],
    translateX: [40, 0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// Wrap every word in a span (to prevent word-break), then letters
var textWrapper = document.querySelector('.ml12');
if (textWrapper) {
  var isRTL = document.querySelector('html').getAttribute('dir') === 'rtl';
  textWrapper.innerHTML = textWrapper.textContent.split(' ').map(function (word) {
    if (isRTL) {
      // For Arabic, animate whole words
      return '<span class="word" style="white-space: nowrap; display: inline-block;">' +
        "<span class='letter'>" + word + "</span>" + '</span>';
    } else {
      // For English, animate letters
      return '<span class="word" style="white-space: nowrap; display: inline-block;">' +
        word.replace(/\S/g, "<span class='letter'>$&</span>") + '</span>';
    }
  }).join(' ');
}

anime.timeline({ loop: true })
  .add({
    targets: '.ml12 .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });

var textWrapper = document.querySelector('.ml13');
if (textWrapper) {
  var isRTL = document.querySelector('html').getAttribute('dir') === 'rtl';
  if (isRTL) {
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S+/g, "<span class='letter'>$&</span>");
  } else {
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  }


  anime.timeline({ loop: true })
    .add({
      targets: '.ml13 .letter',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    }).add({
      targets: '.ml13 .letter',
      translateX: [0, -30],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i
    });
}


/*--------------------------------------------------------------
  08_ Hero Background Slideshow
--------------------------------------------------------------*/
(function () {
  const slides = document.querySelectorAll('.hero-bg-slide');
  if (slides.length === 0) return;

  let currentSlide = 0;
  const totalSlides = slides.length;
  const intervalTime = 4000; // 4 seconds per slide

  function nextSlide() {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');

    // Move to next slide (loop back to 0 if at end)
    currentSlide = (currentSlide + 1) % totalSlides;

    // Add active class to new slide
    slides[currentSlide].classList.add('active');
  }

  // Start the slideshow
  setInterval(nextSlide, intervalTime);
})();

/*--------------------------------------------------------------
  09_ Search Functionality
--------------------------------------------------------------*/
const searchPages = [
  { title: "Home", url: "index.html", description: "Welcome to Perfect Doors - Premium Interior Solutions" },
  { title: "About Us", url: "about.html#who-we-are", description: "Learn about our company history and mission" },
  { title: "Leadership", url: "about.html#leadership", description: "Message from our management team" },
  { title: "Our Journey", url: "about.html#journey", description: "Company history and milestones" },
  { title: "Vision & Mission", url: "about.html#vision-mission", description: "Our vision and mission statement" },
  { title: "Core Values", url: "about.html#values", description: "What we stand for - our core values" },
  { title: "Products", url: "services.html", description: "Explore our premium HPL products" },
  { title: "Portfolio", url: "portfolio.html", description: "View our successful projects" },
  { title: "Successful Projects", url: "portfolio.html", description: "Completed projects portfolio" },
  { title: "On-Going Projects", url: "portfolio.html", description: "Current and upcoming projects" },
  { title: "Contact Us", url: "contact-us.html", description: "Get in touch with us" },
  { title: "FAQ", url: "faq.html", description: "Frequently asked questions" },
  { title: "Toilet Cubicles", url: "services.html#cubicles", description: "Premium HPL toilet and washroom cubicles" },
  { title: "Lockers", url: "services.html#lockers", description: "Durable HPL lockers and storage solutions" },
  { title: "Wall Cladding", url: "services.html#cladding", description: "Decorative wall cladding solutions" },
  { title: "Laboratory & Kitchen", url: "services.html#lab-kitchen", description: "Chemical-resistant laboratory and kitchen furniture" },
  { title: "Bathroom Fittings", url: "services.html#bathroom", description: "Premium bathroom fittings and accessories" },
  { title: "Cabinets", url: "services.html#cabinets", description: "Storage cabinets and solutions" },
  { title: "Hardware & Accessories", url: "services.html#hardware", description: "Premium hardware and accessories" },
  { title: "Colors & Finishes", url: "services.html#colors", description: "Our range of colors and finishes" },
  { title: "Benches & Tables", url: "services.html#benches", description: "Benches and tables for various spaces" }
];

function toggleSearch() {
  const overlay = document.getElementById('search-overlay');
  if (!overlay) return;
  overlay.classList.toggle('active');
  if (overlay.classList.contains('active')) {
    const input = document.getElementById('search-input');
    if (input) input.focus();
  }
}

function performSearch(event) {
  if (event && event.key === 'Escape') {
    toggleSearch();
    return;
  }
  
  const input = document.getElementById('search-input');
  const resultsContainer = document.getElementById('search-results');
  
  if (!input || !resultsContainer) return;
  
  const query = input.value.toLowerCase();
  resultsContainer.innerHTML = '';
  
  if (query.length < 2) {
    return;
  }
  
  const results = searchPages.filter(page => 
    page.title.toLowerCase().includes(query) || 
    page.description.toLowerCase().includes(query)
  );
  
  if (results.length === 0) {
    resultsContainer.innerHTML = '<p style="color: #888;">No results found</p>';
    return;
  }
  
  results.forEach(result => {
    const item = document.createElement('div');
    item.className = 'search-result-item';
    item.innerHTML = `
      <h4>${result.title}</h4>
      <p>${result.description}</p>
    `;
    item.onclick = () => {
      const overlay = document.getElementById('search-overlay');
      if (overlay) overlay.classList.remove('active');
      const [path, hash] = result.url.split('#');
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      if (path === currentPath && hash) {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          history.replaceState(null, '', '#' + hash);
          return;
        }
      }
      window.location.href = result.url;
    };
    resultsContainer.appendChild(item);
  });
}

// Close search on Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const overlay = document.getElementById('search-overlay');
    if (overlay && overlay.classList.contains('active')) {
      toggleSearch();
    }
  }
});
