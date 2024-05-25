(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").css("top", "0px");
    } else {
      $(".sticky-top").css("top", "-100px");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

// form pengajuan
// Add an event listener to the radio buttons to show/hide the input field
const yesDelegasiRadio = document.getElementById("yesDelegasi");
const namaOrmawaField = document.getElementById("namaOrmawaField");

yesDelegasiRadio.addEventListener("change", function () {
  if (yesDelegasiRadio.checked) {
    namaOrmawaField.style.display = "block";
  } else {
    namaOrmawaField.style.display = "none";
  }
});

// Function to clear the form fields
function clearForm() {
  // Replace 'yourFormId' with the actual ID of your form
  var form = document.getElementById("yourFormId");
  if (form) {
    var elements = form.elements;

    for (var i = 0; i < elements.length; i++) {
      if (elements[i].type !== "button" && elements[i].type !== "submit") {
        elements[i].value = "";
      }
    }
  }
}
// form pengajuan

// Tabel
$(document).ready(function () {
  $("#datatables").DataTable();
});
// Tabel

// Notif pw salah
function validateLogin() {
  // Dapatkan nilai input email dan password
  var emailValue = document.getElementById("exampleInputEmail1").value;
  var passwordValue = document.getElementById("exampleInputPassword1").value;

  // Contoh validasi sederhana (gantilah dengan metode autentikasi yang sesuai)
  if (passwordValue !== "password123") {
    // Tampilkan pemberitahuan kesalahan password
    document.getElementById("passwordError").style.display = "block";
  } else {
    // Sembunyikan pemberitahuan kesalahan jika password benar
    document.getElementById("passwordError").style.display = "none";

    // Lanjutkan ke tindakan login yang sesuai
    // ...

    // Submit formulir jika semua validasi lolos
    document.getElementById("loginForm").submit();
  }
}
// Notif pw salah
