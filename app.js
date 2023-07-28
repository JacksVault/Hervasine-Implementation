// Function to handle the button click event
document.getElementById("time_in").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Check if the browser supports geolocation
  if ("geolocation" in navigator) {
    // Get the user's location
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Call the function to check if the user is within the geofence
      checkGeofence(latitude, longitude);
    }, function(error) {
      // Handle error obtaining location
      handleError(error.message);
    });
  } else {
    // Browser does not support geolocation
    handleError("Geolocation is not supported in this browser.");
  }
});

// Function to check if the user is within the geofence
function checkGeofence(latitude, longitude) {
  // Replace the following values with the latitude and longitude of your geofence boundary
  const geofenceLatitude = YOUR_GEOFENCE_LATITUDE;
  const geofenceLongitude = YOUR_GEOFENCE_LONGITUDE;
  const geofenceRadius = 10; // Geofence radius in meters

  // Calculate the distance between the user's location and the geofence center
  const distance = calculateDistance(latitude, longitude, geofenceLatitude, geofenceLongitude);

  // Check if the user is within the geofence
  if (distance <= geofenceRadius) {
    // User is within the geofence, proceed with check-in
    logMessage("User is within the geofence. Check-in successful!");
    // Add your code here to log the attendance and any other actions needed for successful check-in.
  } else {
    // User is outside the geofence, prevent check-in
    logMessage("User is outside the geofence. Check-in disabled.");
    // Add your code here to display a message to the user or handle the check-in rejection.
  }
}

// Function to calculate the distance between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  // Add your code here to calculate the distance between the points using the Haversine formula.
}

// Function to handle errors and display messages
function handleError(errorMessage) {
  // Add your code here to display the error message to the user or handle the error appropriately.
  console.error(errorMessage);
}

// Function to log messages to the console for diagnostics
function logMessage(message) {
  console.log(message);
}
