function includeHTML(cb) {
  var z, i, elmnt, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            $(`#${elmnt.id}`).html(this.responseText);
          }
          if (this.status == 404) {
            $(`#${elmnt.id}`).html("Page not found.");
          }
          elmnt.removeAttribute("w3-include-html");
          includeHTML(cb);
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (cb) cb();
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
  var typeCSSFilter = getCSSFilter("#filterType");
  var techCSSFilter = getCSSFilter("#filterTech");
  var domainCSSFilter = getCSSFilter("#filterDomain");

  filterOptions(
    "#filterType",
    filter.fType,
    window.types,
    techCSSFilter + domainCSSFilter
  );
  filterOptions(
    "#filterDomain",
    filter.fDomain,
    window.domains,
    typeCSSFilter + techCSSFilter
  );
  filterOptions(
    "#filterTechnology",
    filter.fTech,
    window.technologies,
    typeCSSFilter + domainCSSFilter
  );
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

function createModalContent(tingleModalData) {
  var modalHtml = "";
  console.warn(tingleModalData);

  modalHtml = `
  <div class="info-modal">
    <div class="credits-modal">
      <h1>${tingleModalData.name}</h1>
        <div class="attributes-modal">`;
          if (tingleModalData.badge ) {
 
            modalHtml += `<div class="label-type">
            ${tingleModalData.badge}
            </div>`;
          }
          if (tingleModalData.company ) {
 
            modalHtml += `<div class="label-git-org">
              <span class="material-symbols-outlined">handyman</span>&nbsp;`;
             if (tingleModalData.img) {
               modalHtml += `<img href="${tingleModalData.img}"/>`;
            }
            modalHtml += `<a target="_blank" href="${tingleModalData.gitHubOrg}">${tingleModalData.company}`
            if (tingleModalData.companyType) {
               modalHtml += ` ${tingleModalData.companyType}`;
            }
            modalHtml +=`</a></div>`;
          }
    modalHtml += `</div>
      </div>
    </div>`;

  modalHtml += `<div class='content'>`;
  if (tingleModalData.content !== '') {
    modalHtml += tingleModalData.content.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
  }
  modalHtml += `</div><div class="foot-modal">`;
  if(tingleModalData.gitHub){
    modalHtml +=  `<a class="cat-info" target="_blank" href="${tingleModalData.gitHub}">
        <img class="ico-github" src="">
        GitHub
    </a>`
  }
  if(tingleModalData.docker){
    modalHtml +=  `<a class="cat-info" target="_blank" href="${tingleModalData.docker}">
        <img class="ico-docker" src="">
        Docker
    </a>`
  }

   if(tingleModalData.documentation){
    modalHtml +=  `<a class="cat-info" target="_blank" href="${tingleModalData.documentation}">
        <img class="ico-docs" src="">
        Docs
    </a>`
  }
    
    modalHtml += `</div>
  </div>
</div>`;
  

  return modalHtml;
}

function initModal() {
  // Modal
  document.querySelectorAll(".cat-info, .cat-details").forEach(function (el) {
    el.addEventListener("click", function (e) {
      var modal = new tingle.modal({
        footer: true,
        stickyFooter: false,
        closeMethods: ["overlay", "button", "escape"],
        closeLabel: "Close",
        cssClass: ["tingle-modal--fullscreen"],
        onOpen: function () {
          console.log("modal open");
        },
        onClose: function () {
          console.log("modal closed");
        },
        beforeClose: function () {
          // here's goes some logic
          // e.g. save content before closing the modal
          return true; // close the modal
          return false; // nothing happens
        },
      });
      // set content

      modal.setContent(createModalContent(window.modalData[el.dataset.modal]));

      // open modal
      modal.open();
    });
  });

  $(document).ready(function () {
    $(".f-cat a").on("click", function (e) {
      e.stopPropagation();
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
          "Search and Filter";
        filtersContainer.style.height = "auto";

        let height = filtersContainer.clientHeight + "px";

        filtersContainer.style.height = "0px";

        setTimeout(function () {
          filtersContainer.style.height = height;
        }, 0);
      } else {
        filtersContainer.style.height = "0px";
        document.querySelector("#filter-button-text").innerText =
          "Search and Filter";

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

function getCSSFilter(id) {
  var cssFilter = "";
  var currentType = $(id).val();
  if (currentType !== "*") {
    cssFilter = "." + currentType;
  }
  return document.querySelector(id) ? cssFilter : "";
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

var init = false;
var msnry;
var selectors = { fType: true, fDomain: true, fTech: true };
var filterObj = {};

function initSelect() {
  msnry = new Isotope(".grid", {
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    masonry: {
      columnWidth: ".grid-sizer",
    }
  });

  msnry.on("arrangeComplete", (filteredItems) => {
    $("#filteredCompanies").text(filteredItems.length);
    /*if (document.activeElement !== document.getElementById("searchInput")) {
      $("html, body").scrollTop($("#searchInput").offset().top + 70);
    }*/
    dropdownFilters(selectors);
  });

  initTextSearch(msnry);

  $(".filters-container select").each(function (index) {
    $(this).bind("change", (e) => {
      if (e.target.id === "searchInput") {
        return;
      }

      selectors = {
        fType: e.target.id !== "filterType",
        fDomain: e.target.id !== "filterDomain",
        fTech: e.target.id !== "filterTechnology",
      };

      if (document.getElementById(e.target.id).value === "*") {
        selectors = {
          fType: true,
          fDomain: true,
          fTech: true,
        };
      }

      filterObj[e.target.id] = `${
        e.target.value == "*" ? "" : "." + e.target.value
      }`;
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
        }
      );
      return false;
    } // End if
  });
}

function initFeaturedCarousel() {
  $(".featured-carousel").owlCarousel({
    stagePadding: 0,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
        nav: false,
        dots: true,
        loop: true,
      },
      600: {
        items: 3,
        autoplay: true,
        nav: false,
        dots: true,
        loop: true,
      },
      1000: {
        items: 4,
        autoplay: true,
        nav: false,
        dots: false,
        loop: true,
      },
      1400: {
        items: 4,
        autoplay: true,
        nav: false,
        dots: false,
        loop: true,
      },
      1600: {
        items: 4,
        autoplay: true,
        nav: false,
        dots: false,
        loop: true,
      },
    },
  });
}

function horizontalScroll() {
  // Horizontal Scroll
  var sliders = document.querySelectorAll(".chips, .badges");
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

document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function () {
    // POPULATE THE LISTING
    includeHTML(() => {
      $("#filteredCompanies").text(window.modalData.length);
      horizontalScroll();
      smoothScroll();
      initSelect();
      initModal();
      initFeaturedCarousel();
      filterToggle();
      // Isotope istantiation
      // Relies on unpkg.com/imagesloaded
      var count = 0;
      $('#app').imagesLoaded()
      .always( function( instance ) {
        msnry.arrange({ sortBy: "original-order" })
      })
      .progress( function( instance, image ) {
          count++;
          if ( count % 12 === 0){
            msnry.arrange({ sortBy: "original-order" });
          }
      });
    });
  });
});
