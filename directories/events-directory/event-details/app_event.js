function createModalContent(tingleModalData) {
  var modalHtml = "";

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
      tingleModalData["twitter"] +
      '" target="_blank"></a>';
  }
  if (tingleModalData.linkedin !== "") {
    modalHtml +=
      '<a class="linkedin-link" href="' +
      tingleModalData["linkedin"] +
      '" target="_blank"></a>';
  }
  if (tingleModalData.flag !== "") {
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


function initModal() {
  // Modal
  document.querySelectorAll(".speaker").forEach(function (el) {
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

function wrapImage(id, width, height, src) {
  var img = "";

  if (width) {
    img =
      img +
      `<span class="et_pb_image">
                <img class="wp-image-100287" loading="lazy" 
                width="${width}" height="${height}" src="${src}"/>
            </span>`;
  } else {
    img =
      img +
      `<span class="et_pb_image">
                <img class="hero-product" src="${src}"/>
            </span>`;
  }

  $(id).empty();
  $(id).append(img);
  $(id + " span")
    .hide()
    .show(0);
  //}
}

function wrapEventBrite (id, event){
  const now = new Date();
  const dateTo = event.endDate ? new Date(event.endDate) : new Date (new Date(event.startDate).getTime() + 86400000);
  const eventOver = (dateTo < now);
  if (event.eventBrite !== ''){
    $(id).attr("href", `https://www.eventbrite.com/e/${event.eventBrite}`);
    if (eventOver){
      if (event.recording !== ''){
        $(id).attr("href", event.recording);
        $(id).attr("target", "_blank");
        $(id).text("Watch Recording");
      } else {
        $(id).text("Event Ended");
        $(id).css("background-color", "#b8b5b5");
      }
    }
  } else if (event.website !== ''){
    $(id).attr("href", event.website);
    $(id).attr("target", "_blank");
    $(id).text("Website");
  } else {
    if (eventOver){
        $(id).text("Event Ended");
        $(id).css("background-color", "#b8b5b5");
    } else {
      $(id).parent().empty();
    }
  }
}

function wrapEventDetails (event){
 let dateText = event.shortDateStart;
  if (event.shortDateStart !== event.shortDateEnd){
    dateText += ` - ${event.shortDateEnd}`
  }
  $('#event-date').html(`
    <dt class="event-attribute-label"></dt>
    <dd class="event-date">${dateText}</dd>`);

 if (event.start){
    let timeText = `${event.start} – ${event.end}  ${event.timeZone}`
    $('#event-time').html(`<dt class="event-attribute-label"></dt>
      <dd class="event-time"> ${timeText}</dd>`);
  } else {
      $('#event-time').remove();
  }
  $('dl#event-type').html(`<dt class="event-attribute-label">Type</dt> 
    <dd class="chip-type">
      <ul class="chips">
        <li>${event.type}</li>
      </ul>
    </dd>`);

  var chips ="";
  event.category.forEach((category)=>{
     chips += `<li>${category.replace(' ','&nbsp;')}</li>`;
  })
 

  $('dl#event-category').html(`<dt class="event-attribute-label">Category</dt> 
    <dd class="chip-domain">
      <ul class="chips">
        ${chips}
      </ul>
      <span class='chips-gradient'></span>
    </dd>
    `);
}

function wrapVenueDetails (event){
  if(event.venueName === ''){
    $('#venue-name').remove();
    $('#venue-address').remove();
    $('#venue-website').remove();
    return;
  }
  var venueName = event.venueName;
  if (event.venueLink !== ''){
    venueName = `<a href="${event.venueLink}">${venueName}</a>`
  }
 
  $("#venue-name").html(`<dt class="event-attribute-label"></dt>
      <dd><dt class="tribe-venue">${venueName}</dt></dd>`
  );
  $("#venue-address").html( `
      <dt aria-label="Venue name: This represents the address of the event venue.">
      </dt>
      <dd>
        <div>${event.venueAddress}</div>
        <div>${event.city}</div>
        <div>${event.country}</div>
      </dd>`
  );
  if (event.eventBrite !== '' && event.website !== ''){
    $("#venue-website").html(`<dt class="event-attribute-label"></dt>
      <dd><a href="${event.website}">Event Website</a></dd>
      `
    );
  } else {
    $('#venue-website').remove();
  }
 
}

function wrapSpeakers (id, speakers){

  var div= "";
  speakers.forEach((speaker) => {
      div += `
      <div class="speaker" data-modal="${createClassFilter(speaker.name)}">`;
      if(speaker.img){
           div += `<div class="profile-picture">
                <img decoding="async" alt="${speaker.name}" src="${speaker.img}" loading="lazy">
              </div>`;}
       div += `<div class="speaker-info">
                <div class="speaker-name">${speaker.name}</div>`;
      
      if(speaker.shortJob){
        div += `<div class="speaker-job-title">${speaker.shortJob}</div>`;}
      if(speaker.company){
        div += `<div class="speaker-company">${speaker.company}</div>`;
      }
        div += `<div class="btn-icon">
          <span class="material-symbols-outlined icon cta small">trending_flat</span>
        </div>`;
        div += `</div>
            </div>`;
  })

  if(speakers.length > 0){
    $(id).empty();
    $(id).append(div);
  } else {
    $(id).remove();
  }
}

function wrapParagraphs(id, input) {
  if (input === "") {
    $(id).prev().remove();
    $(id).remove();
    return;
  }
  const html = input;
  $(id).empty();
  $(id).append(html);
}

function addChips(id, items) {
  if (items.length === 0) {
    $(id).parent().remove();
    return;
  }

  $(id).empty();
  items.forEach((el) => {
    var resource = '<li class="resource">' + el + "</li>";
    $(id).append(resource);
  });
}

function addMap(eventDetails){
  if(eventDetails.latitude === ''){
      $('#map').empty();
      return;
  }
  const map = new maplibregl.Map({
      container: 'map',
      style: './style.json',
      maxZoom: 20,
      minZoom: 3,
      attributionControl: false,
      dragRotate: false,
      center: [eventDetails.longitude, eventDetails.latitude],
      zoom: 14
  });

  map.addControl(new maplibregl.NavigationControl());
  map.addControl(new maplibregl.AttributionControl({compact: true}));

  const marker = new maplibregl.Marker()
      .setLngLat([eventDetails.longitude, eventDetails.latitude])
      .addTo(map);
}

function fillJob(eventDetails) {
  if (window.eventDetailsDone) {
    return;
  }
  window.eventDetailsDone = true;
  $("h1#title").text(eventDetails.title);
  wrapImage("#event-cover", 1920, 1080, eventDetails.img);

  wrapEventBrite("#register", eventDetails);
  
  if(eventDetails.speakers.length > 0){
    wrapSpeakers("#speakers", eventDetails.speakers);
  }

  wrapEventDetails(eventDetails)
  wrapVenueDetails(eventDetails)

  wrapParagraphs("#description", eventDetails.description);
  

  const title = eventDetails.title + " - " + eventDetails.type;
  document.title = title;
}

function horizontalScroll() {
  // Horizontal Scroll
  var sliders = document.querySelectorAll(".speakers, .chip-domain .chips");
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

function loadEventDetails() {
  $.urlParam = function (name) {
    var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
      window.location.href,
    );
    if (results == null) {
      return null;
    }
    return decodeURI(results[1]) || 0;
  };

  $("div#back-button").on("click", function (e) {
    e.preventDefault();
    window.history.back();
  });

  if ($.urlParam("id") && window.eventData[$.urlParam("id")]) {
    fillJob(window.eventData[$.urlParam("id")]);
  } else {
    $(".et_pb_section_1").remove();
    $(".et_pb_section_2").css("padding", "2em");
  }

  initialiseStyleBackgroundIntersectionObserver();
  //  });
  //});
}

function initialiseStyleBackgroundIntersectionObserver() {
  const lazyBackgrounds = Array.from(
    document.querySelectorAll("[data-background-image]"),
  );

  if (lazyBackgrounds.length === 0) {
    return;
  }

  let lazyBackgroundObserver;

  const loadBackgroundIfElementOnScreen = (entry) => {
    if (entry.isIntersecting) {
      entry.target.style.backgroundImage = `url('${entry.target.dataset.backgroundImage}')`;
      lazyBackgroundObserver.unobserve(entry.target);
    }
  };

  const observeElementVisibility = (lazyBackground) => {
    lazyBackgroundObserver.observe(lazyBackground);
  };

  const setBackground = (element) => {
    element.style.backgroundImage = `url('${entry.target.dataset.backgroundImage}')`;
  };

  if (typeof window.IntersectionObserver === "function") {
    lazyBackgroundObserver = new IntersectionObserver((entries) => {
      entries.forEach(loadBackgroundIfElementOnScreen);
    });
    lazyBackgrounds.forEach(observeElementVisibility);
  } else {
    lazyBackgrounds.forEach(setBackground);
  }
}

function enableCarousel() {
  $(".owl-carousel").owlCarousel({
    stagePadding: 30,
    loop: false,
    autoplay: false,
    margin: 15,
    nav: true,
    navText: [
      '<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>',
      '<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 3,
      },
      1600: {
        items: 3,
      },
    },
  });
}


document.addEventListener("html-included", () => {

  if ($.urlParam("id") && window.eventData[$.urlParam("id")]) {
    const currentCategories = window.eventData[$.urlParam("id")].category;
    const directMatches = [];
    const categoryMatches = [];
    const allIds = [];

    document.querySelectorAll("#featured .item").forEach(function (el) {
      let categories = $(el).data('category')
      let id = $(el).data('id');
      let directMatch = false;
      let categoryMatch = false;
      if( id !== $.urlParam("id")) {
        currentCategories.forEach((category)=> {
          var catClass = createClassFilter(category);
          if (categories === catClass){
            directMatch = true;
            categoryMatch = false;
          } else if (categories.includes(catClass)){
            categoryMatch = (directMatch === false);
          } 
        });

        if (directMatch){
          directMatches.push(id)
        } else if (categoryMatch){
          categoryMatches.push(id)
        } else {
          allIds.push(id)
        }
      }

     });

    const featuredIds = (directMatches.concat( categoryMatches.concat(allIds))).slice(0, 3);
    document.querySelectorAll("#featured .item").forEach(function (el) {
      if (!featuredIds.includes($(el).data('id'))) {
        $(el).remove();
      } 
    });
  }
  enableCarousel();
});
    
document.addEventListener("data-ready", () => {
  loadEventDetails();
  horizontalScroll();
  initModal();
}, {once: true});

$ = $ || jQuery;
$(document).ready(function(){
  if ($.urlParam("id") && window.eventData[$.urlParam("id")]) {
    addMap(window.eventData[$.urlParam("id")]);

  }
})
