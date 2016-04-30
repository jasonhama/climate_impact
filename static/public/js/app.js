//$(document).ready(function() {
    var poulsboCoords = {
        lat: 47.655,
        lng: -122.3080
    }
    
    function imitMap() {
        var mapElem = document.getElementById('map');
        var map = new google.maps.Map(mapElem, {
            center: poulsboCoords,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        
        var tribalLandsLayer = new google.maps.KmlLayer({
            url: '',
            map: map
        });
        
    } // initMap()
    
//});