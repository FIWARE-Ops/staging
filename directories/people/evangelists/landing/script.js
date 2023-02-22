document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function () {
    smoothScroll();
    enableCarousel();
    newChip();
  });
});

function smoothScroll() {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        600,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
      return false;
    } // End if
  });
}

function enableCarousel() {
  $(".owl-carousel").owlCarousel({
    stagePadding: 10,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    margin: 20,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
      },
      600: {
        items: 2,
        nav: false,
        loop: true,
      },
      1000: {
        items: 3,
        nav: false,
        loop: true,
      },
      1400: {
        items: 3,
        nav: false,
        loop: true,
      },
      1600: {
        items: 3,
        nav: false,
        loop: true,
      },
    },
  });
}

function newChip() {
  // Chips on Checkbox

  function Chip(label) {
    this.checkedItems = [];
    this.label = label;
    this.displayarea = document.getElementById("display");
    this.checkbox = document.getElementsByClassName("chkbox-container");
  }

  Chip.prototype.addevent = function () {
    var chkinp = document.querySelectorAll(".chkbox-container input");
    for (let i = 0; i <= chkinp.length - 1; i++) {
      chkinp[i].addEventListener("click", a.checkfn);
    }
  };

  Chip.prototype.display = function () {
    a.displayarea.innerHTML = "";
    for (let i in a.checkedItems) {
      a.displayarea.insertAdjacentHTML(
        "beforeend",
        `<div class="chip">
            <label>${a.checkedItems[i].parentElement.innerText}</label>
            <span class="closebtn" name="${a.checkedItems[i].parentElement.innerText}">x</span>
        </div>`
      );
      document
        .getElementsByClassName("closebtn")
        [i].addEventListener("click", a.unchecked);
    }
  };

  Chip.prototype.checkfn = function () {
    a.checkedItems = [];
    var inputs = document.querySelectorAll(".chkbox-container input");
    for (let i in inputs) {
      if (inputs[i].checked) a.checkedItems.push(inputs[i]);
    }
    a.display();
  };

  Chip.prototype.unchecked = function (e) {
    var ele = e.target.getAttribute("name");
    for (let i in a.checkedItems) {
      a.checkedItems[i].parentElement.innerText == ele
        ? (a.checkedItems[i].checked = false)
        : (a.checkedItems[i].checked = true);
    }
    a.checkfn();
  };

  var a = new Chip();
  a.checkfn();
  a.addevent();
}
