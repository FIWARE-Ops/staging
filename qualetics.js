function buildTracker(actor, action, context, object, qualetics) {
  const eventObj = {
    actor,
    action,
    context,
    object,
  };

  if (qualetics) {
    console.log("sending:", eventObj);
    qualetics.send(eventObj);
  } else {
    console.log("no qualetics", eventObj);
  }
}

// Card tracking
function showcaseTracking(qualetics) {
  //e.target.removeEventListener("locationAvailable", showcaseTracking, false);

  const path = document.location.href.split("/");
  const url = document.URL;
  let object;
  let action;
  let context;

  const actor = {
    type: "User",
    id: "Anonymous",
    attributes: { name: "Anonymous", geoLocation: window.geoLocation },
  };

  switch (path[path.length - 2]) {
    case "showcase":
      action = {
        name: "Search All Showcase",
        type: "showcase menu",
      };
      object = {
        name: "Showcase main page",
        type: "showcase menu",
        attributes: {
          url: url,
          indexforsearch: true,
        },
      };
      context = {
        name: "Showcase main page",
        type: "showcase menu",
        attributes: {
          url: url,
        },
      };
      break;
    case "powered-by-fiware":
      action = {
        name: "Search All Powered by FIWARE",
        type: "showcase menu",
      };
      object = {
        name: "Powered by FIWARE main page",
        type: "showcase menu",
        attributes: {
          url: url,
          indexforsearch: true,
        },
      };
      context = {
        name: "Powered by FIWARE main page",
        type: "showcase menu",
        attributes: {
          url: url,
        },
      };
      break;
    case "fiware-ready":
      action = {
        name: "Search All FIWARE Ready",
        type: "showcase menu",
      };
      object = {
        name: "FIWARE Ready main page",
        type: "showcase menu",
        attributes: {
          url: url,
          indexforsearch: true,
        },
      };
      context = {
        name: "FIWARE Ready main page",
        type: "showcase menu",
        attributes: {
          url: url,
        },
      };
      break;
    case "cities4cities":
      action = {
        name: "Search All Cities 4 Cities",
        type: "showcase menu",
      };
      object = {
        name: "Cities 4 Cities main page",
        type: "showcase menu",
        attributes: {
          url: url,
          indexforsearch: true,
        },
      };
      context = {
        name: "Cities 4 Cities main page",
        type: "showcase menu",
        attributes: {
          url: url,
        },
      };
      break;
    case "support-services":
      action = {
        name: "Search All Support Services",
        type: "showcase menu",
      };
      object = {
        name: "Support Services main page",
        type: "showcase menu",
        attributes: {
          url: url,
          indexforsearch: true,
        },
      };
      context = {
        name: "Support Services main page",
        type: "showcase menu",
        attributes: {
          url: url,
        },
      };
      break;
    default:

      const company_name = document.querySelector(
        "h5#organisation-name",
      )?.textContent;
      const company_url = document.querySelector("#organisation-website")?.href;

      const solution_type = document.querySelector("h5")?.textContent;
      const solution_name =
        document.querySelector("h1#product-name")?.textContent;
      const solution_description = document.head
        .querySelector('meta[name="description"]')
        ?.getAttribute("content");

      // details and tags
      techList = document.querySelector("ul#technologies.chips");
      if (techList){
        solution_technologies = Array.from(techList).map(child => child.textContent.trim());
      } else {
        solution_technologies = [];
      }
      
      domainList = document.querySelector("ul#domains.chips");
      if (domainList){
        solution_domains = techList = Array.from(domainList).map(child => child.textContent.trim());
      } else {
        solution_domains = [];
      }
        

      action = {
        "name": "See Showcase Details",
        "type": "showcase details",
      };

      object = {
        "name": solution_name,
        "type": "showcase details",
        "attributes": {
          "url": url,
          "company url": company_url,
          "company name": company_name,
          "solution type": solution_type,
          "description": solution_description,
          "domains": solution_domains,  // list of all domains
          "technologies": solution_technologies, // list of all technologies
          "indexforsearch": true,
        },
      };
      
      // this is obligatory
      context = {
        "name": solution_name,
        "type": "showcase details",
        "attributes": {
          "company name": company_name,
          "solution type": solution_type,
          "domains": solution_domains,  // list of all domains
          "technologies": solution_technologies, // list of all technologies
        },
      };

      const social_links = document.querySelectorAll('span.icon');
      const extra_materials = document.querySelectorAll('.link');
      const solution_website = document.getElementById('product-website');
      document.addEventListener('click', (event) => {
        handleClickTracking(event, actor, object, context, extra_materials,  social_links, solution_website, qualetics);
      });
      document.addEventListener('contextmenu', (event) => {
        handleClickTracking(event, actor, object, context, extra_materials, social_links, solution_website, qualetics);
      });
  }

  buildTracker(actor, action, context, object, qualetics);
}


function handleClickTracking(event, actor, object, context, extra_materials, social_links, solution_website, qualetics) {
  const clickedElement = event.target;

  const isMaterial = Array.from(extra_materials).some(element => clickedElement.isEqualNode(element));
  const isSocial = Array.from(social_links).some(element => clickedElement.isEqualNode(element));
  const isSolutionWebsite = (clickedElement.isEqualNode(solution_website));

  let click_action;
  if (isMaterial) {
    //console.log("extra material -", clickedElement.textContent);
    click_action = `extra material - ${clickedElement.textContent}`;
    const action = {
      "name": click_action,
      "type": "showcase solution click",
    };
    buildTracker(actor, action, context, object, qualetics);
  } else if (isSocial){
    //console.log("social link -", clickedElement.className);
    click_action = `social link - ${clickedElement.className}`;
    const action = {
      "name": click_action,
      "type": "showcase solution click",
    };
    buildTracker(actor, action, context, object, qualetics);
  } else if (isSolutionWebsite){
    //console.log("solution website");
    click_action = "solution website"
    const action = {
      "name": click_action,
      "type": "showcase solution click",
    };
    buildTracker(actor, action, context, object, qualetics);
  }


}  

async function getRandomCoordinates() {
  return new Promise((resolve) => {
    // Simulate an asynchronous operation with a timeout
    setTimeout(() => {
      // Define the bounding boxes for New York, Berlin, and Tokyo
      const locations = {
        newYork: {
          latMin: 40.477399,
          latMax: 40.917577,
          lngMin: -74.25909,
          lngMax: -73.700272,
        },
        berlin: {
          latMin: 52.338261,
          latMax: 52.675454,
          lngMin: 13.088346,
          lngMax: 13.761117,
        },
        tokyo: {
          latMin: 35.528984,
          latMax: 35.898524,
          lngMin: 139.562914,
          lngMax: 139.927754,
        },
      };

      // Randomly select one of the cities
      const cities = Object.keys(locations);
      const selectedCity = cities[Math.floor(Math.random() * cities.length)];
      const bounds = locations[selectedCity];

      // Generate random latitude and longitude within the selected city's bounding box
      const randomLat =
        Math.random() * (bounds.latMax - bounds.latMin) + bounds.latMin;
      const randomLng =
        Math.random() * (bounds.lngMax - bounds.lngMin) + bounds.lngMin;

      const location = {
        latitude: randomLat,
        longitude: randomLng,
      };
      // Resolve the promise with the result
      resolve(location);
    }, 500); // Simulated delay
  });
}

// Helper function to add a timeout to a promise
function withTimeout(promise, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error(`Timeout exceeded after ${timeout} milliseconds`)),
      timeout,
    );
    promise
      .then((result) => {
        clearTimeout(timer);
        resolve(result);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

async function getIpAddress() {
  // URL to make request to
  const response = await fetch("https://api.ipify.org?format=json");

  if (response.status === 200) {
    const data = await response.json();
    console.log("Your IP address is:", data);
    return data.ip;
  } else {
    throw new Error(`IP Request failed with status ${response.status}`);
  }
}

async function getLocationFromIP(ip) {
  // URL to make request to
  const url = `https://geoip.fiware.org:5000/api\?ip\=${ip}`;

  let response = await fetch(url);
  console.log("Response", response);
  if (response.status === 200) {
    let data = await response.json();
    console.log("Success! Data received:", data);
    return data;
  } else {
    throw new Error(`Location Request failed with status ${response.status}`);
  }
}

// Example usage with async/await
async function fetchLocation() {
  const locationEvent = new Event("locationAvailable");
  try {
    //const ip = await withTimeout(getIpAddress(), 5000);
    //window.geoLocation = await withTimeout(getLocationFromIP(ip), 5000);
    window.geoLocation = await withTimeout(getRandomCoordinates(), 5000);
    document.dispatchEvent(locationEvent);
  } catch (error) {
    window.geoLocation = {
      latitude: null,
      longitude: null,
    };
    console.error("Failed to retrieve location:", error);
    document.dispatchEvent(locationEvent);
  }
}

function runPageTracking(e) {
  e.target.removeEventListener("DOMContentLoaded", runPageTracking, false);
  let qualetics;

  // qualetics init
  try {
    PAGEVIEW_TRACKING = true;
    OPTIONS = {
      host: "wss://api.qualetics.com",
      port: 443,
      trackUserGeoLocation: false,
    };
    if (window.location.host === "www.fiware.org") {
      // if we are located in the showcase
      if (
        document.location.href.includes("www.fiware.org/showcase") ||
        document.querySelector("#product-name")?.textContent
      ) {
        qualetics = new Qualetics.service(
          "showcase",
          "pZkyAx0L57LE",
          "JtlXpW",
          PAGEVIEW_TRACKING,
          OPTIONS,
        );
        document.addEventListener("locationAvailable", () => {
          showcaseTracking(qualetics);
        }); // send data to qualetics once location is available

      } else {
        qualetics = new Qualetics.service(
          "fiwareweb",
          "5uJm5tmcWNbe",
          "ReLNFq",
          PAGEVIEW_TRACKING,
          OPTIONS,
        );
      }
    } else {
      if (window.location.pathname.includes("staging/showcase")) {
        qualetics = new Qualetics.service(
          "stagingshowcase",
          "TvebnoeTX8Qa",
          "QpnumF",
          PAGEVIEW_TRACKING,
          OPTIONS,
        );
        document.addEventListener("locationAvailable", () => {
          showcaseTracking(qualetics);
        }); // send data to qualetics once location is available
      } else {
        qualetics = new Qualetics.service(
          "fiwarestaging",
          "tCYhHGwxFW28",
          "L4z5mP",
          PAGEVIEW_TRACKING,
          OPTIONS,
        );
      }
    }
    qualetics.init();
    fetchLocation();
  } catch (error) {
    console.error("Tracking failed:", error);
  }
}


document.addEventListener("DOMContentLoaded", (e) => {
  const host = new URL(window.location.href).hostname;
  if (host !== "localhost") {
    runPageTracking(e);
  }
  //runPageTracking(e);
});