function buildTracker(actor, action, context, object, qualetics) {
  const eventObj = {
    actor,
    action,
    context,
    object,
  };

  if (qualetics) {
    console.log("Sending:", eventObj);
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
      break;
    case "powered-by-fiware":
      action = {
        name: "Search All Powered by FIWARE",
        type: "showcase menu",
      };
      object = {
        name: "Powered by FIWARE",
        type: "showcase menu",
        attributes: {
          url: url,
          indexforsearch: true,
        },
      };
      break;
    case "fiware-ready":
      action = {
        name: "Search All FIWARE Ready",
        type: "showcase menu",
      };
      object = {
        name: "FIWARE Ready",
        type: "showcase menu",
        attributes: {
          url: url,
          indexforsearch: true,
        },
      };
      break;
    case "cities4cities":
      action = {
        name: "Search All Cities 4 Cities",
        type: "showcase menu",
      };
      object = {
        name: "Cities 4 Cities",
        type: "showcase menu",
        attributes: {
          url: url,
          indexforsearch: true,
        },
      };
      break;
    case "support-services":
      action = {
        name: "Support Services",
        type: "showcase menu",
      };
      object = {
        name: "Search All Support Services",
        type: "showcase menu",
        attributes: {
          url: url,
          indexforsearch: true,
        },
      };
      break;
    default:
      const company_name = document.querySelector(
        "h5#organisation-name",
      ).textContent;
      const company_url = document.querySelector("#organisation-website").href;

      const solution_type = document.querySelector("h5").textContent;
      const solution_name =
        document.querySelector("h1#product-name").textContent;
      const solution_description = document.head
        .querySelector('meta[name="description"]')
        .getAttribute("content");

      action = {
        name: "Product Details",
        type: "showcase details",
        // "Go to the Solution Website"
        // "Tracking Socials"
        // attributes: {"type": "facebook", "twitter/X", "webpage", "mail", "linkedin", "???"}
        // "Tracking Extra Materials":
        // attributes: {"type": "reference materials", "documentation", "???"}
      };

      object = {
        name: solution_name,
        type: solution_type,
        attributes: {
          //"domain": solution_domain,  // list of all domains
          //"technology": solution_technology, // list of all technologies
          url: url,
          "company name": company_name,
          "company url": company_url,
          description: solution_description,
          indexforsearch: true,
        },
      };
  }

  const actor = {
    type: "User",
    id: "Undefined",
    attributes: { name: "Undefined", geoLocation: window.geoLocation },
  };

  const context = {
    type: "showcase",
    name: "showcase",
    attributes: {
      url: url,
    },
  };

  buildTracker(actor, action, context, object, qualetics);
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
      if (
        document.location.href.includes("www.fiware.org/showcase") ||
        document.referrer.includes("www.fiware.org/showcase")
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
});
