//Alert messages for each button click
document.getElementById("checkInBtn").addEventListener("click", function() {
    alert("Check-in button clicked!");
});

document.getElementById("checkOutBtn").addEventListener("click", function() {
    alert("Check-out button clicked!");
});

// Declare global variables to store latitude and longitude
let userLatitude;
let userLongitude;

// Constants for the specified region
const regionLatitude = 35.9658064;
const regionLongitude = -0.1673188;
const regionRadius = 50; // In meters

// Function to calculate distance between two points using the Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const toRadians = (value) => (value * Math.PI) / 180;
  const earthRadius = 6371000; // Earth's radius in meters

  const φ1 = toRadians(lat1);
  const φ2 = toRadians(lat2);
  const Δφ = toRadians(lat2 - lat1);
  const Δλ = toRadians(lon2 - lon1);

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return earthRadius * c;
}

// Disable the "Check In" button
function disableCheckInButton() {
  const checkInButton = document.getElementById("checkInBtn");
  checkInButton.disabled = true;
}

// Check if Geolocation is available in the user's browser
if ("geolocation" in navigator) {
  // Get the user's current location
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // Extract the latitude and longitude from the position object
      userLatitude = position.coords.latitude;
      userLongitude = position.coords.longitude;

      // Log the latitude and longitude to the console
      console.log("Latitude: " + userLatitude);
      console.log("Longitude: " + userLongitude);

      // Calculate the distance between the user's location and the specified region
      const distance = calculateDistance(
        userLatitude,
        userLongitude,
        regionLatitude,
        regionLongitude
      );

      // Check if the user is within the specified region
      if (distance <= regionRadius) {
        console.log("User is within the region.");
      } else {
        console.log("User is out of the region.");
      }
      //If out of region, disable the "Check In" button
        if (distance > regionRadius) {
            disableCheckInButton();
        }
    },
    (error) => {
      console.error("Error getting location:", error.message);
      // If user denies location permission or geolocation is not available, disable the "Check In" button
      disableCheckInButton();
    }
  );
} else {
  console.error("Geolocation is not available in this browser.");
  // If geolocation is not available, disable the "Check In" button
  disableCheckInButton();
}
