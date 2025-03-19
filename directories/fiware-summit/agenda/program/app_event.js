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

function wrapSpeakers(id, speakers) {
  let html = "";

  speakers.forEach((speaker) => {
    html += `
  <div class="speaker detail" data-modal='${createClassFilter(speaker.name)}'>
    <div class="speaker-data">
      <div class="profile-picture">
        <img decoding="async" alt="" src="${
          speaker.img ||
          "https://www.fiware.org/wp-content/directories/people/images/ico_user.png"
        }" loading="lazy">
      </div>
      <div class="speaker-info">
        <div class="speaker-name detail">${speaker.name || ""}</div>
        <div class="speaker-job-title detail">${speaker.job || ""}</div>
        <div class="speaker-company detail">${speaker.company || ""}</div>
      </div>
    </div>
    <div class="btn-icon">
      <span class="material-symbols-outlined icon cta">trending_flat</span>
    </div>
  </div>`;
  });

  $(id).empty();
  $(id).append(html);
}

function setClipboard() {
  const text = `https://fiware.org${window.social}`;
  const type = "text/plain";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];

  navigator.clipboard.write(data).then(
    () => {
      /* success */
      alert("Link copied to clipboard. Share session details with others!");
    },
    () => {
      /* failure */
    },
  );
}

function createModalContent(tingleModalData) {
  let modalHtml = "";
  console.warn(tingleModalData);

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

  modalHtml += "</div>";

  return modalHtml;
}

function initModal() {
  // Modal
  document.querySelectorAll(".speaker").forEach(function (el) {
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
        },
      });
      // set content
      modal.setContent(createModalContent(window.modalData[el.dataset.modal]));

      // open modal
      modal.open();
    });
  });
}

function fillEvent(event) {
  if (window.eventDone) {
    return;
  }
  window.eventDone = true;
  $("div#track").text(event.track);
  $("div#track").addClass(trackCSS(event.track));
  $("div#image").addClass(trackCSS(event.track));
  $("div#image").empty();
  $("div#image").append(`<span class="et_pb_image_wrap ">
    <img decoding="async" src="${event.img}" alt="" title="${event.track}" /></span>`);

  $("div.panel-title").text(event.title);
  $("div.excerpt").text(event.session);
  $("#date").text(event.shortDate);
  $("#time").text(`${event.start} - ${event.end}`);
  $("#place").text(event.location);

  wrapParagraphs("div#description", event.description);
  wrapSpeakers("div#speakers", event.speakers);

  const title = event.title + " - " + event.session;
  document.title = title;

  window.social = event.social;
  //history.pushState({}, null, event.social);
}

function trackCSS(data) {
  let result = "";

  switch (data) {
    case 'Tech & Trends':
        result = 'light-green';
        break;
    case 'Tech Training':
        result = 'cyan';
        break;
    case 'Secure Smart City':
    case 'Sustainable Smart City':
    case 'Smart Gov for Smart Cities':
        result = 'light-blue';
        break;
    case 'Grand Opening':
    case 'Organization':
        result = 'light-orange';
        break;
    case 'AI & Data-Driven Urban Mngmt':
        result = 'light-purple';
        break;
    default:
        break;
  }
  return result;
}

function loadEvent() {
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

  $("div#back-button").on("click", function (e) {
    e.preventDefault();
    window.history.back();
  });

  if ($.urlParam("id") && window.agenda[$.urlParam("id")]) {
    fillEvent(window.agenda[$.urlParam("id")]);
    initModal();
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

document.addEventListener(
  "data-ready",
  () => {
    loadEvent();
  },
  { once: true },
);
