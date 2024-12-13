function filterOptions(id, filter, data, css) {
  const itemCSSFilter = ".grid-item:visible";
  // update Type select
  if (document.querySelector(id) && data && filter) {
    const arr = ["*"];
    data.forEach((el) => {
      const typeClass = createClassFilter(el);
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
  const typeCSSFilter = getCSSFilter("#filterType");
  const techCSSFilter = getCSSFilter("#filterTech");
  const domainCSSFilter = getCSSFilter("#filterDomain");

  filterOptions(
    "#filterType",
    filter.fType,
    window.types,
    techCSSFilter + domainCSSFilter,
  );
  filterOptions(
    "#filterDomain",
    filter.fDomain,
    window.domains,
    typeCSSFilter + techCSSFilter,
  );
  filterOptions(
    "#filterTechnology",
    filter.fTech,
    window.technologies,
    typeCSSFilter + domainCSSFilter,
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
      filter(itemElem, itemElem2) {
        return inputSearch(itemElem2, e.target.value);
      },
    });
  });
}

function createModalContent(tingleModalData) {
  let modalHtml = "";
  console.warn(tingleModalData);

  modalHtml = `
  <div class="info-modal">
    <div class="credits-modal main-chapter ${tingleModalData.chapter}">
      <div class="title-modal">
        <h1>${tingleModalData.name}</h1>`;
  if (tingleModalData.company) {
    modalHtml += `<div class="label-git-org">
              <span class="material-symbols-outlined">handyman</span>`;
    modalHtml += `<a target="_blank" href="${tingleModalData.gitHubOrg}">${tingleModalData.company}`;
    if (tingleModalData.companyType) {
      modalHtml += ` ${tingleModalData.companyType}`;
    }
    modalHtml += `</a></div>`;
  }
  modalHtml += `</div>
        <div class="attributes-modal">`;
  if (tingleModalData.badge) {
    modalHtml += `<div class="label-type">
            ${tingleModalData.badge}
            </div>`;
  }
  if (tingleModalData.status === "Full") {
    modalHtml += `<div class="label-status">
            <img src="https://www.fiware.org/style/imgs/Badges/Badge_GEStatus_FullMember.svg"/>
            </div>`;
  }
  if (tingleModalData.status === "Incubating") {
    modalHtml += `<div class="label-type">
            <img src="https://www.fiware.org/style/imgs/Badges/Badge_GEStatus_Incubating.svg"/>
            </div>`;
  }

  modalHtml += `</div>
      </div>
    </div>`;

  modalHtml += `<div class='content'>`;
  if (tingleModalData.content !== "") {
    modalHtml += tingleModalData.content
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&");
  }
  modalHtml += `</div>`;

  if (
    tingleModalData.gitHub ||
    tingleModalData.docker ||
    tingleModalData.documentation
  ) {
    modalHtml += `<div class="foot-modal">`;
    if (tingleModalData.gitHub) {
      modalHtml += `<a class="cat-info" target="_blank" href="${tingleModalData.gitHub}">
            <img class="ico-github" src="https://www.fiware.org/wp-content/directories/enablers/images/mark-github.svg">
            GitHub
        </a>`;
    }
    if (tingleModalData.docker) {
      modalHtml += `<a class="cat-info" target="_blank" href="${tingleModalData.docker}">
            <img class="ico-docker" src="https://www.fiware.org/wp-content/directories/enablers/images/mark-docker.svg">
            Docker
        </a>`;
    }

    if (tingleModalData.quay) {
      modalHtml += `<a class="cat-info" target="_blank" href="${tingleModalData.quay}">
            <img class="ico-quay" src="https://www.fiware.org/wp-content/directories/enablers/images/mark-quay.svg">
            quay.io
        </a>`;
    }

    if (tingleModalData.documentation) {
      modalHtml += `<a class="cat-details-primary"" target="_blank" href="${tingleModalData.documentation}">
            <span class="material-symbols-outlined">description</span>
            Docs
        </a>`;
    }
  }

  modalHtml += `</div>
  </div>
</div>`;

  return modalHtml;
}

function initModal() {
  // Modal
  document
    .querySelectorAll(".cat-info[data-modal], .cat-details[data-modal]")
    .forEach(function (el) {
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

        modal.setContent(
          createModalContent(window.modalData[el.dataset.modal]),
        );

        // open modal
        modal.open();
      });
    });

  $(document).ready(function () {
    $(".cat-info").on("click", function (e) {
      const target = $(this.hash);
      if (target.offset()) {
        e.stopPropagation();
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 100,
          },
          10,
        );
        return false;
      }
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
          "Search and Filter";
        filtersContainer.style.height = "auto";

        const height = filtersContainer.clientHeight + "px";

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

// Returns the right classNames for isotope card filtering system
function createClassFilter(data) {
  let filterString = "";
  const regex = /([^a-zA-Z0-9À-ÿ])/gi;
  if (typeof data === "object") {
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
  $(".chip-technology ul li").each(function (index) {
    $(this).bind("click", (e) => {
      const anchorClass = createClassFilter($(this).text());
      const techElt = $("#filterTechnology");

      if (techElt.val() === "*" || techElt.val() !== anchorClass) {
        techElt.val(anchorClass).change();
      } else {
        techElt.val("*").change();
      }
    });
  });

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
  $(".chip-technology ul li").each(function (index) {
    const anchorClass = createClassFilter($(this).text());
    if ($("#filterTechnology").val() === anchorClass) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
  $(".chip-domain ul li").each(function (index) {
    const anchorClass = createClassFilter($(this).text());
    if ($("#filterDomain").val() === anchorClass) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
}

let scrollSet = false;
let msnry;
let selectors = { fType: true, fDomain: true, fTech: true };
const filterObj = {};

function initSelect() {
  msnry = new Isotope(".grid", {
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    masonry: {
      columnWidth: ".grid-sizer",
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

  $("#fiwareMember").bind("change", (e) => {
    // Add member if required.
    if (document.querySelector("#fiwareMember").checked) {
      filterObj.member = ".member";
    } else {
      delete filterObj.member;
    }

    msnry.arrange({
      filter: concatValues(filterObj),
    });
    e.preventDefault();
  });

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

      // Add member if required.
      if (document.querySelector("#fiwareMember").checked) {
        filterObj.member = ".member";
      } else {
        delete filterObj.member;
      }

      scrollSet = true;
      highlightChips();
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
  const sliders = document.querySelectorAll(".chips, .badges");
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

  if ($.urlParam("type")) {
    $("#filterType").val($.urlParam("type"));
    return $("#filterType").change();
  } else if ($.urlParam("domain")) {
    $("#filterDomain").val($.urlParam("domain"));
    return $("#filterDomain").change();
  } else if ($.urlParam("domain")) {
    $("#filterTechnology").val($.urlParam("technology"));
    return $("#filterTechnology").change();
  } else {
    msnry.arrange({ sortBy: "original-order" });
  }
}

function setupIsotope(e) {
  e.target.removeEventListener("html-included", setupIsotope, false);
  $("#filteredCompanies").text(window.modalData.length);
  horizontalScroll();
  smoothScroll();
  initSelect();
  initChips();
  initModal();
  initFeaturedCarousel();
  filterToggle();
  initSticky();

  msnry.on("arrangeComplete", (filteredItems) => {
    $("#filteredCompanies").text(filteredItems.length);
    dropdownFilters(selectors);
    highlightChips();
    if (scrollSet) {
      scrollToView();
    }
  });
  setDropdown();
}

document.addEventListener("html-included", setupIsotope);
