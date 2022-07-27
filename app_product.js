function defer(method) {
  if (window.jQuery && window.$) {
    method();
  } else {
    setTimeout(function () {
      defer(method);
    }, 50);
  }
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







 // <!img src="${product.featuredImage}" alt="" data-pin-nopin="true">
           

    prods.forEach((product , i) => {
      var resource = `<a class="yarpp-thumbnail" rel="norewrite" 
            href="${product.companyLink}" 
            title="${product.organisationName}">
            <div class="yarpp-thumbnail-default" 
             style="min-height: 200px;min-width: 100%; background: url(${product.featuredImage});
                background-repeat: no-repeat; background-size: contain; background-position: center center;"
            >
            </div>
            <div class="yarpp-thumbnail-title">${product.productName}</div>
            </a>`;
        if (i < 3){
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
  $("h5#category").text(product.category);
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
}

defer(function () {
  $.urlParam = function (name) {
    var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.href);
    if (results == null) {
      return null;
    }
    return decodeURI(results[1]) || 0;
  };

  fillProduct(pageData[$.urlParam("category")][$.urlParam("id")]);
});
