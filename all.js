

// VISITOR COUNT
function incrementVisitorCount() {
    if (localStorage.getItem('visitorCount')) {
      var count = parseInt(localStorage.getItem('visitorCount')) + 1;
      localStorage.setItem('visitorCount', count);
      document.getElementById('visitor-count').innerHTML = count;
    } else {
      localStorage.setItem('visitorCount', 1);
      document.getElementById('visitor-count').innerHTML = 1;
    }
  }

  
 


  // VISITOR COUNT ENDS

  
// GEO LOCATION
  function initMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var mapOptions = {
          zoom: 16,
          center: latlng
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.Marker({
          position: latlng,
          map: map
        });
      });
    }
  }
  

  
  // GEO LOCATION ENDS



  function displayTicker() {
    var ticker = document.getElementById('ticker');
    var date = new Date();
    var options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    var dateString = date.toLocaleDateString('en-US', options);
    var timeString = date.toLocaleTimeString('en-US', {hour12: true});
    var locationString = '';
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude.toFixed(2);
        var longitude = position.coords.longitude.toFixed(2);
        locationString = 'Location: ' + latitude + ', ' + longitude;
        ticker.innerHTML = dateString + ' | ' + timeString + ' | ' + locationString;
        ticker.style.animation = 'ticker 20s linear infinite';
      });
    } else {
      ticker.innerHTML = dateString + ' | ' + timeString;
      ticker.style.animation = 'ticker 20s linear infinite';
    }
  }
  