// Function to handle the button click event
document.getElementById("time_in").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Check if the browser supports geolocation
  if ("geolocation" in navigator) {
    // Get the user's location
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log("User location:", latitude, longitude); // Log the retrieved user location

      // Call the function to check if the user is within the geofence
      checkGeofence(latitude, longitude);
    }, function(error) {
      // Handle error obtaining location
      handleError(error.message);
      // Disable the Time In button if location access is denied
      document.getElementById("time_in").disabled = true;
    });
  } else {
    // Browser does not support geolocation
    handleError("Geolocation is not supported in this browser.");
    // Disable the Time In button if geolocation is not supported
    document.getElementById("time_in").disabled = true;
  }
});

// Function to check if the user is within the geofence
function checkGeofence(latitude, longitude) {
  // Replace the following values with the latitude and longitude of your geofence boundary
  //-0.1939823,35.9330245 //-0.150737,35.960999
  const geofenceLatitude = -0.1939823;
  const geofenceLongitude = 35.9330245;
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
    // Disable the Time In button when the user is out of the geofence
    document.getElementById("time_in").disabled = true;
  }
}

// Function to calculate the distance between two points using the Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  // Add your code here to calculate the distance between the points using the Haversine formula.
  // The result should be in meters.
  //R should be in meters
  const R = 6371000; // metres
  const φ1 = lat1 * Math.PI/180; // φ, λ in radians
  const φ2 = lat2 * Math.PI/180;
  const Δφ = (lat2-lat1) * Math.PI/180;
  const Δλ = (lon2-lon1) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  const d = R * c; // in metres
  console.log("Distance between the points:", d, "meters");
  return d;
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
