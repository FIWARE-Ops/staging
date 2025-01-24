function buildTracker(actor, action, context, object) {
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
function cardTracking(e) {
  e.target.removeEventListener("locationAvailable", cardTracking, false);
  $(document).ready(function () {
    const company_name = document.querySelector(
      "h5#organisation-name",
    ).textContent;
    const company_url = document.querySelector("#organisation-website").href;

    const solution_type = document.querySelector("h5").textContent;
    const solution_name = document.querySelector("h1#product-name").textContent;
    const solution_description = document.head
      .querySelector('meta[name="description"]')
      .getAttribute("content");
    const solution_url = document.URL;

    const actor = {
      "type": "User",
      id: "Undefined",
      attributes: { name: "Undefined", geoLocation: window.geoLocation },
    };

    const action = {
      name: "Showcase Product Details",
      "type": "details"
      // "Go to the Solution Website"
      // "Tracking Socials"
      // attributes: {"type": "facebook", "twitter/X", "webpage", "mail", "linkedin", "???"}
      // "Tracking Extra Materials":
      // attributes: {"type": "reference materials", "documentation", "???"}
    };

    const context = {
      "type": "Showcase",
      name: "Showcase Product Details",
      attributes: {
        url: solution_url,
        "company name": company_name,
      },
    };

    const object = {
      "type": solution_type,
      name: solution_name,
      attributes: {
        //"domain": solution_domain,  // list of all domains
        //"technology": solution_technology, // list of all technologies
        url: solution_url,
        "company name": company_name,
        description: solution_description,
        indexforsearch: true,
      },
    };

    buildTracker(actor, action, context, object);
  });
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

// qualetics init
let qualetics;
try {
    PAGEVIEW_TRACKING = true;
    OPTIONS = {
              host: "wss://api.qualetics.com",
              port: 443,
              trackUserGeoLocation: false
              };
    if (window.location.pathname.includes("staging/showcase")) {
      qualetics = new Qualetics.service("stagingshowcase", "TvebnoeTX8Qa", "QpnumF", PAGEVIEW_TRACKING, OPTIONS);  
    } else {
      qualetics = new Qualetics.service("fiwarestaging", "tCYhHGwxFW28", "L4z5mP", PAGEVIEW_TRACKING, OPTIONS);  
    }
    qualetics.init();
    document.addEventListener("locationAvailable", cardTracking); // send data to qualetics once location is available
    fetchLocation();
} catch (error) {
    console.error("Tracking failed:", error);
}