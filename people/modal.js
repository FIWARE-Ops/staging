// Modal
document.querySelectorAll(".cat-bio").forEach(function(el) {
  el.addEventListener("click", function(e) {
    var modal = new tingle.modal({
      footer: true,
      stickyFooter: false,
      closeMethods: ["overlay", "button", "escape"],
      closeLabel: "Close",
      cssClass: ["custom-class-1", "custom-class-2"],
      onOpen: function() {
        console.log("modal open");
      },
      onClose: function() {
        console.log("modal closed");
      },
      beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
      },
    });

    function createModalContent(tingleModalData) {
      var modalHtml = "";
      console.warn(tingleModalData);

      modalHtml += "<div class='info-modal'>";

      modalHtml += '<img src="' + tingleModalData.img + '" />';

      modalHtml += "<div class='credits-modal'>";

      if (tingleModalData.name != "null") {
        modalHtml += "<h1>" + tingleModalData.name + "</h1>";
      }

      if (tingleModalData.position != "null") {
        modalHtml += "<h2>" + tingleModalData.position + "</h2>";
      }

      if (tingleModalData.company != "null") {
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

      if (tingleModalData.content != "null") {
        modalHtml += "<p>" + tingleModalData.content + "</p>";
      }
      modalHtml += "</div>";

      modalHtml += "<div class='details-modal'>";

      modalHtml += "<div class='social-modal'>";

      if (tingleModalData.twitter != null) {
        modalHtml +=
          '<a class="twitter-link" href="' +
          tingleModalData["twitter"] +
          '" target="_blank"></a>';
      }

      if (tingleModalData.linkedin != null) {
        modalHtml +=
          '<a class="linkedin-link" href="' +
          tingleModalData["linkedin"] +
          '" target="_blank"></a>';
      }

      if (tingleModalData.domain != "null") {
        modalHtml += '<p class="domain">' + tingleModalData.domain + "</p>";
      }

      modalHtml += "</div>";

      modalHtml += "<div class='tags-modal'>";

      if (tingleModalData.location != "null") {
        modalHtml += '<p class="location">' + tingleModalData.location + "</p>";
      }

      modalHtml += "</div>";

      return modalHtml;
    }

    // set content
    modal.setContent(createModalContent(modalData[el.dataset.modal]));

    // open modal
    modal.open();
  });
});

(document).ready(function () {
  (".f-cat a").on("click", function (e) {
    e.stopPropagation();
  });
});
