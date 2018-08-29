// Load google maps
var mapQuery = `https://maps.googleapis.com/maps/api/js?key=${googleAPIKey}&callback=initMap`
var googleAPIKey = 'AIzaSyAcCMUXlZBbpD3wzWw5R3njNW6MDltQLRs';

var map;
function initMap() {
    var location = {lat: 39.682337, lng: -105.156326}
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.6814467, lng: -105.1595985},
    zoom: 15
    });
    var marker = new google.maps.Marker({
        position: location, 
        map: map
    });
}
// End google maps

$(document).ready(function() {
    
    console.log("script.js loaded");

    // Switch through the Menu Pages
    $('.menuItems').click(function() {
        console.log($(this));
        $('.pagination li').removeClass('active');
        $(this).parent().addClass('active');

    });

    console.log($('.pagination .active').data('food'));
    // End Switch through the Menu Pages


// end of document.ready
});