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
        $('.pagination li').removeClass('active');
        $(this).parent().addClass('active');
        menuItem();
    });

    function menuItem() {

        // console.log($('.pagination .active').data('food'));
        var activeMenuItem = $('.pagination .active').data('food');
        switch (activeMenuItem) {
            case 'pasta': console.log("show the pasta");
                $('#menuContent').empty();
                $('#menuContent').html(pasta);

            break;
            case 'pizza': console.log("show the pizza");
            break;
            case 'sandwich': console.log("show the sandwich");
            break;
            case 'children': console.log("show the children's menu");
            break;
            case 'salad': console.log("show the salad");
            break;
            case 'drink': console.log("show the drink");
            break;
            case 'dessert': console.log("show the dessert");
            break;
            case 'lunch': console.log("show the lunch");
            break;
            default: console.log("No menu loaded")
        }

    }
    menuItem();

        

    var pasta = (
        `<table>
            <thead>
                <tr>
                    <th>Spaghetti</th>
                    <th>Small</th>
                    <th>Regular</th>
                </tr>
            </thead>
            <tbody>
                <tr class="center">
                    <td>Vegetarian Style</td>
                    <td>$4.50</td>
                    <td>$5.25</td>
                </tr>
                <tr class="center">
                    <td>Rich Meat Sauce</td>
                    <td>$4.50</td>
                    <td>$5.25</td>
                </tr>
                <tr class="center">
                    <td>Zesty Meatballs & Meat Sauce</td>
                    <td>$5.10</td>
                    <td>$5.90</td>
                </tr>
                <tr class="center">
                    <td>Italian Sausage & Meat Sauce</td>
                    <td>$5.10</td>
                    <td>$5.90</td>
                </tr>
                <tr class="center">
                    <td>Chicken Tenders & Pasta Sauce</td>
                    <td>$5.10</td>
                    <td>$5.90</td>
                </tr>
                <tr class="center">
                    <td>Extra Meatball</td>
                    <td>$0.50 each</td>
                </tr>
                <tr class="center">
                    <td>Extra Italian Sausage Link</td>
                    <td>$1.00 each</td>
                </tr>
                <tr class="center">
                    <td>Extra Chicken Tender</td>
                    <td>$1.00 each</td>
                </tr>
            </tbody>
        </table>
    `)
//         All Pasta Dishes are served Piping Hot with Garlic Bread Slices

// Spaghetti	Regular	Small
// Vegetarian Style	5.25	4.50
// Rich Meat Sauce	5.25	4.50
// Zesty Meatballs & Meat Sauce	5.90	5.10
// Italian Sausage & Meat Sauce	5.90	5.10
// Chicken Tenders & Pasta Sauce	5.90	5.10
// Extra Meatball	.50 each	 	 
// Extra Italian Sausage Link	1.00 each	 	 
// Extra Chicken Tender	1.00 each	 	 
 

// Baked Spaghetti Supreme	6.50
// Spaghetti baked with pepperoni, mushrooms, green peppers, onions, beef topping, pork topping, smothered with pasta sauce and melted Mozzarella cheese.

// Baked Spaghetti Vegetarian	6.50
// Spaghetti baked with mushrooms, black olives, onions, green peppers, smothered with pasta sauce and melted Mozzarella cheese.

// Baked Ravioli	 	 
// Baked Ravioli stuffed with spinach, Ricotta, and Mozzarella cheese.	Regular	Small
// with Italian Sausage Link add 1.00	6.50	5.50
// Baked Ravioli stuffed with Ricotta cheese	6.50	5.50

// Hot Cheese Garlic Bread	 
// Melted Mozzarella and Parmesan Cheeses on Toasted Garlic Bread	2.65
// Without Mozzarella Cheese	1.85
// Bread Stix with Honey or Pasta Sauce	2.95

    // End Switch through the Menu Pages


// end of document.ready
});