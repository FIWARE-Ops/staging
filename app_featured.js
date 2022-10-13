function defer(method) {
  if (window.jQuery) {
    method();
  } else {
    setTimeout(function () {
      defer(method);
    }, 50);
  }
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

function waitFor(conditionFunction) {
  const poll = resolve => {
    if(conditionFunction()) resolve();
    else setTimeout(_ => poll(resolve), 400);
  }
  return new Promise(poll);
}

function enableCarousel(){
  jQuery('.owl-carousel').owlCarousel({
      stagePadding:30,
      loop:false,
      margin:15,
      nav:true,
      navText : ['<span class="uk-margin-small-right uk-icon" uk-icon="icon: chevron-left"></span>','<span class="uk-margin-small-left uk-icon" uk-icon="icon: chevron-right"></span>'],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          },
          1400:{
              items:4
          },
          1600:{
              items:4
          }
      }
  })
}

defer(async function () {
  // POPULATE THE LISTING
  await includeHTML();
  waitFor(_ => jQuery('.owl-carousel').children().length !== 0)
  .then(_ => enableCarousel()); 	
});

