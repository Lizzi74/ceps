   $(".menu").click(menuAppear);

  function menuAppear() {
    $("nav").show("slow"); 
    $(".menu").css("white");
  }

  function menuClose() {
    $("nav").hide("fast");
    $(".menu").css("yellow");
    
  }


//Google Map Contattaci Page

function initialize(){
  var mapOptions = {
    zoom: 13,
    center: {lat: 44.543030, lng: 11.359992}
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var locations = [
    {name: 'Ceps', address: 'via Colombarola, Bologna, Italy', lat: 44.543030, lng: 11.359992}
  ]

  locations.forEach(function(element, index, array){
    var marker, content;

    marker = createMarker(element);
    content = createInfoWindow(element, marker);
  });

  function createMarker(element){
    var coordinates = new google.maps.LatLng(element.lat, element.lng); 

    var marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      title: element.name
    });

    return marker;
  }

  function createInfoWindow(element, marker){
    var contentString;
  }
}
google.maps.event.addDomListener(window, 'load', initialize);
