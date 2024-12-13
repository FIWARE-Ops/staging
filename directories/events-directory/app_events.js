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

var msnry;
var selectedMonth = getDate();
var selectedText = "";
var selectedType = "*";
var selectedDomain = "*";

function getDate() {
  const date = new Date();
  date.setMonth(date.getMonth());
  return new Number(
    date.toISOString().split("T")[0].replaceAll("-", "").substring(0, 6),
  );
}

function filterFunction() {
  const month = $(this).data("month");
  const domain = $(this).data("domain");
  const type = $(this).data("type");

  if ($(this).hasClass("month-divider")) {
    return month >= selectedMonth;
  }

  if (selectedType !== "*" && type !== selectedType) {
    return false;
  }
  if (selectedDomain !== "*" && !domain.includes(selectedDomain)) {
    return false;
  }

  if (selectedText !== "") {
    return month >= selectedMonth && inputSearch($(this).html(), selectedText);
  }

  return month >= selectedMonth;
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
  return itemElem.match(qsRegex);
}

function initTextSearch(msnry) {
  // Search input
  $("#searchInput").keyup((ev) => {
    if (ev.currentTarget.value != "") {
      $(ev.currentTarget).parent().addClass("resetActive");
    } else {
      $(ev.currentTarget).parent().removeClass("resetActive");
    }
    selectedText = ev.currentTarget.value;
    msnry.arrange({ sortBy: "original-order" });
  });

  $(".resetInput").click(() => {
    $("#searchInput").val("");
    selectedText = "";
    $(".search-element").removeClass("resetActive");
    msnry.arrange({ sortBy: "original-order" });
  });
}

function initSelect() {
  $("#filterMonth").change((ev) => {
    selectedMonth = $(ev.currentTarget).val();
    msnry.arrange({ sortBy: "original-order" });
  });
  $("#filterDomain").change((ev) => {
    selectedDomain = $(ev.currentTarget).val();
    msnry.arrange({ sortBy: "original-order" });
  });
  $("#filterType").change((ev) => {
    selectedType = $(ev.currentTarget).val();
    msnry.arrange({ sortBy: "original-order" });
  });

  msnry = new Isotope(".grid", {
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    filter: filterFunction,
    masonry: {
      columnWidth: ".grid-sizer",
    },
  });

  $(`#filterMonth option[value="${selectedMonth}"]`).prop("selected", true);

  initTextSearch(msnry);
}

function initCalendar() {
  const calendarInstance1 = new calendarJs("calendar1", {
    exportEventsEnabled: true,
    useAmPmForTimeDisplays: true,
    fullScreenModeEnabled: false,
    showHolidays: false,
    isWidget: false,
    searchOptions: {
      enabled: false,
    },
    importEventsEnabled: false,
    configurationDialogEnabled: false,
    tooltipsEnabled: false,
    manualEditingEnabled: false,
    views: {
      fullDay: {
        enabled: false,
      },
      fullWeek: {
        enabled: false,
      },
      fullMonth: {
        enabled: true,
      },
      fullYear: {
        enabled: false,
      },
      timeline: {
        enabled: false,
      },
      allEvents: {
        enabled: false,
      },
    },
    events: {
      onEventClick: (e) => {
        //window.location.href = `./event-details?id=${e.id}`;
        $("#selected-event").html($(`*[data-id="${e.id}"]`).html());
      },
    },
    data: window.eventData,
  });
}

function smoothScroll() {
  // Add smooth scrolling to all links
  jQuery("a").on("click", function (event) {
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
}

function horizontalScroll() {
  // Horizontal Scroll
  const sliders = document.querySelectorAll(".speakers, .chip-domain .chips");
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

function initOnlineEvents() {
  const now = new Date();
  const events = $(".event-date .online-event");
  $(".event-date .online-event").each((index, value) => {
    const dateFrom = new Date($(value).parent().data("from"));
    const dateTo = new Date($(value).parent().data("to"));
    const url = $(value).data("url");
    const recording = $(value).data("recording");
    if (dateTo < now) {
      if (recording) {
        $(value).addClass("recorded");
        $(value).html(`<a target="_blank" href="${recording}">Watch</a>`);
      } else {
        $(value).addClass("past");
      }
    } else if (dateTo < now && dateFrom > now) {
      $(value).addClass("ongoing");
      if (url) {
        $(value).html(`<a target="_blank" href="${url}">Join&nbsp;Now</a>`);
      }
    } else {
      $(value).addClass("future");
    }
  });
}

function initSticky() {
  window.onscroll = onScrollHandler;
  function onScrollHandler() {
    const header = document.getElementById("filter-head");
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

function listViewShow() {
  $("#app").show();
  $("#calendar").hide();
  $(".dropdown-container").show();
  $(".search-element").show();
  $("#selected-event").hide();
  $("#selected-event").html("");
}

function calendarShow() {
  $("#calendar").show();
  $("#selected-event").show();
  $(".dropdown-container").hide();
  $(".search-element").hide();
  $("#app").hide();
}

function filterToggle() {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  if (!isMobile) {
    $(".title-filter").removeClass("show");
    $(".filters-container").addClass("show");
    return;
  }

  $(".title-filter").addClass("show");
  $(".filters-container").removeClass("show");

  const filtersContainer = document.querySelector(".filters-container");
  $("#mobileToggleFilters").click((ev) => {
    $(ev.target).toggleClass("activeButton");

    if ($(".filters-container").hasClass("show")) {
      $("#filter-button-text").html("Show Filters");
      $(".filters-container").removeClass("show");
      $(".filters-container").hide();
    } else {
      $(".filters-container").addClass("show");
      $(".filters-container").show();
      $("#filter-button-text").html("Hide Filters");
    }
  });
}

function viewToggle() {
  $("#toggle-on").change((ev) => {
    const value = $('input[name="toggle"]:checked').val();
    switch (value) {
      case "list-view":
        listViewShow();
        break;
      case "calendar":
        calendarShow();
        break;
    }
  });
  $("#toggle-off").change((ev) => {
    const value = $('input[name="toggle"]:checked').val();
    switch (value) {
      case "list-view":
        listViewShow();
        break;
      case "calendar":
        calendarShow();
        break;
    }
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

  if ($.urlParam("month")) {
    $("#filterMonth").val($.urlParam("month"));
    return $("#filterMonth").change();
  } else if ($.urlParam("type")) {
    $("#filterType").val($.urlParam("type"));
    return $("#filterType").change();
  } else if ($.urlParam("domain")) {
    $("#filterDomain").val($.urlParam("domain"));
    return $("#filterDomain").change();
  } else {
    msnry.arrange({ sortBy: "original-order" });
  }
}

function setupIsotope(e) {
  e.target.removeEventListener("html-included", setupIsotope, false);

  $("#app").css("visibility", "visible");

  listViewShow();
  initSelect();
  filterToggle();
  initCalendar();
  initOnlineEvents();
  horizontalScroll();
  smoothScroll();
  initSticky();
  viewToggle();

  msnry.on("arrangeComplete", (filteredItems) => {
    if (scrollSet) {
      scrollToView();
    }
  });

  setDropdown();
}

document.addEventListener("html-included", setupIsotope);
