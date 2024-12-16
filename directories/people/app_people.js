// Returns the right classNames for isotope card filtering system
function createClassFilter(data) {
  let filterString = "";
  const regex = /([^a-zA-Z0-9À-ÿ])/gi;
  if (typeof data === "object") {
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
  const stopwords = /\b(FIWARE|IoT|Smart|Solution|Product|Device)\b/gi;
  const words = textString.trim().replaceAll(stopwords, "").split(/[ ,]+/);
  const regex = [];
  words.forEach(function (currentValue, index) {
    if (currentValue.trim() != "") {
      regex.push("(" + currentValue.trim() + ")");
    }
  });
  const qsRegex = new RegExp(regex.join("|"), "gi");
  return itemElem.innerText.match(qsRegex);
}

function concatValues(obj) {
  let value = "";
  for (const prop in obj) {
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
      filter(itemElem, itemElem2) {
        return inputSearch(itemElem2, e.target.value);
      },
    });
  });
}

function filterToggle() {
  const filtersContainer = document.querySelector(".filters-container");
  document
    .querySelector("#mobileToggleFilters")
    .addEventListener("click", (ev) => {
      ev.target.classList.toggle("activeButton");

      if (!filtersContainer.classList.contains("active")) {
        filtersContainer.classList.add("active");
        document.querySelector("#filter-button-text").innerText =
          "Hide Filters";
        filtersContainer.style.height = "auto";

        const height = filtersContainer.clientHeight + "px";

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
  let cssFilter = "";
  const currentType = $(id).val();
  if (currentType !== "*") {
    cssFilter = "." + currentType;
  }
  return document.querySelector(id) ? cssFilter : "";
}

function filterOptions(id, filter, data, css) {
  const itemCSSFilter = ".grid-item:visible";
  // update Type select
  if (document.querySelector(id) && data && filter) {
    const arr = ["*"];
    data.forEach((el) => {
      const typeClass = createClassFilter(el);
      if (typeClass !== "" && $("." + typeClass + css + itemCSSFilter).length) {
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
  const companyCSSFilter = getCSSFilter("#filterCompany");
  const roleCSSFilter = getCSSFilter("#filterRole");
  const departmentCSSFilter = getCSSFilter("#filterDepartment");
  const domainCSSFilter = getCSSFilter("#filterDomain");
  const countryCSSFilter = getCSSFilter("#filterCountry");

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

function createModalContent(tingleModalData) {
  let modalHtml = "";
  console.warn(tingleModalData);

  modalHtml += "<div class='info-modal'>";
  modalHtml += '<img class="headshot" src="' + tingleModalData.img + '" />';
  modalHtml += "<div class='credits-modal'>";
  if (tingleModalData.name !== "") {
    modalHtml += "<h1>" + tingleModalData.name + "</h1>";
  }
  if (tingleModalData.position !== "") {
    modalHtml += "<h2>" + tingleModalData.position + "</h2>";
  }
  if (tingleModalData.company !== "") {
    modalHtml +=
      '<a class="company-link" href="' +
      tingleModalData["company-link"] +
      '" target="_blank">' +
      tingleModalData.company +
      "</a>";
  }
  modalHtml += "</div>";
  modalHtml += "</div>";
  modalHtml += "<div class='bio-modal'>";
  if (tingleModalData.content !== "") {
    modalHtml += "<p>" + tingleModalData.content + "</p>";
  }
  modalHtml += "</div>";
  modalHtml += "<div class='details-modal'>";
  modalHtml += "<div class='social-modal'>";

  if (tingleModalData.twitter !== "") {
    modalHtml +=
      '<a class="twitter-link" href="' +
      tingleModalData.twitter +
      '" target="_blank"></a>';
  }
  if (tingleModalData.linkedin !== "") {
    modalHtml +=
      '<a class="linkedin-link" href="' +
      tingleModalData.linkedin +
      '" target="_blank"></a>';
  }
  if (tingleModalData.flag) {
    modalHtml += `<img class="flag"  src="${tingleModalData.flag}"/>`;
  }
  modalHtml += "</div>";
  modalHtml += "<div class='tags-modal'>";
  if (tingleModalData.domain) {
    modalHtml += '<p class="domain">' + tingleModalData.domain + "</p>";
  }
  /*
  if (tingleModalData.location) {
    modalHtml += '<p class="location">' + tingleModalData.location + "</p>";
  }*/
  modalHtml += "</div>";

  return modalHtml;
}

function initModal() {
  // Modal
  document.querySelectorAll(".cat-bio").forEach(function (el) {
    el.addEventListener("click", function (e) {
      const modal = new tingle.modal({
        footer: true,
        stickyFooter: false,
        closeMethods: ["overlay", "button", "escape"],
        closeLabel: "Close",
        cssClass: ["tingle-modal--fullscreen"],
        onOpen() {
          //console.log("modal open");
        },
        onClose() {
          //console.log("modal closed");
        },
        beforeClose() {
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

  
    $(".f-cat a").on("click", function (e) {
      const target = $(this.hash);
      if (target.offset()) {
        e.stopPropagation();
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 120,
          },
          10,
        );
        return false;
      }
    });
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
  $(".chip-domain").each(function (index) {
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
  $(".chip-domain").each(function (index) {
    const anchorClass = createClassFilter($(this).text());
    if ($("#filterDomain").val() === anchorClass) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
}

var scrollSet = false;
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
      name: ".name parseInt",
      year: ".year",
    },
    sortAscending: {
      name: true,
      year: false,
    },
  });
  msnry.on("arrangeComplete", (filteredItems) => {
    $("#filteredCompanies").text(filteredItems.length);
    dropdownFilters(selectors);
    highlightChips();
    if (scrollSet) {
      scrollToView();
    }
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
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "" && !$(this.hash).hasClass("grid-item")) {
      // Store hash
      const hash = this.hash;

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
  const sliders = document.querySelectorAll(".chips");
  let isDown = false;
  let startX;
  let scrollLeft;
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
      if (!isDown) {
        return;
      }
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast

      slider.scrollLeft = scrollLeft - walk;
      const links = slider.querySelectorAll(".item");

      for (let i = 0; i < links.length; i++) {
        links[i].classList.add("noclick");
      }
    });
  });
}

function setDropdown() {
  $.urlParam = function (name) {
    const results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
      window.location.href,
    );
    if (results == null) {
      return null;
    }
    return decodeURI(results[1]) || 0;
  };

  if ($.urlParam("country")) {
    $("#filterCountry").val($.urlParam("country"));
    return $("#filterCountry").change();
  } else if ($.urlParam("level")) {
    $("#filterRole").val($.urlParam("role"));
    return $("#filterRole").change();
  } else if ($.urlParam("domain")) {
    $("#filterDomain").val($.urlParam("domain"));
    return $("#filterDomain").change();
  } else if ($.urlParam("company")) {
    $("#filterCompany").val($.urlParam("company"));
    return $("#filterCompany").change();
  } else {
    msnry.arrange({ sortBy: "original-order" });
  }
}

function waitForData() {
  return new Promise((resolve) => {
     function checkCondition() {
      if (window.modalData) {
        resolve();
      } else {
        console.log('x')
        setTimeout(checkCondition, 500);
      }
    }
    checkCondition();
  });
}

function setupIsotope(e) {

  e.target.removeEventListener("html-included", setupIsotope, false);
  $(document).ready(function () {
    waitForData().then(() => {
      $("#filteredCompanies").text(window.modalData.length);
      horizontalScroll();
      smoothScroll();
      $("#app").css("visibility", "visible");
      initSelect();
      initChips();
      initModal();
      filterToggle();

      msnry.on("arrangeComplete", (filteredItems) => {
        $("#filteredCompanies").text(filteredItems.length);
        dropdownFilters(selectors);
        highlightChips();
        if (scrollSet) {
          scrollToView();
        }
      });
      setDropdown();
    });
  });
}

document.addEventListener("html-included", setupIsotope);
