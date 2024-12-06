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

function addResources(docs, demos, refs) {
  if (docs.length === 0 && demos.length === 0 && refs.length === 0) {
    $("#tech-docs").parent().remove();
    return;
  }

  wrapResources("#tech-docs", "Technical Documentation", docs);
  wrapResources("#demo-videos", "Links to Demos/Videos", demos);
  wrapResources("#reference-materials", "Reference Materials", refs);
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

function addContacts(id, contact) {
  if (!contact) {
    $(id).remove();
  } else {
    $(id).attr("href", contact);
  }
}

function shuffle(sourceArray) {
  for (var i = 0; i < sourceArray.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (sourceArray.length - i));

    var temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}

function addRelated(related) {
  if (!related || related.length === 0) {
    $("#related-products").remove();
  } else {
    var prods = shuffle(related);
    $("#related-links").empty();
    prods.forEach((product, i) => {
      var resource = `<a class="yarpp-thumbnail" rel="norewrite" href="${product.companyLink}" >
            <div class="yarpp-thumbnail-default" 
              data-background-image='${product.featuredImage}'
              title="${product.excerpt}"
              style="min-height: 200px;min-width: 100%; 
              background-repeat: no-repeat; background-size: contain; background-position: center center;"
            >
            </div>
            <div class="yarpp-thumbnail-title">${product.productName}</div>
            </a>`;
      if (i < 3) {
        $("#related-links").append(resource);
      }
    });
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
    var resource =
      '<div class="resource"><span class="material-symbols-outlined">link</span>' +
      '<a class="link" href="' +
      el[1] +
      '" target="_blank" rel="noopener">' +
      el[0] +
      "</a></div>";
    $(id).append(resource);
  });
}

function fillProduct(product) {
  if (window.jobDone) {
    return;
  }
  window.jobDone = true;
  $("h5#category").text(product.category);
  $("h5#category").on("click", function (e) {
    e.preventDefault();
    window.history.back();
  });
  $("h5#organisation-name").text(product.organisationName);
  $("h6#organisation-name2").text(product.organisationName);
  $("h1#product-name").text(product.productName);
  $("h6#product-name2").text(product.productName);
  $("h4#excerpt").text(product.excerpt);
  $("span#certified-in").text(product.yearOfValidation);


  wrapImage("#logo", 500, 300, product.logo);
  wrapImage("#main-logo", 500, 300, product.logo);
  wrapImage("#featured-image", null, null, product.featuredImage);

  wrapParagraphs("#description-and-benefits", product.description);
  wrapParagraphs("#challenge-and-context", product.challenge);
  wrapParagraphs("#references-customers", product.references);
  wrapParagraphs("#awards", product.awards);
  $("div#additionalText").html(product.additionalText);

  addResources(product.docs, product.videos, product.materials);
  addRelated(product.related);

  $("a#product-website").attr("href", product.productWebsite);

  addChips("#technologies", product.technologies);
  addChips("#domains", product.domains);

  addContacts("#organisation-website", product.organisationWebsite);
  addContacts("#organisation-email", product.organisationEmail);
  addContacts("#linkedin", product.linkedIn);
  addContacts("#twitter", product.twitter);

  document.title = product.category + " - " + product.productName;
  $('meta[name="robots"]').attr(
    "content",
    "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  );
  $('meta[name="description"]').attr("content", product.excerpt);

  $('meta[property="og:title"]').attr("content", document.title);
  $('meta[property="og:description"]').attr("content", product.excerpt);
  $('meta[property="og:url"]').attr(
    "content",
    "https://www.fiware.org/" + product.social,
  );
  $('meta[property="og:site_name"]').attr("content", "FIWARE");
  $('meta[property="article:publisher"]').attr(
    "content",
    "https://es-es.facebook.com/eu.fiware/",
  );
  $('meta[property="article:section"]').attr("content", "Marketplace");
  $('meta[property="og:image"]').attr("content", product.featuredImage);
  $('meta[property="og:image:secure_url"]').attr(
    "content",
    product.featuredImage,
  );
  $('meta[property="og:image:width"]').attr("content", 1920);
  $('meta[property="og:image:height"]').attr("content", 1080);
  $('meta[property="og:image:type"]').attr("content", "image/png");
  $('link[rel="canonical"]').attr(
    "href",
    "https://www.fiware.org/" + product.social,
  );

  $('meta[name="twitter:card"]').attr("content", "summary_large_image");
  $('meta[name="twitter:title"]').attr("content", document.title);
  $('meta[name="twitter:description"]').attr("content", product.excerpt);
  $('meta[name="twitter:site"]').attr("content", "@FIWARE");
  $('meta[name="twitter:creator"]').attr("content", "@FIWARE");
  $('meta[name="twitter:image"]').attr("content", product.featuredImage);

  history.pushState({}, null, product.social);
}

function loadProduct() {
  //document.addEventListener("DOMContentLoaded", () => {
  //  $(document).ready(function () {
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

  if (
    $.urlParam("category") &&
    pageData[$.urlParam("category")] &&
    $.urlParam("id") &&
    pageData[$.urlParam("category")][$.urlParam("id")]
  ) {
    fillProduct(pageData[$.urlParam("category")][$.urlParam("id")]);
  } else {
    $($(".et_pb_section_1").children()).empty();
    $("#related-products").remove();
    //$('meta[name="robots"]').attr('content', 'noindex');
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
