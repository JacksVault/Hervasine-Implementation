//Alert messages for each button click
document.getElementById("checkInBtn").addEventListener("click", function() {
    alert("Check-in button clicked!");
});

document.getElementById("checkOutBtn").addEventListener("click", function() {
    alert("Check-out button clicked!");
});

// Check if Geolocation is available in the user's browser
if ("geolocation" in navigator) {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Extract the latitude and longitude from the position object
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
        // Log the latitude and longitude to the console
        console.log("Latitude: " + latitude);
        console.log("Longitude: " + longitude);
      },
      (error) => {
        console.error("Error getting location:", error.message);
      }
    );
  } else {
    console.error("Geolocation is not available in this browser.");
  }
  