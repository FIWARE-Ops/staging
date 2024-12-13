var msnry;
var selectors = { fType: true, fDomain: true, fTech: true, fCompany: true };

// Returns a unique list of element based on a json property(eg. select of companies, or select of technologies)
function createUniqueList(jsonProperty) {
  const emptyList = [];
  let companies = pageData.map((el) => {
    const propertyVal = el[jsonProperty];
    if (Array.isArray(propertyVal)) {
      propertyVal.map((el2) => {
        emptyList.push(el2);
      });
      return emptyList;
    } else {
      return propertyVal;
    }
  });
  companies = emptyList.length > 0 ? emptyList : companies;
  const setOfValue = new Set(companies);
  companies = [...setOfValue].sort();
  return companies;
}

function createUniqueFilteredList(jsonProperty, filteredPageData) {
  const emptyList = [];
  let companies = filteredPageData.map((el) => {
    const propertyVal = el[jsonProperty];
    if (Array.isArray(propertyVal)) {
      propertyVal.map((el2) => {
        emptyList.push(el2);
      });
      return emptyList;
    } else {
      return propertyVal;
    }
  });
  companies = emptyList.length > 0 ? emptyList : companies;
  const setOfValue = new Set(companies);
  companies = [...setOfValue].sort(function (a, b) {
    const regex = /([^a-zA-Z0-9À-ÿ])/gi;
    return a
      .replace(regex, "")
      .toLowerCase()
      .localeCompare(b.replace(regex, "").toLowerCase());
  });
  return companies;
}

// function to repopulate the selects based on fiware member and fiware iHub checkbox
function createUniqueListByFilter() {
  const activeFilters = {
    filterByFiwareMember: document.querySelector("#fiwareMember").checked,
    filterByFiwareIhub: document.querySelector("#fiwareiHub").checked,
  };

  let filteredPageData = [];

  if (activeFilters.filterByFiwareMember && activeFilters.filterByFiwareIhub) {
    window.pageData.forEach((el, i) => {
      if (el.fiwareMember && el.fiwareIhub) {
        filteredPageData.push(el);
      }
    });
  } else if (activeFilters.filterByFiwareMember) {
    window.pageData.forEach((el, i) => {
      if (el.fiwareMember) {
        filteredPageData.push(el);
      }
    });
  } else if (activeFilters.filterByFiwareIhub) {
    window.pageData.forEach((el, i) => {
      if (el.fiwareIhub) {
        filteredPageData.push(el);
      }
    });
  } else {
    filteredPageData = window.pageData;
  }
  return filteredPageData;
}

function initDropdowns() {
  const filteredPageData = createUniqueListByFilter();
  // update Company select
  let companiesSelectTmpl = "<option value='*'>All Organizations</option>";
  createUniqueFilteredList("company", filteredPageData).forEach((el) => {
    const companyClass = createClassFilter(el);
    const selectEl = `<option value="${companyClass}">${el}</option>`;
    companiesSelectTmpl += selectEl;
  });
  document.querySelector("#filterCompany").innerHTML = companiesSelectTmpl;

  // update Technology Select
  let technologiesTmpl = "<option value='*'>All Technologies</option>";
  companiesTechnology = createUniqueFilteredList(
    "technology",
    filteredPageData,
  ).forEach((el) => {
    const techClass = createClassFilter(el);
    const selectEl = `<option value="${techClass}">${el}</option>`;
    technologiesTmpl += selectEl;
  });
  document.querySelector("#filterTechnology").innerHTML = technologiesTmpl;

  // update Type select
  let typesSelectTmpl = "<option value='*'>All Products</option>";
  createUniqueFilteredList("type", filteredPageData).forEach((el) => {
    const typeClass = createClassFilter(el);
    const selectEl = `<option value="${typeClass}">${el}</option>`;
    typesSelectTmpl += selectEl;
  });
  document.querySelector("#filterType").innerHTML = typesSelectTmpl;

  // update Domain select
  let domainsSelectTmpl = "<option value='*'>All Domains</option>";
  createUniqueFilteredList("domain", filteredPageData).forEach((el) => {
    const domainClass = createClassFilter(el);
    const selectEl = `<option value="${domainClass}">${el}</option>`;
    domainsSelectTmpl += selectEl;
  });
  document.querySelector("#filterDomain").innerHTML = domainsSelectTmpl;
}

function dropdownFilters(filter) {
  const filteredPageData = createUniqueListByFilter();
  const itemCSSFilter = ".grid-item:visible";
  let companyCSSFilter = "";
  const currentCompany = $("#filterCompany").val();
  if (currentCompany !== "*") {
    companyCSSFilter = "." + currentCompany;
  }
  let typeCSSFilter = "";
  const currentType = $("#filterType").val();
  if (currentType !== "*") {
    typeCSSFilter = "." + currentType;
  }

  let domainCSSFilter = "";
  const currentDomain = $("#filterDomain").val();
  if (currentDomain !== "*") {
    domainCSSFilter = "." + currentDomain;
  }

  let techCSSFilter = "";
  const currentTech = $("#filterTechnology").val();
  if (currentTech !== "*") {
    techCSSFilter = "." + currentTech;
  }

  // update Company select
  if (filter.fCompany) {
    const companyNameArr = ["*"];
    createUniqueFilteredList("company", filteredPageData).forEach((el) => {
      const companyClass = createClassFilter(el);
      if (
        $(
          "." +
            companyClass +
            domainCSSFilter +
            typeCSSFilter +
            techCSSFilter +
            itemCSSFilter,
        ).size()
      ) {
        companyNameArr.push(companyClass);
      }
    });

    $("#filterCompany option").each(function () {
      if (companyNameArr.includes($(this).val())) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  // update Type select
  if (filter.fType) {
    const typesArr = ["*"];
    createUniqueFilteredList("type", filteredPageData).forEach((el) => {
      const typeClass = createClassFilter(el);
      if (
        $(
          "." +
            typeClass +
            domainCSSFilter +
            companyCSSFilter +
            techCSSFilter +
            itemCSSFilter,
        ).size()
      ) {
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
  if (filter.fDomain) {
    const companyDomainArr = ["*"];
    createUniqueFilteredList("domain", filteredPageData).forEach((el) => {
      const domainClass = createClassFilter(el);
      if (
        $(
          "." +
            domainClass +
            typeCSSFilter +
            companyCSSFilter +
            techCSSFilter +
            itemCSSFilter,
        ).size()
      ) {
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
  if (filter.fTech) {
    const companiesTechnologyArr = ["*"];
    createUniqueFilteredList("technology", filteredPageData).forEach((el) => {
      const techClass = createClassFilter(el);
      if (
        $(
          "." +
            techClass +
            typeCSSFilter +
            companyCSSFilter +
            domainCSSFilter +
            itemCSSFilter,
        ).size()
      ) {
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

// Returns a list of <li> for companies' technologies or domains
function createList(elements) {
  let list = "";
  elements.forEach((element) => {
    list += `<li>${element}</li>`;
  });
  return list;
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

// Check if a company is Fiware member and return the right className for isotope card filtering system
function isFiwareMemberClass(data) {
  return data == true ? "isFiwareMember" : "";
}

// Check if a company is Fiware iHub and return the right className for isotope card filtering system
function isFiwareIhubClass(data) {
  return data == true ? "isFiwareIhub" : "";
}

// print technology

function printTecnology(data) {
  if (data.length != 0) {
    return `<div class="chip-technology">
        <p class="label-card">Technology</p>
        <ul class="chips">${createList(data)}</ul>
        <span class="chips-gradient"></span>
      </div>`;
  } else {
    return "";
  }
}

// print domain

function printDomain(data) {
  if (data.length != 0) {
    return `<div class="chip-domain">
        <p class="label-card">Domain</p>
        <ul class="chips">${createList(data)}</ul>
        <span class="chips-gradient"></span>
    </div>`;
  } else {
    return "";
  }
}

function buildTracker(
  action,
  context,
  type,
  product,
  company,
  excerpt,
  url,
  geoLocation,
) {
  const eventObj = {
    actor: {
      type: "User",
      id: "System",
      attributes: { name: "John Doe", geoLocation },
    },
    action: {
      type: "action",
      name: action,
      attributes: { referrer: "Facebook", coupon: "KIHSK123FS" },
    },
    context,
    object: {
      type,
      name: company,
      attributes: {
        url,
        "company name": company,
        description: excerpt,
        indexforsearch: true,
      },
    },
  };

  if (this.qualetics) {
    console.log(action, "SENDING TO QUALETICS");
    this.qualetics.send(eventObj);
  } else {
    console.log(action, eventObj);
  }
}

// "click"

// Card tracking
function cardTracking() {
  $(document).on("mouseenter", "a.details", function (ev) {
    const product = $(this).parent().parent().find(".solution-name").text();
    const path = window.location.pathname.replace("/showcase", "");
    const company = $(this).parent().parent().find(".name").text();
    const description = $(this).parent().parent().find(".excerpt").text();
    const url = `fiware.org${path}${createClassFilter(
      company,
    )}/${createClassFilter(product)}.html`;

    const context = {
      type: "Showcase",
      name: "View Showcase Solution",
      attributes: {
        url,
        "company name": company,
      },
    };

    buildTracker(
      "View Showcase Solution",
      context,
      $(this).data("type"),
      product,
      company,
      description,
      url,
      window.geoLocation,
    );
  });

  $(document).on("change", ".filter-element select", function (ev) {
    const path = window.location.pathname.replace("/showcase", "");
    const url = `fiware.org${path}`;
    const type = $("#filterType option:selected").text();
    const domain = $("#filterDomain option:selected").text();
    const technology = $("#filterTechnology option:selected").text();
    const company = $("#filterCompany option:selected").text();

    const context = {
      type: "Showcase",
      name: "Select Showcase Solution",
      attributes: {
        url,
        "company name": company,
      },
    };

    buildTracker(
      "Select",
      context,
      type,
      "",
      company,
      `Search for ${domain} and ${technology}`,
      url,
      window.geoLocation,
    );
  });
}

function webp(url) {
  return url.substring(0, url.lastIndexOf(".")) + ".webp";
}

// Card creation
function cardCreation() {
  const appContainer = document.querySelector("#app");
  let appContainerTmpl = "";
  pageData.forEach((gridElementData, i) => {
    const gridElement = `<div class="grid-item ${createClassFilter(
      gridElementData.domain,
    )} ${createClassFilter(gridElementData.technology)} ${createClassFilter(
      gridElementData.company,
    )} ${createClassFilter(gridElementData.type)} ${isFiwareMemberClass(
      gridElementData.fiwareMember,
    )} ${isFiwareIhubClass(gridElementData.fiwareIhub)}">
    <div class="gridElementLogoContainer">
        <picture>
           <source srcset="${webp(gridElementData.logoUrl)}" type="image/webp"/>
           <img class="gridElementLogo" src="${gridElementData.logoUrl}" loading="lazy" alt="${gridElementData.company}"/>
        </picture>
    </div>
    <div class="gridElementTextContainer">
      <p class="solution-name">${gridElementData.name}</p>
      <div class="company-certified">
      <h3 class="name">${gridElementData.company}</h3>
      <div class="label-certification"><span class="material-symbols-outlined" id="ico-featured">verified</span> <span class="year">${
        gridElementData.year
      }</span></div>
      </div>
      <p class="excerpt">${gridElementData.content}</p>
    </div>
    <div class="gridElementTechnologyDomain">
      <div class="chip-technology-domain">
      
        ${printTecnology(gridElementData.technology)}    
      
      
        ${printDomain(gridElementData.domain)}

      </div>
    </div>
    <div class="foot">
    <a class="details" 
      data-type="${createClassFilter(gridElementData.type)}" 
      href="${
        gridElementData.companyLink
      }"><span id="ico-info" class="material-symbols-outlined">info</span> See details</a>
    </div>
  </div>`;

    appContainerTmpl += gridElement;
    //appContainer.insertAdjacentHTML("beforeend", gridElement);
  });
  appContainer.innerHTML = appContainerTmpl;
  document.getElementById("filteredCompanies").innerText = pageData.length;
}

// Isotope istantiation

function initCards() {
  msnry = new Isotope(".grid", {
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    masonry: {
      columnWidth: ".grid-sizer",
    },
    getSortData: {
      name: ".name",
      year: ".year",
    },
  });

  msnry.on("arrangeComplete", (filteredItems) => {
    document.getElementById("filteredCompanies").innerText =
      filteredItems.length;
    if (document.activeElement !== document.getElementById("searchInput")) {
      // $('html, body').animate({ 'scrollTop': $('#searchInput').offset().top + 70}, 200);
      $("html, body").scrollTop($("#searchInput").offset().top + 70);
    }
    dropdownFilters(selectors);
  });
}

// Main wrapper of filter functions
const filterFunctions = {
  hasClass: (itemElem, selectorStringClass) => {
    if (selectorStringClass == "") {
      return true;
    } else {
      return itemElem.classList.contains(selectorStringClass);
    }
  },
  inputSearch: (itemElem, textString) => {
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
  },
};

// Search input
document.querySelector("#searchInput").addEventListener("keyup", (e) => {
  if (e.target.value != "") {
    e.target.parentNode.classList.add("resetActive");
  } else {
    e.target.parentNode.classList.remove("resetActive");
  }
  msnry.arrange({
    filter(itemElem, itemElem2) {
      return filterFunctions.inputSearch(itemElem2, e.target.value);
    },
  });
});

document.querySelector(".resetInput").addEventListener("click", (el) => {
  document.querySelector("#searchInput").value = "";
  document.querySelector(".search-element").classList.remove("resetActive");
  msnry.arrange({
    filter(itemElem, itemElem2) {
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

const filterObj = {};

const updateFilterObj = (targetIdKey, targetValue) => {
  let filterSafeValue;
  if (targetIdKey == "fiwareMember") {
    createUniqueListByFilter();
    if (document.querySelector("#" + targetIdKey).checked) {
      filterSafeValue = ".isFiwareMember";
    } else if (!document.querySelector("#" + targetIdKey).checked) {
      filterSafeValue = "";
    }
  } else if (targetIdKey == "fiwareiHub") {
    createUniqueListByFilter();

    if (document.querySelector("#" + targetIdKey).checked) {
      filterSafeValue = ".isFiwareIhub";
    } else if (!document.querySelector("#" + targetIdKey).checked) {
      filterSafeValue = "";
    }
  } else {
    filterSafeValue = targetValue == "*" ? "" : "." + targetValue;
  }
  filterObj[targetIdKey] = `${filterSafeValue}`;
  const filterValue = concatValues(filterObj);
  filterSetter(filterValue);
};

var filterSetter = (filterValue) => {
  msnry.arrange({
    filter: filterValue,
  });
};

document.querySelector(".filters-container").addEventListener("change", (e) => {
  if (e.target.id === "searchInput") {
    return;
  }

  selectors = {
    fType: e.target.id !== "filterType",
    fDomain: e.target.id !== "filterDomain",
    fTech: e.target.id !== "filterTechnology",
    fCompany: e.target.id !== "filterCompany",
  };

  if (document.getElementById(e.target.id).value === "*") {
    selectors = {
      fType: true,
      fDomain: true,
      fTech: true,
      fCompany: true,
    };
  }
  updateFilterObj(e.target.id, e.target.value);
});

function concatValues(obj) {
  let value = "";
  for (const prop in obj) {
    value += obj[prop];
  }
  return value;
}

// toggle filter menu only on mobile
if (window.innerWidth <= 980) {
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

function smoothScroll() {
  // Smooth scroll
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
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
  });
}

function horizontalScroll() {
  // Horizontal Scroll
  const sliders = document.querySelectorAll(".speakers");
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

$ = $ || jQuery;
function loadProducts() {
  horizontalScroll();
  smoothScroll();
  initDropdowns();
  cardCreation();
  cardTracking();
  initCards();
  $("#app")
    .imagesLoaded()
    .always(function (instance) {
      msnry.arrange({ sortBy: "original-order" });
    });
}
