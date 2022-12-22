function defer(method) {
  if (window.jQuery) {
    method();
  } else {
    setTimeout(function () {
      defer(method);
    }, 50);
  }
}

function includeHTML(cb) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          elmnt.removeAttribute("w3-include-html");
          w3.includeHTML(cb);
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (cb) cb();
};

function initDropdowns () {
 
  // update Technology Select
  var technologiesTmpl = "<option value='*'>All Keywords</option>";
  window.technologies.forEach((el) => {
    var techClass = createClassFilter(el);
    var selectEl = `<option value="${techClass}">${el}</option>`;
    technologiesTmpl += selectEl;
  });
  document.querySelector("#filterTechnology").innerHTML = technologiesTmpl;

  // update Type select
  var typesSelectTmpl = "<option value='*'>All Chapters</option>";
  window.types.forEach((el) => {
    var typeClass = createClassFilter(el);
    var selectEl = `<option value="${typeClass}">${el}</option>`;
    typesSelectTmpl += selectEl;
  });
  document.querySelector("#filterType").innerHTML = typesSelectTmpl;

  // update Domain select
  var domainsSelectTmpl = "<option value='*'>All Audiences</option>";
  window.domains.forEach((el) => {
    var domainClass = createClassFilter(el);
    var selectEl = `<option value="${domainClass}">${el}</option>`;
    domainsSelectTmpl += selectEl;
  });
  document.querySelector("#filterDomain").innerHTML = domainsSelectTmpl;
}

function dropdownFilters (filter)  {
  var itemCSSFilter = ".grid-item:visible";
  var typeCSSFilter = "";
  var currentType = jQuery("#filterType").val();
  if (currentType !== "*") {
    typeCSSFilter = "." + currentType;
  }

  var domainCSSFilter = "";
  var currentDomain = jQuery("#filterDomain").val();
  if (currentDomain !== "*") {
    domainCSSFilter = "." + currentDomain;
  }

  var techCSSFilter = "";
  var currentTech = jQuery("#filterTechnology").val();
  if (currentTech !== "*") {
    techCSSFilter = "." + currentTech;
  }

  // update Type select
  if (window.types && filter.fType) {
    var typesArr = ["*"];
    window.types.forEach((el) => {
      var typeClass = createClassFilter(el);
      if (typeClass !== '' && jQuery("." + typeClass + domainCSSFilter + techCSSFilter + itemCSSFilter).size()) {
        typesArr.push(typeClass);
      }
    });
    $("#filterType option").each(function () {
      if (typesArr.includes($(this).val())) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  // update Domain select
  if (window.domains && filter.fDomain) {
    var companyDomainArr = ["*"];
    window.domains.forEach((el) => {
      var domainClass = createClassFilter(el);
      if (domainClass !== '' && jQuery("." + domainClass + typeCSSFilter + techCSSFilter + itemCSSFilter).size()) {
        companyDomainArr.push(domainClass);
      }
    });
    $("#filterDomain option").each(function () {
      if (companyDomainArr.includes($(this).val())) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  // update Technology Select
  if (window.technologies &&  filter.fTech) {
    var companiesTechnologyArr = ["*"];
    window.technologies.forEach((el) => {
      var techClass = createClassFilter(el);
      if (techClass !== '' && jQuery("." + techClass + typeCSSFilter + domainCSSFilter + itemCSSFilter).size()) {
        companiesTechnologyArr.push(techClass);
      }
    });
    $("#filterTechnology option").each(function () {
      if (companiesTechnologyArr.includes($(this).val())) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }
}
  
// Returns the right classNames for isotope card filtering system
function createClassFilter(data) {
  var filterString = "";
  var regex = /([^a-zA-Z0-9À-ÿ])/gi;
  if (typeof data == "object") {
    data.forEach((element, i) => {
      if (i + 1 === data.length) {
        filterString += `${element.toLowerCase().replace(regex, "-")}`;
      } else {
        filterString += `${element.toLowerCase().replace(regex, "-")} `;
      }
    });
  } else {
    filterString = data.toLowerCase().replace(regex, "-");
  }

  return filterString;
}

function inputSearch (itemElem, textString) {
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

var init = false;
function initSelect() {
  if (init){return;}
  init = true;

    // POPULATE THE INITIAL SELECT
    /* initDropdowns(); */

    // Isotope istantiation
    var msnry;
    var selectors = { fType: true, fDomain: true, fTech: true};
    var filterObj = {};

    // Relies on unpkg.com/imagesloaded
    imagesLoaded(document.querySelector("#app"), function (instance) {
      msnry = new Isotope(".grid", {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
        masonry: {
          columnWidth: ".grid-sizer",
        },
        getSortData: {
          name: ".name parseInt",
          year: ".year",
        },
        sortAscending: {
          name: true,
          year: false
        }
      });

      msnry.on("arrangeComplete", (filteredItems) => {
        if (document.activeElement !== document.getElementById("searchInput")) {
          $("html, body").scrollTop($("#searchInput").offset().top + 70);
        }
        dropdownFilters(selectors);
      });
    });

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

    document.querySelector(".resetInput").addEventListener("click", (el) => {
      document.querySelector("#searchInput").value = "";
      document.querySelector(".search-element").classList.remove("resetActive");
      msnry.arrange({
        filter: function (itemElem, itemElem2) {
          return true;
        },
      });
    });

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

    // SORT BY YEAR
    document.querySelector("#orderByYear").addEventListener("click", (e) => {
      if (e.target.classList.contains("active") == false) {
        msnry.arrange({ sortBy: "year" });
        e.target.classList.add("active");
      } else {
        msnry.arrange({ sortBy: "original-order" });
        e.target.classList.remove("active");
      }
    });

    document.querySelector(".filters-container").addEventListener("change", (e) => {
      if (e.target.id === "searchInput") {
        return;
      }

      selectors = {
        fType: e.target.id !== "filterType",
        fDomain: e.target.id !== "filterDomain",
        fTech: e.target.id !== "filterTechnology"
      };

      if (document.getElementById(e.target.id).value === "*") {
        selectors = {
          fType: true,
          fDomain: true,
          fTech: true
        };
      }

      filterObj[e.target.id] = `${e.target.value == "*" ? "" : "." + e.target.value}`;
      msnry.arrange({
        filter: concatValues(filterObj),
      });
    });



    let filtersContainer = document.querySelector(".filters-container");
    document.querySelector("#mobileToggleFilters").addEventListener("click", (ev) => {
      ev.target.classList.toggle("activeButton");

      if (!filtersContainer.classList.contains("active")) {
        filtersContainer.classList.add("active");
        document.querySelector("#filter-button-text").innerText = "Hide Filters";
        filtersContainer.style.height = "auto";

        let height = filtersContainer.clientHeight + "px";

        filtersContainer.style.height = "0px";

        setTimeout(function () {
          filtersContainer.style.height = height;
        }, 0);
      } else {
        filtersContainer.style.height = "0px";
        document.querySelector("#filter-button-text").innerText = "Show Filters";

        filtersContainer.addEventListener(
          "transitionend",
          function () {
            filtersContainer.classList.remove("active");
          },
          {
            once: true,
          }
        );
      }
    });
}    

function smoothScroll () { 

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
        }
      );
      return false;
    } // End if
  });
}


function horizontalScroll () { 
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

defer(function () {
  // POPULATE THE LISTING
  jQuery(document).ready(function() {
    includeHTML(function() {
      initSelect();
      horizontalScroll();
      smoothScroll()
    });
  });
});
