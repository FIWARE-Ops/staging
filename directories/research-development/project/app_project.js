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

function addContacts(id, contact) {
  if (!contact) {
    $(id).remove();
  } else {
    $(id).attr("href", contact);
  }
}

function wrapResources(id, title, resources) {
  if (resources.length === 0) {
    $(id).remove();
    return;
  }
  $(id).empty();
  var title = "<h4>" + title + "</h4>";

  $(id).append(title);
  resources.forEach((el) => {
    const resource =
      '<div class="resource"><span class="material-symbols-outlined">link</span>' +
      '<a class="link" href="' +
      el[1] +
      '" target="_blank" rel="noopener">' +
      el[0] +
      "</a></div>";
    $(id).append(resource);
  });
}

function setBar(startDate, endDate, status) {
  const start = new Date(startDate); // Jan 1, 2020
  const end = new Date(endDate); // Dec 31, 2021
  const today = new Date(); //

  // Get the total possible timestamp value
  const total = end.getTime() - start.getTime();

  // Get the current value
  const current = today.getTime() - start.getTime();

  // Get the percentage
  const p = Math.round((current / total) * 100) + "%";

  $(".bar").css("width", p).after().append(p);
  $("h6#start-date").text(start.toDateString().substring(3));
  $("h6#end-date").text(end.toDateString().substring(3));
  $("h6#status").text(status);

  if (today > end) {
    $(".bar").css("backgroundColor", "red");
    $("h6#status").css("color", "red");
    $(".bar").css("width", "100%");
  }
}

function fillProject(project) {
  if (window.projectDone) {
    return;
  }
  window.projectDone = true;
  $("h1#name").text(project.name);
  $("h6#name").text(project.name);
  $("h4#excerpt").text(project.excerpt);
  $("h6#funded-by").text(project.country);
  $("span#partners").text(project.partners);

  wrapImage("#logo", 500, 300, project.img);
  wrapImage("#main-logo", 500, 300, project.img);

  wrapParagraphs("#description", project.description);
  wrapParagraphs("#grant-agreement", project.grantAgreement);

  if (project.topicLink) {
    $("a#topic-link").attr("href", project.topicLink);
    $("a#topic-link").append(project.topic);
  } else {
    $("#topics").remove();
  }

  if (project.article1Link) {
    $("a#article-1-link").attr("href", project.article1Link);
    $("a#article-1-link").append(project.article1);

    $("a#article-2-link").attr("href", project.article2Link);
    $("a#article-2-link").append(project.article2);
  } else {
    $("#articles").remove();
  }

  if (project.program1) {
    $("a#program-1-link").attr("href", project.program1Link);
    $("a#program-1-link").append(project.program1);

    if (project.program2) {
      $("a#program-2-link").attr("href", project.program2Link);
      $("a#program-2-link").append(project.program2);
    } else {
      $("#program-2-link").parent().remove();
    }
  } else {
    $("#programs").remove();
  }

  $("a#project-website").attr("href", project.website);

  $("a#tender-link").attr("href", project.tenderLink);

  addContacts("#linkedin", project.linkedIn);
  addContacts("#twitter", project.twitter);
  addContacts("#contact", project.contact);

  addChips("#domains", project.domains);
  addChips("#technologies", project.technologies);

  setBar(project.startDate, project.endDate, project.type);

  $("div#partners-location").append(project.partnersDetails);

  if (project.disclaimant) {
    wrapParagraphs(
      "#disclaimer",
      `The content of this page does not represent the opinion of the
      ${project.disclaimant}, and the ${project.disclaimant} is not responsible for any use that might be made
       of such content.`,
    );
  } else {
    $("#disclaimer").parent().parent().remove();
  }

  document.title = project.name + " - " + project.technologies;
  history.pushState({}, null, project.social);
}

function loadProject(e) {
  e.target.removeEventListener("data-ready", loadProject, false);
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

  if ($.urlParam("id") && projects[$.urlParam("id")]) {
    fillProject(projects[$.urlParam("id")]);
  } else {
    $($(".et_pb_section_1").children()).empty();
    $("#disclaimer").parent().parent().remove();
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

document.addEventListener("data-ready", loadProject);
