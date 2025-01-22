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
    document
      .querySelectorAll(".cat-info[data-modal], .cat-details[data-modal]")
      .forEach(function (el) {
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
              return false; // nothing happens
            },
          });

          function createModalContent(tingleModalData){
            var modalHtml = "";
            console.warn(tingleModalData);

            if (tingleModalData.name){
               modalHtml += `<div class="${createClassFilter(tingleModalData.name)}">
               ${tingleModalData.name
                  .replace(/</g, "<")
                  .replace(/>/g, ">")
                  .replace(/&/g, "&")
               }</div>`;
            }
            if(tingleModalData.badge){
              modalHtml += "<div class='credits-modal'>";
              modalHtml += `<img src="${tingleModalData.badge}" class="cat-badge-modal" />`;
              modalHtml += "</div>";
            }
                
            modalHtml += "<div class='info-modal'>";
              if(tingleModalData.img){    
                modalHtml += `<img src="${tingleModalData.img}" class="cat-ico-modal" />`;
              }
              modalHtml += "<div class='content'>";
                if (tingleModalData.content !== "") {
                  modalHtml += tingleModalData.content
                  .replace(/</g, "<")
                  .replace(/>/g, ">")
                  .replace(/&/g, "&");
                }
                
                // if (tingleModalData["company-link"]){
                    // modalHtml += `<div><a href="${tingleModalData["company-link"]}">MORE</a></div>`;
                // }
              
              modalHtml += "</div>";
            
            modalHtml += "</div>";
       
            if (tingleModalData["company-link"]){
            modalHtml += "<div class='details-modal'>";
            
              modalHtml += "<div class='social-modal'>";
              
                // modalHtml += `<div class="company-link"><a href="${tingleModalData["company-link"]}">MORE</a></div>`;
                modalHtml += '<a class="cat-details col-3 modal" href="'+ tingleModalData['company-link'] + '">' + tingleModalData.company + '<span id="ico-info" class="material-symbols-outlined">arrow_right_alt</span>' + '</a>';
              
              modalHtml += "</div>";
            
            modalHtml += "</div>";
            }
            
            return modalHtml;
          }
          
          // set content
  
          modal.setContent(
            createModalContent(window.modalData[el.dataset.modal]),
          );
  
          // open modal
          modal.open();
        });
      });
  
    $(document).ready(function () {
      $(".cat-info").on("click", function (e) {
        const target = $(this.hash);
        if (target.offset()) {
          e.stopPropagation();
          e.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 100,
            },
            10,
          );
          return false;
        }
      });
    });
  }

  function smoothScroll() {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "" && !$(this.hash).hasClass("grid-item")) {
        // Store hash
        const hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          600,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          },
        );
        return false;
      } // End if
    });
  }

  function initFeaturedCarousel() {
    $(".featured-carousel").owlCarousel({
      stagePadding: 0,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      margin: 0,
      responsive: {
        0: {
          stagePadding: 25,
          items: 1,
          autoplay: true,
          nav: false,
          dots: true,
          loop: true,
        },
        600: {
          items: 3,
          autoplay: true,
          nav: false,
          dots: true,
          loop: true,
        },
        1000: {
          items: 4,
          autoplay: true,
          nav: false,
          dots: false,
          loop: true,
        },
        1400: {
          items: 4,
          autoplay: true,
          nav: false,
          dots: false,
          loop: true,
        },
        1600: {
          items: 4,
          autoplay: true,
          nav: false,
          dots: false,
          loop: true,
        },
      },
    });
  }

  function initStepper(){
    $(".card-step").each(function (i, el) {
      initStep("#" + $(el).attr("id"));
    });
  }

  function initStep(stepperBlockId) {
    var step = 0;
    var stepItem = $(
      stepperBlockId + ".step-progress .step-slider .step-slider-item"
    );
  
    $(
      stepperBlockId + ' .step-content .step-content-foot button[name="prev"]'
    ).addClass("out");

    // Step Next
    $(
      stepperBlockId + ' .step-content .step-content-foot button[name="next"]'
    ).on("click", function () {
      var instance = $(this);
      if (stepItem.length - 1 < step) {
        return;
      }
      $(
        stepperBlockId + ' .step-content .step-content-foot button[name="prev"]'
      ).removeClass("out");
      if (step == stepItem.length - 2) {
        instance.addClass("out");
        instance.siblings('button[name="apply"]').removeClass("out");
      }
      $(stepItem[step]).addClass("active");
      $(stepperBlockId + " .step-content-body").addClass("out");
      step++;
      $(stepperBlockId + " #" + stepItem[step].dataset.id).removeClass("out");
    });

    // Step Last
    $(
      stepperBlockId + ' .step-content .step-content-foot button[name="apply"]'
    ).on("click", function () {
      if (step == stepItem.length) {
        return;
      }
      $(stepItem[stepItem.length - 1]).addClass("active");
      $(stepperBlockId + " .step-content-body").addClass("out");
      $(stepperBlockId + " #stepLast").removeClass("out");
      step++;
    });

    // Step Previous
    $(
      stepperBlockId + ' .step-content .step-content-foot button[name="prev"]'
    ).on("click", function () {
      if (step - 1 < 0) {
        return;
      }
      step--;
      var instance = $(this);
      if (step <= stepItem.length - 1) {
        instance.siblings('button[name="next"]').removeClass("out");
        instance.siblings('button[name="apply"]').addClass("out");
      }
      $(stepperBlockId + " .step-content-body").addClass("out");
      $(stepperBlockId + " #" + stepItem[step].dataset.id).removeClass("out");
      if (step === 0) {
        stepItem.removeClass("active");
      } else {
        stepItem.filter(":gt(" + (step - 1) + ")").removeClass("active");
      }
      if (step - 1 < 0) {
        $(
          stepperBlockId + ' .step-content .step-content-foot button[name="prev"]'
        ).addClass("out");
      }
    });
  }
    
document.addEventListener("DOMContentLoaded", () => {
    function myCallback() {
        smoothScroll();
        initModal();
        initFeaturedCarousel();
        initStepper();
    }
    w3.includeHTML(myCallback);
});