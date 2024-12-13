function htmlDecode(value) {
  return $("<div/>").html(value).text();
}

function createModalContent(tingleModalData) {
  var modalHtml = "";

  modalHtml += "<div class='info-modal'>";
  modalHtml += '<img class="headshot" src="' + tingleModalData.img + '" />';
  modalHtml += "<div class='credits-modal'>";
  if (tingleModalData.name !== "") {
    modalHtml += "<h1>" + tingleModalData.name + "</h1>";
  }
  if (tingleModalData.position !== "") {
    modalHtml += "<h2>" + tingleModalData.type + "</h2>";
  }

  modalHtml += "</div>";
  modalHtml += "</div>";
  modalHtml += "<div class='bio-modal'>";
  if (tingleModalData.content !== "") {
    modalHtml += htmlDecode(tingleModalData.content);
  }
  modalHtml += "</div>";
  modalHtml += "<div class='details-modal'>";
  modalHtml += "<div class='social-modal'>";

  if (tingleModalData["company-link"] !== "") {
    modalHtml += `<a class="btn-primary" href="${tingleModalData["company-link"]}" target="_blank">
          <span class="material-symbols-outlined icon">language</span>
            Website
      </a>`;
  }

  if (tingleModalData.twitter !== "") {
    modalHtml +=
      '<a class="twitter-link" href="' +
      tingleModalData["twitter"] +
      '" target="_blank"></a>';
  }
  if (tingleModalData.linkedin !== "") {
    modalHtml +=
      '<a class="linkedin-link" href="' +
      tingleModalData["linkedin"] +
      '" target="_blank"></a>';
  }
  modalHtml += "</div>";
  modalHtml += "<div class='tags-modal'>";
  if (tingleModalData.domain) {
    modalHtml += '<p class="domain">' + tingleModalData.domain + "</p>";
  }

  modalHtml += "</div>";

  return modalHtml;
}

function initModal() {
  // Modal
  document.querySelectorAll(".org-bio").forEach(function (el) {
    el.addEventListener("click", function (e) {
      var modal = new tingle.modal({
        footer: true,
        stickyFooter: false,
        closeMethods: ["overlay", "button", "escape"],
        closeLabel: "Close",
        cssClass: ["tingle-modal--fullscreen"],
        onOpen: function () {},
        onClose: function () {},
        beforeClose: function () {
          // here's goes some logic
          // e.g. save content before closing the modal
          return true; // close the modal
        },
      });
      // set content
      modal.setContent(createModalContent(window.modalData[el.dataset.modal]));

      // open modal
      modal.open();
    });
  });
}

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
  return $(itemElem).find(".member-name").text().match(qsRegex);
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

function getCSSExhibitorFilter() {
  var cssFilter = "";
  const exhibitor = document.querySelector("#exhibitor");

  if (exhibitor.checked) {
    cssFilter = ".exhibitor";
  }
  return cssFilter;
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
  var exhibitorCSSFilter = getCSSExhibitorFilter();

  filterOptions(
    "#filterCompany",
    filter.fCompany,
    window.companies,
    roleCSSFilter + exhibitorCSSFilter,
  );
  filterOptions(
    "#filterRole",
    filter.fRole,
    window.titles,
    companyCSSFilter + exhibitorCSSFilter,
  );
}

var msnry;
var selectors = {
  fCompany: true,
  fRole: true,
  fExhibitor: true,
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
      name: ".name",
    },
    sortAscending: {
      name: true,
    },
  });
  msnry.on("arrangeComplete", (filteredItems) => {
    $("#filteredCompanies").text(filteredItems.length);
    /*if (document.activeElement !== document.getElementById("searchInput")) {
      $("html, body").scrollTop($("#searchInput").offset().top + 70);
    }*/
    dropdownFilters(selectors);
  });

  document.querySelector("#exhibitor").addEventListener("click", (el) => {
    if (document.querySelector("#exhibitor").checked) {
      filterObj.fExhibitor = ".exhibitor";
    } else {
      filterObj.fExhibitor = "";
    }

    selectors = {
      fCompany: true,
      fRole: true,
      fExhibitor: false,
    };

    msnry.arrange({
      filter: concatValues(filterObj),
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

  $(".filters-container select").each(function (index) {
    $(this).bind("change", (e) => {
      if (e.target.id === "searchInput") {
        return;
      }

      selectors = {
        fCompany: e.target.id !== "filterCompany",
        fRole: e.target.id !== "filterRole",
        fExhibitor: true,
      };

      if (document.getElementById(e.target.id).value === "*") {
        selectors = {
          fCompany: true,
          fRole: true,
          fExhibitor: true,
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
        },
      );
      return false;
    } // End if
  });
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

function setupIsotope (e){
  e.target.removeEventListener("html-included", setupIsotope, false);

  horizontalScroll();
  smoothScroll();
  initSelect();
  initModal();
  filterToggle();

  msnry.arrange({ sortBy: "original-order" });

}

document.addEventListener("html-included", setupIsotope)
