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

var img =
  `<div class="et_pb_with_border et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_left et_pb_bg_layout_light">
  <div class="et_pb_text_inner">
    <h4>PLEASE NOTE</h4>
    <p>Registration is required. You will find the access information for the event in the registration confirmation email.</p>
  </div>
</div>
<div class="et_pb_with_border et_pb_module et_pb_code et_pb_code_0">
  <div class="et_pb_code_inner">
    <div id="eventbrite-widget-container-${eventBrite}"></div>
    <script type="text/javascript">
      var exampleCallback = function() {
        console.log('Order complete!');
      };
      window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: '${eventBrite}',
        iframeContainerId: 'eventbrite-widget-container-${eventBrite}',
        iframeContainerHeight: 520,
        onOrderComplete: exampleCallback 
    });
    </script>
  </div>
</div>`;

  $(id).empty();
  $(id).append(img);

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

function fillJob(eventDetails) {
  if (window.eventDetailsDone) {
    return;
  }
  window.eventDetailsDone = true;
  $("h1#title").text(eventDetails.title);
  console.log(eventDetails)
  let dateText = `${eventDetails.shortDateStart}`;
  if (eventDetails.start){
     dateText += `  @ ${eventDetails.start} – ${eventDetails.end}  ${eventDetails.timeZone}`
  }
  if (eventDetails.shortDateStart !== eventDetails.shortDateEnd){
    dateText += ` - ${eventDetails.shortDateEnd}`
  }
  $("span#date-start").text(dateText);
  wrapImage("#main-logo", 1920, 1080, eventDetails.img);

  if(eventDetails.eventBrite){
    wrapEventBrite("#registration", eventDetails.eventBrite);
  }
  if(eventDetails.speakers.length > 0){
    wrapSpeakers("#speakers", eventDetails.speakers);
  }

  /*$("h6#name").text(eventDetails.title);
  $("h4#mission").text(eventDetails.excerpt);

  wrapImage("#logo", 1920, 300, eventDetails.img);
  */

  wrapParagraphs("#description", eventDetails.description);

  const title = eventDetails.title + " - " + eventDetails.type;
  document.title = title;
  history.pushState({}, null, eventDetails.social);
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
