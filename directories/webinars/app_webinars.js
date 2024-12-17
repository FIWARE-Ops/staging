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

function setClipboard(text) {
  const type = "text/plain";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];

  navigator.clipboard.write(data).then(
    () => {
      /* success */
      alert("Link copied to clipboard");
    },
    () => {
      /* failure */
    },
  );
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

function rating(difficulty) {
  let result = "";
  for (let i = 0; i < difficulty; i++) {
    result += "★ ";
  }
  return result;
}

function createModalContent(tingleModalData) {
  let modalHtml = "";
  console.warn(tingleModalData);

  modalHtml = `
  <div class="info-modal">
    <div class="credits-modal main-chapter ${tingleModalData.chapter}">
      <h1>${tingleModalData.name}</h1>
        <div class="attributes-modal">
          <div class="label-type">
          ${tingleModalData.badge}
          </div>
          <div class="attributes-container-modal">
            <div class='label-difficulty'>
              <span class="star">${rating(tingleModalData.difficulty)}</span>
            </div>
            <div class='label-broadcast'>
              <span class="material-symbols-outlined">today</span>
              <span class="name">${tingleModalData.year}</span>
            </div>
            <div class="label-duration">
              <span class="material-symbols-outlined">schedule</span>
              <span class="name">${tingleModalData.length} mins</span>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  modalHtml += `<div class='content'>`;
  if (tingleModalData.content !== "") {
    modalHtml += tingleModalData.content
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&");
  }
  modalHtml += `</div><div class="foot-modal">
      <a class="cat-share" onclick="setClipboard('${tingleModalData.social}')">
          <span class="material-symbols-outlined">share</span>
          Share
      </a>
      <a class="cat-details-primary" target="_blank" href="${tingleModalData.video}">
          <span class="material-symbols-outlined">play_arrow</span>
          Watch
      </a>
    </div>
  </div>
</div>`;

  return modalHtml;
}

function initModal() {
  // Modal
  document.querySelectorAll(".cat-info").forEach(function (el) {
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

var scrollSet = false;

var msnry;
var selectors = { fType: true, fDomain: true, fTech: true };
var filterObj = {};

function initSelect() {
  msnry = new Isotope(".grid", {
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    masonry: {
      columnWidth: ".grid-sizer",
    },
    getSortData: {
      difficulty: ".difficulty parseInt",
      season: ".season",
    },
    sortAscending: {
      difficulty: true,
      season: true,
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

  //SORT BY ALPHABETICALLY
  document.querySelector("#orderByName").addEventListener("click", (e) => {
    scrollSet = false;
    if (e.target.classList.contains("active") == false) {
      msnry.arrange({ sortBy: "difficulty" });
      e.target.classList.add("active");
    } else {
      msnry.arrange({ sortBy: "original-order" });
      e.target.classList.remove("active");
    }
    document.querySelector("#orderByYear").classList.remove("active");
  });

  // SORT BY YEAR
  document.querySelector("#orderByYear").addEventListener("click", (e) => {
    scrollSet = false;
    if (e.target.classList.contains("active") == false) {
      msnry.arrange({ sortBy: "season" });
      e.target.classList.add("active");
    } else {
      msnry.arrange({ sortBy: "original-order" });
      e.target.classList.remove("active");
    }
    document.querySelector("#orderByName").classList.remove("active");
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

  if ($.urlParam("chapter")) {
    $("#filterType").val($.urlParam("chapter"));
    return $("#filterType").change();
  } else if ($.urlParam("audience")) {
    $("#filterDomain").val($.urlParam("audience"));
    return $("#filterDomain").change();
  } else if ($.urlParam("keyword")) {
    $("#filterTechnology").val($.urlParam("keyword"));
    return $("#filterTechnology").change();
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
      $("#app").css("visibility", "visible");

      initSelect();
      initChips();
      initModal();
      filterToggle();
      //initSticky();
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
    });
  });
}

document.addEventListener("html-included", setupIsotope);
