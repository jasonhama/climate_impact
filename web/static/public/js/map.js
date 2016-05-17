function initMap() {
    
var styleArray = [
        {
            featureType: "all",
            stylers: [
                { saturation: -80 }
            ]
        }
    ];

    var map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 47.7511,lng: -120.7401},
        styles: styleArray,
        zoom: 7
    });

    map.data.loadGeoJson("../map/washington.json");

    map.data.setStyle({
        fillColor: 'green'
    });

}
