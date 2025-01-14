function webp(url) {
  return url ? url.substring(0, url.lastIndexOf(".")) + ".webp" : "";
}

function wrapImage(id, width, height, src) {
  let img = "";

  if (width) {
    img =
      img +
      `<span class="et_pb_image">
        <picture>
          <source srcset="${webp(src)}" type="image/webp"/>
          <img loading="lazy" width="${width}" height="${height}" src="${src}"/>
        </picture>
      </span>`;
  } else {
    img =
      img +
      `<span class="et_pb_image">
          <picture>
            <source srcset="${webp(src)}" type="image/webp"/>
            <img loading="lazy" class="hero-product"  src="${src}"/>
        </picture>
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

function shuffle(sourceArray) {
  for (let i = 0; i < sourceArray.length - 1; i++) {
    const j = i + Math.floor(Math.random() * (sourceArray.length - i));

    const temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}

function addRelated(related) {
  if (!related || related.length === 0) {
    $("#related-products").remove();
  } else {
    const prods = shuffle(related);
    $("#related-links").empty();
    prods.forEach((product, i) => {
      console.log(product);

      const resource = `<a class="yarpp-thumbnail" rel="norewrite" href="${product.companyLink}" >
            <div class="yarpp-thumbnail-default">
              <div class="hero-product-container">
                <picture>
                    <source srcset="${webp(product.featuredImageUrl)}" type="image/webp"/>
                    <img loading="lazy" class="hero-product"  src="'${product.featuredImageUrl}" title="${product.excerpt}"/>
                </picture>
              </div>
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
  const titleHeader = "<h4>" + title + "</h4>";

  $(id).append(titleHeader);
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

function fillProduct(product) {
  if (window.jobDone) {
    return;
  }
  window.jobDone = true;

  const LOGOS_DIR = {
    powered: "directories/showcase/powered-by-fiware/logo/",
    ready: "directories/showcase/fiware-ready/logo/",
    services: "directories/showcase/services/logo/",
    cities: "directories/showcase/cities4cities/logo/",
  };

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

  product.logo =
    "https://www.fiware.org/wp-content/" +
    LOGOS_DIR[product.cat] +
    product.logo;
  wrapImage("#logo", 500, 300, product.logo);
  wrapImage("#main-logo", 500, 300, product.logo);
  wrapImage("#featured-image", null, null, product.featuredImageUrl);

  wrapParagraphs("#description-and-benefits", product.description);
  wrapParagraphs("#challenge-and-context", product.challenge);
  wrapParagraphs("#references-customers", product.references);
  wrapParagraphs("#awards", product.awards);
  if (product.additionalText === "") {
    $("div#additionalText").parent().parent().parent().remove();
  } else {
    $("div#additionalText").html(product.additionalText);
  }

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

  if (window.location.host === "www.fiware.org") {
    history.pushState({}, null, product.social);
  }
}

function loadProduct() {
  //document.addEventListener("DOMContentLoaded", () => {
  //  $(document).ready(function () {
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

function buildTracker(
  action,
  context,
  type,
  product,
  company,
  excerpt,
  url,
  geoLocation,
) {
  const eventObj = {
    actor: {
      type: "User",
      id: "System",
      attributes: { name: "John Doe", "geoLocation": geoLocation},
    },
    action: {
      type: "action",
      name: action,
      attributes: { referrer: "Facebook", coupon: "KIHSK123FS" },
    },
    context,
    object: {
      type,
      name: company,
      attributes: {
        url,
        "company name": company,
        description: excerpt,
        indexforsearch: true,
      },
    },
  };

  if (this.qualetics_showcase) {
    console.log("Sending:", action, eventObj, geoLocation);
    this.qualetics_showcase.send(eventObj);
  } else {
    console.log("no qualetics", action, eventObj, geoLocation);
  }
}

// "click"
// "mouseenter"
// Card tracking
function cardTracking(e) {
  e.target.removeEventListener("locationAvailable", cardTracking, false);
  $(document).ready(function () {
    const product = "test product";
    const path = "test path";
    const company = "test company";
    const description = "test description";
    const url = "test url";
    const type = "test type"

    const context = {
      type: "Showcase",
      name: "View Showcase Solution",
      attributes: {
        url,
        "company name": company,
      },
    };

    buildTracker(
      "View Showcase Solution",
      context,
      type,
      product,
      company,
      description,
      url,
      window.geoLocation,
    );
  });
}
