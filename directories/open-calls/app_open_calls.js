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

function inputSearch(itemElem, textString) {
  var stopwords = /\b(FIWARE|IoT|Smart|Solution|Product|Device)\b/gi;
  var words = textString.trim().replaceAll(stopwords, "").split(/[ ,]+/);
  var regex = [];
  words.forEach(function (currentValue, index) {
    if (currentValue.trim() != "") {
      regex.push("(" + currentValue.trim() + ")");
    }
  });
  var qsRegex = new RegExp(regex.join("|"), "gi");
  return itemElem.innerText.match(qsRegex);
}

function concatValues(obj) {
  var value = "";
  for (var prop in obj) {
    value += obj[prop];
  }
  return value;
}

function initTextSearch(msnry) {
  // Search input
  document.querySelector("#searchInput").addEventListener("keyup", (e) => {
    if (e.target.value != "") {
      e.target.parentNode.classList.add("resetActive");
    } else {
      e.target.parentNode.classList.remove("resetActive");
    }
    msnry.arrange({
      filter: function (itemElem, itemElem2) {
        return inputSearch(itemElem2, e.target.value);
      },
    });
  });
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

function filterOptions(id, filter, data, css) {
  var itemCSSFilter = ".grid-item:visible";
  // update Type select
  if (document.querySelector(id) && data && filter) {
    var arr = ["*"];
    data.forEach((el) => {
      var typeClass = createClassFilter(el);
      if (typeClass !== "" && $("." + typeClass + css + itemCSSFilter).size()) {
        arr.push(typeClass);
      }
    });

    $(`${id} option`).each(function () {
      if (arr.includes($(this).val())) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }
}

function dropdownFilters(filter) {
  var companyCSSFilter = getCSSFilter("#filterCompany");
  var roleCSSFilter = getCSSFilter("#filterRole");
  var departmentCSSFilter = getCSSFilter("#filterDepartment");
  var domainCSSFilter = getCSSFilter("#filterDomain");
  var countryCSSFilter = getCSSFilter("#filterCountry");

  filterOptions(
    "#filterCompany",
    filter.fCompany,
    window.companies,
    roleCSSFilter + departmentCSSFilter + domainCSSFilter + countryCSSFilter,
  );
  filterOptions(
    "#filterRole",
    filter.fRole,
    window.titles,
    companyCSSFilter + departmentCSSFilter + domainCSSFilter + countryCSSFilter,
  );
  filterOptions(
    "#filterDepartment",
    filter.fDepartment,
    window.departments,
    companyCSSFilter + roleCSSFilter + domainCSSFilter + countryCSSFilter,
  );
  filterOptions(
    "#filterDomain",
    filter.fDomain,
    window.domains,
    companyCSSFilter + roleCSSFilter + departmentCSSFilter + countryCSSFilter,
  );
  filterOptions(
    "#filterCountry",
    filter.fCountry,
    window.countries,
    companyCSSFilter + roleCSSFilter + departmentCSSFilter + domainCSSFilter,
  );
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

function initChips() {
  $(".chip-domain ul li").each(function (index) {
    $(this).bind("click", (e) => {
      const anchorClass = createClassFilter($(this).text());
      const domainElt = $("#filterDomain");
      if (domainElt.val() === "*" || domainElt.val() !== anchorClass) {
        domainElt.val(anchorClass).change();
      } else {
        domainElt.val("*").change();
      }
    });
  });
}

function highlightChips() {
  $(".chip-domain ul li").each(function (index) {
    const anchorClass = createClassFilter($(this).text());
    if ($("#filterDomain").val() === anchorClass) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
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
    },
    sortAscending: {
      name: true,
      year: false,
    },
  });

  initTextSearch(msnry);

  /*
    document.querySelector(".resetInput").addEventListener("click", (el) => {
      document.querySelector("#searchInput").value = "";
      document.querySelector(".search-element").classList.remove("resetActive");
      msnry.arrange({
        filter: function (itemElem, itemElem2) {
          return true;
        },
      });
    });
  */

  // SORT BY ALPHABETICALLY
  document.querySelector("#orderByName").addEventListener("click", (e) => {
    if (e.target.classList.contains("active") == false) {
      msnry.arrange({ sortBy: "name" });
      e.target.classList.add("active");
    } else {
      msnry.arrange({ sortBy: "original-order" });
      e.target.classList.remove("active");
    }
  });

  /*
    // SORT BY YEAR
    document.querySelector("#orderByYear").addEventListener("click", (e) => {
      if (e.target.classList.contains("active") == false) {
        msnry.arrange({ sortBy: "year" });
        e.target.classList.add("active");
      } else {
        msnry.arrange({ sortBy: "original-order" });
        e.target.classList.remove("active");
      }
    });*/

  $(".filters-container select").each(function (index) {
    $(this).bind("change", (e) => {
      if (e.target.id === "searchInput") {
        return;
      }

      selectors = {
        fCompany: e.target.id !== "filterCompany",
        fRole: e.target.id !== "filterRole",
        fDepartment: e.target.id !== "filterDepartment",
        fDomain: e.target.id !== "filterDomain",
        fCountry: e.target.id !== "filterCountry",
      };

      if (document.getElementById(e.target.id).value === "*") {
        selectors = {
          fCompany: true,
          fRole: true,
          fDepartment: true,
          fDomain: true,
          fCountry: true,
        };
      }

      filterObj[e.target.id] = `${
        e.target.value == "*" ? "" : "." + e.target.value
      }`;
      highlightChips();
      scrollSet = true;
      msnry.arrange({
        filter: concatValues(filterObj),
      });

      e.preventDefault();
    });
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

function horizontalScroll() {
  // Horizontal Scroll
  var sliders = document.querySelectorAll(".chips");
  var isDown = false;
  var startX;
  var scrollLeft;
  sliders.forEach(function (slider) {
    slider.addEventListener("mousedown", function (e) {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", function () {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", function () {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", function (e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - slider.offsetLeft;
      var walk = (x - startX) * 3; //scroll-fast

      slider.scrollLeft = scrollLeft - walk;
      var links = slider.querySelectorAll(".item");

      for (var i = 0; i < links.length; i++) {
        links[i].classList.add("noclick");
      }
    });
  });
}

function autoCloseCalls() {
  const today = Date.parse(new Date());

  $("[data-close-date]").each(function () {
    if ($(this).data("close-date") < today) {
      if ($(this).hasClass("cat-details-primary")) {
        $(this).html(
          '<span class="material-symbols-outlined">warning</span>CLOSED',
        );
      }
      $(this).addClass("closed");
      $(this).removeClass("open");
    }
  });
}

function setDropdown() {
  $.urlParam = function (name) {
    var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
      window.location.href,
    );
    if (results == null) {
      return null;
    }
    return decodeURI(results[1]) || 0;
  };

  if ($.urlParam("status")) {
    $("#filterRole").val($.urlParam("status"));
    return $("#filterRole").change();
  } else if ($.urlParam("target")) {
    $("#filterDomain").val($.urlParam("target"));
    return $("#filterDomain").change();
  } else {
    msnry.arrange({ sortBy: "original-order" });
  }
}

document.addEventListener(
  "html-included",
  () => {
    $("#app").css("visibility", "visible");
    if (init) {
      return;
    }
    init = true;
    autoCloseCalls();
    initSelect();
    initChips();
    filterToggle();
    initSticky();
    horizontalScroll();
    smoothScroll();
    msnry.on("arrangeComplete", (filteredItems) => {
      $("#filteredCompanies").text(filteredItems.length);
      dropdownFilters(selectors);
      highlightChips();
      if (scrollSet) {
        scrollToView();
      }
    });
    setDropdown();
  },
  { once: true },
);
