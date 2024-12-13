function createModalContent(tingleModalData) {
  let modalHtml = "";

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

function initModal() {
  // Modal
  document.querySelectorAll(".btn-icon").forEach(function (el) {
    el.addEventListener("click", function (e) {
      const modal = new tingle.modal({
        footer: true,
        stickyFooter: false,
        closeMethods: ["overlay", "button", "escape"],
        closeLabel: "Close",
        cssClass: ["tingle-modal--fullscreen"],
        onOpen() {},
        onClose() {},
        beforeClose() {
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
  let img = "";

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

function wrapEventBrite(id, event) {
  const now = new Date();
  const dateTo = event.endDate
    ? new Date(event.endDate)
    : new Date(new Date(event.startDate).getTime() + 86400000);
  const eventOver = dateTo < now;

  if (eventOver) {
    if (event.recording !== "") {
      $(id).attr("href", event.recording);
      $(id).attr("target", "_blank");
      $(id).text("Watch Recording");
    } else {
      $(id)
        .parent()
        .append(
          "<span style='background-color:#b8b5b5' class='et_pb_button et_pb_button_0 et_pb_bg_layout_light'>Event Ended</span>",
        );
      $(id).remove();
    }
    return;
  }

  if (event.eventBrite !== "") {
    $(id).attr("href", `https://www.eventbrite.com/e/${event.eventBrite}`);
  } else if (event.website !== "" && !eventOver) {
    $(id).attr("href", event.website);
    $(id).attr("target", "_blank");
    $(id).text("Website");
  }
}

function wrapEventDetails(event) {
  let dateText = event.shortDateStart;
  if (event.shortDateStart !== event.shortDateEnd) {
    dateText += ` - ${event.shortDateEnd}`;
  }
  $("#event-date").html(`
    <dt class="event-attribute-label"></dt>
    <dd class="event-date">${dateText}</dd>`);

  if (event.start) {
    const timeText = `${event.start} – ${event.end}  ${event.timeZone}`;
    $("#event-time").html(`<dt class="event-attribute-label"></dt>
      <dd class="event-time"> ${timeText}</dd>`);
  } else {
    $("#event-time").remove();
  }
  $("dl#event-type").html(`<dt class="event-attribute-label">Type</dt> 
    <dd class="chip-type">
      <ul class="chips">
        <li>${event.type}</li>
      </ul>
    </dd>`);

  let chips = "";
  event.category.forEach((category) => {
    chips += `<li>${category.replace(" ", "&nbsp;")}</li>`;
  });

  $("dl#event-category").html(`<dt class="event-attribute-label">Category</dt> 
    <dd class="chip-domain">
      <ul class="chips">
        ${chips}
      </ul>
      <span class='chips-gradient'></span>
    </dd>
    `);
}

function wrapVenueDetails(event) {
  const now = new Date();
  const dateTo = event.endDate
    ? new Date(event.endDate)
    : new Date(new Date(event.startDate).getTime() + 86400000);
  const eventOver = dateTo < now;

  if (event.venueName === "") {
    $("#venue-name").remove();
    $("#venue-address").remove();
    $("#venue-website").remove();
    return;
  }
  let venueName = event.venueName;
  if (event.venueLink !== "") {
    venueName = `<a href="${event.venueLink}" target="_blank">${venueName}</a>`;
  }

  $("#venue-name").html(`<dt class="event-attribute-label"></dt>
      <dd><dt class="tribe-venue">${venueName}</dt></dd>`);
  $("#venue-address").html(`
      <dt aria-label="Venue name: This represents the address of the event venue.">
      </dt>
      <dd>
        <div>${event.venueAddress}</div>
        <div>${event.city}</div>
        <div>${event.country}</div>
      </dd>`);

  if (event.website !== "" && (eventOver || event.eventBrite !== "")) {
    $("#venue-website").html(`<dt class="event-attribute-label"></dt>
      <dd><a href="${event.website}" target="_blank">Event Website</a></dd>`);
  } else {
    $("#venue-website").remove();
  }

  $("#venue-website").html(`<dt class="event-attribute-label"></dt>
      <dd><a href="${event.website}" target="_blank">Event Website</a></dd>`);
}

function wrapSpeakers(id, speakers) {
  let div = "";
  speakers.forEach((speaker) => {
    div += `
      <div class="speaker">`;
    if (speaker.img) {
      div += `<div class="profile-picture-container">
                <img class="profile-picture" decoding="async" alt="${speaker.name}" src="${speaker.img}">
              </div>`;
    }
    div += `<div class="speaker-info">
                <div class="speaker-name">${speaker.name}</div>`;

    if (speaker.shortJob) {
      div += `<div class="speaker-job-title">${speaker.shortJob}</div>`;
    }
    if (speaker.company) {
      div += `<div class="speaker-company">${speaker.company}</div>`;
    }
    div += `<div class="btn-icon" data-modal="${createClassFilter(
      speaker.name,
    )}">
          <span class="material-symbols-outlined icon cta small">trending_flat</span>
        </div>`;
    div += `</div>
            </div>`;
  });

  if (speakers.length > 0) {
    $(id).empty();
    $(id).append(div);
    $(id).append('<span class="speakers-gradient"></span>');
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
    const resource = '<li class="resource">' + el + "</li>";
    $(id).append(resource);
  });
}

function addMap(eventDetails) {
  if (eventDetails.latitude === "") {
    $("#map").remove();
    return;
  }
  const map = new maplibregl.Map({
    container: "map",
    style:
      window.mapStyle ||
      "https://www.fiware.org/wp-content/directories/events-directory/event-details/style.json",
    maxZoom: 20,
    minZoom: 3,
    attributionControl: false,
    dragRotate: false,
    center: [eventDetails.longitude, eventDetails.latitude],
    zoom: 14,
  });

  map.addControl(new maplibregl.NavigationControl());
  map.addControl(new maplibregl.AttributionControl({ compact: true }));

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

  if (eventDetails.speakers.length > 0) {
    wrapSpeakers("#speakers", eventDetails.speakers);
  }

  wrapEventDetails(eventDetails);
  wrapVenueDetails(eventDetails);

  wrapParagraphs("#description", eventDetails.description);

  const title = eventDetails.title + " - " + eventDetails.type;
  document.title = title;
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

function loadEventDetails() {
  $("div#back-button").on("click", function (e) {
    e.preventDefault();
    window.history.back();
  });

  if (
    $.urlParam("id") &&
    window.eventData &&
    window.eventData[$.urlParam("id")]
  ) {
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
  if (init) {
    return;
  }
  init = true;
  $(".owl-carousel").owlCarousel({
    stagePadding: 30,
    loop: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    margin: 15,
    nav: true,
    navText: [
      '<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>',
      '<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>',
    ],
    responsive: {
      0: {
        items: 1,
        autoplay: true,
        nav: false,
        dots: true,
        loop: true,
      },
      600: {
        items: 2,
        autoplay: true,
        nav: false,
        dots: true,
        loop: true,
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

$ = $ || jQuery;
$.urlParam = function (name) {
  const results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.href,
  );
  if (results == null) {
    return null;
  }
  return decodeURI(results[1]) || 0;
};

function waitForData() {
  return new Promise((resolve) => {
    if (window.eventData) {
      return resolve(window.eventData);
    }
  });
}

$(document).ready(function () {
  waitForData().then((eventData) => {
    if ($.urlParam("id") && eventData && eventData[$.urlParam("id")]) {
      addMap(eventData[$.urlParam("id")]);
    }
  });
});

$(document).one("html-included", () => {
  waitForData().then((eventData) => {
    if ($.urlParam("id") && eventData && eventData[$.urlParam("id")]) {
      const currentCategories = eventData[$.urlParam("id")].category;
      const directMatches = [];
      const categoryMatches = [];
      const allIds = [];

      document.querySelectorAll("#featured .item").forEach(function (el) {
        const categories = $(el).data("category");
        const id = $(el).data("id");
        let directMatch = false;
        let categoryMatch = false;
        if (id !== $.urlParam("id")) {
          currentCategories.forEach((category) => {
            const catClass = createClassFilter(category);
            if (categories === catClass) {
              directMatch = true;
              categoryMatch = false;
            } else if (categories.includes(catClass)) {
              categoryMatch = directMatch === false;
            }
          });

          if (directMatch) {
            directMatches.push(id);
          } else if (categoryMatch) {
            categoryMatches.push(id);
          } else {
            allIds.push(id);
          }
        }
      });

      const featuredIds = directMatches
        .concat(categoryMatches.concat(allIds))
        .slice(0, 3);
      document.querySelectorAll("#featured .item").forEach(function (el) {
        if (!featuredIds.includes($(el).data("id"))) {
          $(el).remove();
        }
      });

      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      if (!isMobile) {
        enableCarousel();
      } else {
        $("#featured").removeClass("owl-carousel");
      }
    }
  });
});

$(document).one("data-ready", () => {
  loadEventDetails();
  horizontalScroll();
  initModal();
});
