
function wrapParagraphs(id, input) {
  if (input === '') {
    $(id).prev().remove();
    $(id).remove();
    return;
  }
  const html = input;
  $(id).empty();
  $(id).append(html);
}


function wrapSpeakers(id, speakers) {

  let html = '';

  speakers.forEach((speaker, index) => {
    html += `<div class="speaker" data-modal='${index}'>
<div class="profile-picture" >
      <img decoding="async" alt="" src="${speaker.img}" loading="lazy">
    </div>
<div class="speaker-info">
<div class="speaker-name detail">${speaker.name}</div>
<div class="speaker-job-title detail">${speaker.job}</div>
<div class="speaker-company detail">${speaker.company}</div>
</p></div>
</p></div>
`
  });

  $(id).empty();
  $(id).append(html);
}


function fillEvent(event) {
  if (window.eventDone){
    return;
  }
  window.eventDone = true;
  $('div#track').text(event.track);
  $('div.panel-title').text(event.title);
  $('div.excerpt').text(event.session);
  $('span.date').text(event.shortDate);
  $('span.time').text(`${event.start} - ${event.end}`);
  $('span.place').text(event.location);

  wrapParagraphs('div#description', event.description);
  wrapSpeakers('div#speakers', event.speakers)

  const title = event.title + ' - ' + event.session;
  document.title = title;
  //history.pushState({}, null, event.social);
}

function loadEvent() {
  $ = $ || jQuery;
  $.urlParam = function (name) {
    var results = new RegExp('[?&]' + name + '=([^&#]*)').exec(
      window.location.href
    );
    if (results == null) {
      return null;
    }
    return decodeURI(results[1]) || 0;
  };

  $('div#back-button').on('click', function (e) {
    e.preventDefault();
    window.history.back();
  });


  if (
    $.urlParam('id') &&
    window.agenda[$.urlParam('id')]
  ) {
    fillEvent(window.agenda[$.urlParam('id')]);
  } else {
     $(".et_pb_section_1").remove()
     $(".et_pb_section_2").css('padding', '2em')
  }

  initialiseStyleBackgroundIntersectionObserver();
  //  });
  //});
}

function initialiseStyleBackgroundIntersectionObserver() {
  const lazyBackgrounds = Array.from(
    document.querySelectorAll('[data-background-image]')
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

  if (typeof window.IntersectionObserver === 'function') {
    lazyBackgroundObserver = new IntersectionObserver((entries) => {
      entries.forEach(loadBackgroundIfElementOnScreen);
    });
    lazyBackgrounds.forEach(observeElementVisibility);
  } else {
    lazyBackgrounds.forEach(setBackground);
  }
}

document.addEventListener("data-ready", () => {
    loadEvent();
});
