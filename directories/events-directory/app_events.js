
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
var selectedMonth =  new Number(new Date().toISOString().split('T')[0].replaceAll("-","").substring(0,6)- 1);
var selectedText = "";
var selectedType = "*";
var selectedDomain = "*";



function filterFunction (){
  const month = $(this).data('month');
  const domain = $(this).data('domain');
  const type = $(this).data('type');
  
  if ($(this).hasClass( "month-divider" ) ){
    return month >= selectedMonth;
  }

  if (selectedType !== "*" && type !== selectedType){

    return false;
  }
  if (selectedDomain !== "*" && domain !== selectedDomain){
    return false;
  }


  if (selectedText !=="" ){
      return month >= selectedMonth && inputSearch($(this).html(), selectedText); 
  }



  return month >= selectedMonth;
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
  return itemElem.match(qsRegex);
}


function initTextSearch(msnry) {
  // Search input
  document.querySelector("#searchInput").addEventListener("keyup", (e) => {
    if (e.target.value != "") {
      e.target.parentNode.classList.add("resetActive");
    } else {
      e.target.parentNode.classList.remove("resetActive");
    }
    selectedText = e.target.value;
    msnry.arrange({ sortBy: "original-order" });
  });
}

function initSelect() {

  $("#filterMonth").change(function(){
       selectedMonth = this.value;
       msnry.arrange({ sortBy: "original-order" });
  });
  $("#filterDomain").change(function(){
       selectedDomain = this.value;
       msnry.arrange({ sortBy: "original-order" });
  });
  $("#filterType").change(function(){
       selectedType = this.value;
       msnry.arrange({ sortBy: "original-order" });
  });

  $(`#filterMonth option[value="${selectedMonth}"]`).prop('selected', true)

  msnry = new Isotope(".grid", {
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
    filter: filterFunction,
    masonry: {
      columnWidth: ".grid-sizer",
    }
  });

  initTextSearch(msnry);
}

function initCalendar(){
  var calendarInstance1 = new calendarJs( "calendar1", { 
        exportEventsEnabled: true,
        useAmPmForTimeDisplays: true,
        fullScreenModeEnabled: false,
        showHolidays: false,
        isWidget: false,
        searchOptions:{
          enabled: false
        },
        importEventsEnabled: false,
        configurationDialogEnabled: false,
        tooltipsEnabled: false,
        manualEditingEnabled: false,
        views: {
          fullDay: {
              enabled: false
          },
          fullWeek: {
              enabled: false
          },
          fullMonth: {
             enabled: true
          },
          fullYear: {
              enabled: false
          },
          timeline: {
              enabled: false
          },
          allEvents: {
              enabled: false
          }
        },
        events: {
            onEventClick: (e) => {
                //window.location.href = `./event-details?id=${e.id}`;
                $('#selected-event').html($(`*[data-id="${e.id}"]`).html())
            }
        },
        data : window.eventData
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
  var sliders = document.querySelectorAll(".speakers");
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

function initOnlineEvents() {
  const now = new Date() 
  const events = $('.event-date .online-event');
  $('.event-date .online-event').each((index, value)=> {
      const dateFrom = new Date($(value).parent().data('from'));
      const dateTo = new Date($(value).parent().data('to'));
      const url = $(value).data('url');
      const recording = $(value).data('recording');
      if ( dateTo < now){
        if (recording){
           $(value).addClass('recorded')
           $(value).html(`<a href="${recording}">Watch</a>`)
        } else {
          $(value).addClass('past')
        }
      } else if (dateTo < now && dateFrom > now){
        $(value).addClass('ongoing')
        if (url){
          $(value).html(`<a href="${url}">Join&nbsp;Now</a>`)
        }
      } else {
        $(value).addClass('future');
      }
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

function listViewShow(){
  $("#app").show();
  $("#calendar").hide();
  $(".dropdown-container").show();
  $(".search-element").show();
  $("#selected-event").hide();
  $('#selected-event').html('');
}

function calendarShow(){
 
  $("#calendar").show();
  $("#selected-event").show();
  $(".dropdown-container").hide();
  $(".search-element").hide();
  $("#app").hide();
}

function filterToggle() {
  let isMobile = window.matchMedia("(max-width: 767px)").matches;

  console.log(isMobile)

  if(!isMobile){
    $(".title-filter").removeClass('show')
    $(".filters-container").addClass('show')
    return;
  }

  $(".title-filter").addClass('show');
  $(".filters-container").removeClass('show');




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

function viewToggle() {

  document
    .querySelector("#toggle-on")
    .addEventListener("change", (ev) => {
      const value = $('input[name="toggle"]:checked').val();
      switch (value){
        case "list-view":
          listViewShow();
          break;
        case "calendar":
          calendarShow();
          break;
      }
    });
  document
    .querySelector("#toggle-off")
    .addEventListener("change", (ev) => {
      const value = $('input[name="toggle"]:checked').val();
      switch (value){
        case "list-view":
          listViewShow();
          break;
        case "calendar":
          calendarShow();
          break;
      }
    });
}

document.addEventListener("html-included", () => {

  $("#app").css("visibility", "visible");
  if (init) {
    return;
  }
  init = true;
  listViewShow();
  initSelect();
  filterToggle();
  initCalendar();
  initOnlineEvents();
  horizontalScroll();
  smoothScroll();
  initSticky();
  viewToggle();
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
