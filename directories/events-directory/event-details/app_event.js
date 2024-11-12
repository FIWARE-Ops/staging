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

function wrapEventBrite (id, eventBrite){
  if (eventBrite !== ''){
    $(id).attr("href", `https://www.eventbrite.com/e/${eventBrite}`)
  } else {
    $(id).parent().empty();
  }
}

function wrapEventDetails (event){
  let dateText = event.shortDateStart;
  if (event.shortDateStart !== event.shortDateEnd){
    dateText += ` - ${event.shortDateEnd}`
  }

  var html= `
    <dt class="event-attribute-label"> Date: </dt>
    <dd>${dateText}</dd>`;
    if (event.start){
      let timeText = `${event.start} – ${event.end}  ${event.timeZone}`

      html += `<dt class="event-attribute-label> Time: </dt><dd>
        <div class=""> ${timeText}</div></dd>`;
    }
  $('#event-date').html(html)

  $('#event-type').html(`<dt class="event-attribute-label">Type</dt> 
    <dd class=""> ${event.type}</dd>`);
  $('#event-category').html(`<dt class="event-attribute-label">Category</dt> 
    <dd class=""> ${event.category}</dd>`);


}

function wrapVenueDetails (id, event){
  if(event.venueName === ''){
    $(id).parent().empty();
    return;
  }
  var venueName = event.venueName;
  if (event.venueLink !== ''){
    venueName = `<a href="${event.venueLink}">${venueName}</a>`
  }

  var html =  `<dt class="event-attribute-label">Location 
          </dt>
    <dd class="tribe-venue"<dt>${venueName}</dd>
    <dt aria-label="Venue name: This represents the address of the event venue.">
    </dt>
    <dd>${event.venueAddress}</dd>
    <dt></dt>
    <dd>${event.city}</dd>
    <dt></dt>
    <dd>${event.country}</dd>
    `;

  if (event.website !== ''){
     html += `<dt></dt><dd>&nbsp;</dd><dt></dt>
      <dd><a href="${event.website}">Event Website</a></dd>
      `
  }
  $(id).empty();
  $(id).append(html);
}

function wrapSpeakers (id, speakers){

  var div= `<div class="et_pb_text_inner"><h5>Presenters</h5>`;
  speakers.forEach((speaker) => {
      div += `<p><b>${speaker.name}</b> (${speaker.job}, ${speaker.company})</p>`
  })
  div +="</div>";

  $(id).empty();
  $(id).append(div);
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
      zoom: 8
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

  wrapEventBrite("#register", eventDetails.eventBrite);
  
  if(eventDetails.speakers.length > 0){
    wrapSpeakers("#speakers", eventDetails.speakers);
  }

  wrapEventDetails(eventDetails)
  wrapVenueDetails("#venue-details", eventDetails)

  wrapParagraphs("#description", eventDetails.description);
  addMap(eventDetails);

  const title = eventDetails.title + " - " + eventDetails.type;
  document.title = title;
}

function loadEventDetails() {
  $ = $ || jQuery;
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

document.addEventListener("data-ready", () => {
  loadEventDetails();
});
