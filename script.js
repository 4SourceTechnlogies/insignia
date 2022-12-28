// count up function
$(document).ready(function () {
  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 580) {
      $(".navbar").css("background", "rgb(217 224 229 / 90%)");
    } else {
      $(".navbar").css("background", "#dee2e663");
    }
  });
});

// mobile navbar
let humburger = document.querySelector(".navbar-toggler");
let times = document.querySelector(".times");
let mobileNav = document.querySelector(".mobileNav");

humburger.addEventListener("click", function () {
  mobileNav.classList.toggle("open");
});
humburger.addEventListener("blur", function () {
  mobileNav.classList.remove("open");
});

// InteractionObserverAPI
const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -200px 0px",
};

//  const observer = newIntersectionObserver(entries => {

//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('.rising');
//     }
//   });
//   });

//   observer.observe(document.querySelector('.floatingImg'));

const observer = newIntersectionObserver((entries) => {
  entries.forEach(entry =>{
    if (entry.isIntersecting) {
      entry.target.classList.add('.rising');
    }
  });
});

observer.observe(document.getElementById('noLP'))