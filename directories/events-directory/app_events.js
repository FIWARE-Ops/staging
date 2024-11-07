// Returns the right classNames for isotope card filtering system
function createClassFilter(data) {
  var filterString = "";
  var regex = /([^a-zA-Z0-9À-ÿ])/gi;
  if (typeof data == "object") {
    data.forEach((element, i) => {
      if (i + 1 === data.length) {
        filterString += `${element
          .toLowerCase()
          .replace(/&amp/gi, "")
          .replace(regex, "-")}`;
      } else {
        filterString += `${element
          .toLowerCase()
          .replace(/&amp/gi, "")
          .replace(regex, "-")} `;
      }
    });
  } else {
    filterString = data.toLowerCase().replace(/&amp/gi, "").replace(regex, "-");
  }

  return filterString;
}


function concatValues(obj) {
  var value = "";
  for (var prop in obj) {
    value += obj[prop];
  }
  return value;
}

function filterToggle() {
  let filtersContainer = document.querySelector(".filters-container");
  document
    .querySelector("#mobileToggleFilters")
    .addEventListener("click", (ev) => {
      ev.target.classList.toggle("activeButton");

      if (!filtersContainer.classList.contains("active")) {
        filtersContainer.classList.add("active");
        document.querySelector("#filter-button-text").innerText =
          "Hide Filters";
        filtersContainer.style.height = "auto";

        let height = filtersContainer.clientHeight + "px";

        filtersContainer.style.height = "0px";

        setTimeout(function () {
          filtersContainer.style.height = height;
        }, 0);
      } else {
        filtersContainer.style.height = "0px";
        document.querySelector("#filter-button-text").innerText =
          "Show Filters";

        filtersContainer.addEventListener(
          "transitionend",
          function () {
            filtersContainer.classList.remove("active");
          },
          {
            once: true,
          },
        );
      }
    });
}

function getCSSFilter(id) {
  var cssFilter = "";
  var currentType = $(id).val();
  if (currentType !== "*") {
    cssFilter = "." + currentType;
  }
  return document.querySelector(id) ? cssFilter : "";
}

function scrollToView() {
  const element = $("#app .grid-item:visible:first").get(0);
  const headerOffset = 88 + $(".filters-container").parent().height();
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "instant",
  });
}

var scrollSet = false;
var init = false;
var msnry;
var selectors = {
  fCompany: true,
  fRole: true,
  fDepartment: true,
  fDomain: true,
  fCountry: true,
};
var filterObj = {};

function initSelect() {
  msnry = new Isotope(".grid", {
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    masonry: {
      columnWidth: ".grid-sizer",
    },
    getSortData: {
      name: ".cat-name",
      year: ".year",
    },
    sortAscending: {
      name: true,
      year: true,
    },
  });
}

function smoothScroll() {
  // Add smooth scrolling to all links
  jQuery("a").on("click", function (event) {
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
        },
      );
      return false;
    } // End if
  });
}


function initSticky() {
  window.onscroll = onScrollHandler;

  function onScrollHandler() {
    const header = document.getElementById("filters");
    const footer = document.getElementById("no-sticky");

    if (
      !!header &&
      !!footer &&
      window.pageYOffset > header.offsetTop &&
      window.pageYOffset < footer.offsetTop
    ) {
      header.classList.add("stickybar");
      header.classList.remove("not-stickybar");
    } else {
      header.classList.remove("stickybar");
      header.classList.add("not-stickybar");
    }
  }
}

document.addEventListener("html-included", () => {

  $("#app").css("visibility", "visible");
  if (init) {
    return;
  }
  init = true;
  initSelect();
  filterToggle();
  initSticky();
  let count = 0;
  let target = 7;
  // Isotope istantiation
  // Relies on unpkg.com/imagesloaded
  $("#app")
    .imagesLoaded()
    .always(function (instance) {
      msnry.arrange({ sortBy: "original-order" });
      msnry.on("arrangeComplete", (filteredItems) => {
        if (scrollSet) {
          scrollToView();
        }
      });
    })
    .fail(function () {
      // msnry.arrange({ sortBy: "original-order" });
    })
    .progress(function (instance, image) {
      count++;
      if (count % target === 0) {
        target = target + 7;
        msnry.arrange({ sortBy: "original-order" });
      }
    });
});