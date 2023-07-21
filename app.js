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

      // You can use the latitude and longitude values here for form validation or any other purpose
      // For example, you might want to call a function to perform distance calculations or validation
      // performFormValidation();
    },
    (error) => {
      console.error("Error getting location:", error.message);
    }
  );
} else {
  console.error("Geolocation is not available in this browser.");
}
 