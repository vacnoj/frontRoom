// Load google maps
var mapQuery = `https://maps.googleapis.com/maps/api/js?key=${googleAPIKey}&callback=initMap`
var googleAPIKey = 'AIzaSyAcCMUXlZBbpD3wzWw5R3njNW6MDltQLRs';

var map;
function initMap() {
    var location = { lat: 39.682337, lng: -105.156326 }
    map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
// End google maps

$(document).ready(function () {
    // initialize modals
    $('.modal').modal();
    // initialize dropdowns
    $('.dropdown-trigger').dropdown();
    // initialize tooltips
    $('.tooltipped').tooltip();
    
    console.log("script.js loaded");

    $('#returnHome').hide();
    
    $('#feedbackButton').click(function() {
        event.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var comments = $('#comments').val();
        
        
        
        console.log(name, email, phone, comments);
        
        $('.header').html(`<h2 class="">Thank You!</h2>`)
        $('#feedbackForm').slideUp(1000, function() {
            $('#returnHome').fadeIn(3000);
        });
        
    });

    // Switch through the Menu Pages
    $('.menuItems').click(function () {
        $('.pagination li').removeClass('active');
        $(this).parent().addClass('active');
        menuItem();
    });

    function menuItem() {

        var activeMenuItem = $('.pagination .active').data('food');
        switch (activeMenuItem) {
            case 'pasta': console.log("show the pasta");
                $('#menuContent').html(pasta);
                break;
            case 'pizza': console.log("show the pizza");
                $('#menuContent').html(pizza);
                break;
            case 'sandwich': console.log("show the sandwich");
                $('#menuContent').html(sandwich);
                break;
            case 'children': console.log("show the children's menu");
                $('#menuContent').html(children);
                break;
            case 'salad': console.log("show the salad");
                $('#menuContent').html(salad);
                break;
            case 'drink': console.log("show the drink");
                $('#menuContent').html(drink);
                break;
            case 'dessert': console.log("show the dessert");
                $('#menuContent').html(dessert);
                break;
            case 'lunch': console.log("show the lunch");
                $('#menuContent').html(lunch);
                break;
            default: console.log("No menu loaded")
                $('#menuContent').html("Error script.js:62");
        }

    }


    var pasta = (
        `<div>
        <p align="center"> 
        &nbsp;<font size="6">Pasta</font><font size="3"></font>
        <br><br>
        <font size="2">All Pasta Dishes are served Piping 
        Hot with Garlic Bread Slices</font></p>
        <div align="center">
            <table border="0" width="475" id="table1" height="0" cellpadding="2">
                <tbody><tr>
                    <td width="327" colspan="2" align="left"><font size="4"><b>
                    Spaghetti</b></font></td>
                    <td width="71" align="left"><b>Regular</b></td>
                    <td align="left"><b>Small</b></td>
                </tr>
                <tr>
                    <td width="327" align="left" colspan="2">Vegetarian Style</td>
                    <td width="71" align="left">5.25</td>
                    <td align="left">4.50</td>
                </tr>
                <tr>
                    <td width="327" align="left" colspan="2">Rich Meat Sauce</td>
                    <td width="71" align="left">5.25</td>
                    <td align="left">4.50</td>
                </tr>
                <tr>
                    <td width="327" align="left" colspan="2">Zesty Meatballs &amp; Meat 
                    Sauce</td>
                    <td width="71" align="left">5.90</td>
                    <td align="left">5.10</td>
                </tr>
                <tr>
                    <td width="327" align="left" colspan="2">Italian Sausage &amp; Meat 
                    Sauce</td>
                    <td width="71" align="left">5.90</td>
                    <td align="left">5.10</td>
                </tr>
                <tr>
                    <td width="327" align="left" colspan="2">Chicken Tenders &amp; Pasta 
                    Sauce</td>
                    <td width="71" align="left">5.90</td>
                    <td align="left">5.10</td>
                </tr>
                <tr>
                    <td width="229" align="left">Extra Meatball</td>
                    <td width="92" align="left">.50 each</td>
                    <td width="71">&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td width="229" align="left">Extra Italian Sausage Link</td>
                    <td width="92" align="left">1.00 each</td>
                    <td width="71">&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td width="229" align="left">Extra Chicken Tender</td>
                    <td width="92" align="left">1.00 each</td>
                    <td width="71">&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
            </tbody></table>
            <p>&nbsp;</p>
            <table border="0" id="table2" cellpadding="2" width="475">
                <tbody><tr>
                    <td align="left"><font size="4"><b>Baked Spaghetti Supreme</b></font></td>
                    <td width="52" align="right">6.50</td>
                </tr>
                <tr>
                    <td colspan="2" align="left">Spaghetti baked with pepperoni, mushrooms, green 
                    peppers, onions, beef topping, pork topping, smothered with 
                    pasta sauce and melted Mozzarella cheese.</td>
                </tr>
            </tbody></table>
            <br>
            <table border="0" id="table3" cellpadding="2" width="475">
                <tbody><tr>
                    <td align="left"><font size="4"><b>Baked Spaghetti Vegetarian</b></font></td>
                    <td width="52" align="right">6.50</td>
                </tr>
                <tr>
                    <td colspan="2" align="left">Spaghetti baked with mushrooms, black olives, 
                    onions, green peppers, smothered with pasta sauce and melted 
                    Mozzarella cheese.</td>
                </tr>
            </tbody></table>
        </div>
        <br>
        <div align="center">
            <table border="0" width="475" id="table4">
                <tbody><tr>
                    <td width="330" align="left"><font size="4"><b>Baked Ravioli</b></font></td>
                    <td>&nbsp;</td>
                    <td width="58">&nbsp;</td>
                </tr>
                <tr>
                    <td width="330" align="left">Baked Ravioli stuffed with spinach, 
                    Ricotta, and Mozzarella cheese.</td>
                    <td valign="bottom" align="left"><b>Regular</b></td>
                    <td width="58" valign="bottom" align="left"><b>Small</b></td>
                </tr>
                <tr>
                    <td width="330" align="left"><font size="2"><i>with Italian 
                    Sausage Link add 1.00</i></font></td>
                    <td align="left">6.50</td>
                    <td width="58" align="left">5.50</td>
                </tr>
                <tr>
                    <td width="330" align="left">Baked Ravioli stuffed with Ricotta 
                    cheese</td>
                    <td align="left" valign="bottom">6.50</td>
                    <td width="58" align="left" valign="bottom">5.50</td>
                </tr>
            </tbody></table>
        </div>
        <br>
        <div align="center">
            <table border="0" width="475" id="table5">
                <tbody><tr>
                    <td width="408" align="left"><font size="4"><b>Hot Cheese Garlic 
                    Bread</b></font></td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td width="408" align="left">Melted Mozzarella and Parmesan 
                    Cheeses on Toasted Garlic Bread</td>
                    <td valign="bottom" align="left">2.65</td>
                </tr>
                <tr>
                    <td width="408" align="left">Without Mozzarella Cheese</td>
                    <td align="left">1.85</td>
                </tr>
                <tr>
                    <td width="408" align="left">Bread Stix with Honey or Pasta 
                    Sauce</td>
                    <td align="left" valign="bottom">2.95</td>
                </tr>
            </tbody></table>
            `)

    var pizza = (`<p align="center"><font size="6">Pizza</font>
        <br><br>
        <font size="2">We use only 100% 
        Natural Cheeses. We make our own Dough Fresh Daily.</font></p>
        <div align="center">
		<table border="0" width="475" cellpadding="2" id="table7">
			<tbody><tr>
				<td width="50%"><font size="4"><b>Pan Pizza</b></font></td>
				<td width="50%"><font size="4"><b>Thin Pizza</b></font></td>
			</tr>
			<tr>
				<td width="227" align="justify">Our Pan Pizza has a tender golden crust, just 
				loaded with all your favorite toppings and smothered with pure 
				Mozzarella cheese.</td>
				<td align="justify">(White or Wheat)<br>Our Thin Crust Pizza has a light cripsy 
				crust just waiting to be loaded with your favorite toppings and 
				piled high with pure Mozzarella cheese.</td>
			</tr>
		</tbody></table>
		<br>
		<table border="0" width="475" id="table8" cellspacing="0">
			<tbody><tr>
				<td><font size="4"><b>Super Supreme</b></font></td>
				<td width="66" valign="bottom">&nbsp;</td>
				<td width="63" valign="bottom">&nbsp;</td>
				<td width="77" valign="bottom">&nbsp;</td>
			</tr>
			<tr>
				<td height="38" valign="bottom"><b>Our ultimate Pizza - 9 Delicious Toppings</b></td>
				<td width="66" valign="bottom"><b>Small</b><br>Serves</td>
				<td width="63" valign="bottom"><b>Medium</b><br>Serves</td>
				<td width="77" valign="bottom"><b>Large</b><br>Serves</td>
			</tr>
			<tr>
				<td rowspan="2" valign="top">Pepperoni, Italian Sausage, Ham, Green Pepper, 
				Onion, Beef Topping, Pork Topping, Black Olive, Mushrooms</td>
				<td width="66" valign="top" height="26">1-2</td>
				<td width="63" valign="top" height="26">2-3</td>
				<td width="77" valign="top" height="26">3-5</td>
			</tr>
			<tr>
				<td width="66" valign="top" height="48">13.20</td>
				<td width="63" valign="top" height="48">16.25</td>
				<td width="77" valign="top" height="48">19.20</td>
			</tr>
		</tbody></table>
    </div>
    <div align="center">
		<br>
		<table border="0" width="475" id="table9" cellspacing="0">
			<tbody><tr>
				<td><font size="4"><b>Supreme</b></font></td>
				<td width="66" valign="bottom">&nbsp;</td>
				<td width="63" valign="bottom">&nbsp;</td>
				<td width="77" valign="bottom">&nbsp;</td>
			</tr>
			<tr>
				<td height="38" valign="bottom"><b>A Nice Balance of Meat and 
				Vegetables - Six in All</b></td>
				<td width="66" valign="bottom"><b>Small</b><br>Serves</td>
				<td width="63" valign="bottom"><b>Medium</b><br>Serves</td>
				<td width="77" valign="bottom"><b>Large</b><br>Serves</td>
			</tr>
			<tr>
				<td rowspan="2" valign="top">Pepperoni, Mushrooms, Green Pepper, 
				Onion, Beef Topping, Pork Topping</td>
				<td width="66" valign="top" height="26">1-2</td>
				<td width="63" valign="top" height="26">2-3</td>
				<td width="77" valign="top" height="26">3-5</td>
			</tr>
			<tr>
				<td width="66" valign="top" height="36">12.40</td>
				<td width="63" valign="top" height="36">15.35</td>
				<td width="77" valign="top" height="36">18.20</td>
			</tr>
		</tbody></table>
		<br>
		<table border="0" width="475" id="table10" cellspacing="0">
			<tbody><tr>
				<td><font size="4"><b>Frontroom's Vegetarian</b></font></td>
				<td width="66" valign="bottom">&nbsp;</td>
				<td width="63" valign="bottom">&nbsp;</td>
				<td width="77" valign="bottom">&nbsp;</td>
			</tr>
			<tr>
				<td height="38" valign="top"><b>Order up to 5 of your favorite 
				toppings.</b></td>
				<td width="66" valign="bottom"><b>Small</b><br>Serves</td>
				<td width="63" valign="bottom"><b>Medium</b><br>Serves</td>
				<td width="77" valign="bottom"><b>Large</b><br>Serves</td>
			</tr>
			<tr>
				<td rowspan="2" valign="top">Fresh Mushrooms, Green Chili, 
				Onions, Green Peppers, Pineapple, Tomato Slices, Black Olives, 
				Green Olives, Jalapenos</td>
				<td width="66" valign="top" height="26">1-2</td>
				<td width="63" valign="top" height="26">2-3</td>
				<td width="77" valign="top" height="26">3-5</td>
			</tr>
			<tr>
				<td width="66" valign="top" height="36">12.40</td>
				<td width="63" valign="top" height="36">15.35</td>
				<td width="77" valign="top" height="36">18.20</td>
			</tr>
		</tbody></table>
        </div>
        <div align="center">
		<table border="0" width="475" id="table11" cellspacing="0">
			<tbody><tr>
				<td><font size="4"><b>Cheese Pizza</b></font></td>
				<td width="66" valign="bottom">10.00</td>
				<td width="63" valign="bottom">12.65</td>
				<td width="77" valign="bottom">15.20</td>
			</tr>
			<tr>
				<td height="26" valign="top">&nbsp;</td>
				<td width="66" valign="bottom">&nbsp;</td>
				<td width="63" valign="bottom">&nbsp;</td>
				<td width="77" valign="bottom">&nbsp;</td>
			</tr>
			<tr>
				<td valign="top"><b><font size="4">Create Your Own Pizza</font><br><font size="2">Cheese 
				and 1 Topping</font></b></td>
				<td width="66" valign="top" height="38">10.50</td>
				<td width="63" valign="top" height="38">13.45</td>
				<td width="77" valign="top" height="38">16.20</td>
			</tr>
			<tr>
				<td valign="top"><b><font size="2">Each Additional Topping</font></b></td>
				<td width="66" valign="top" height="36">.80</td>
				<td width="63" valign="top" height="36">.90</td>
				<td width="77" valign="top" height="36">1.00</td>
			</tr>
		</tbody></table>
		<br>
		<table border="0" width="475" id="table12">
			<tbody><tr>
				<td colspan="3"><font size="4"><b>Choose Your Favorite Toppings</b></font></td>
			</tr>
			<tr>
				<td align="left">Extra Cheese</td>
				<td align="left">Black Olives</td>
				<td align="left">Italian Sausage</td>
			</tr>
			<tr>
				<td align="left">Pepperoni</td>
				<td align="left">Onions</td>
				<td align="left">Pork Topping</td>
			</tr>
			<tr>
				<td align="left">Canadian Bacon</td>
				<td align="left">Salami</td>
				<td align="left">Pineapple</td>
			</tr>
			<tr>
				<td align="left">Ham</td>
				<td align="left">Tomato Slices</td>
				<td align="left">Chicken</td>
			</tr>
			<tr>
				<td align="left">Bacon Bits</td>
				<td align="left">Jalapenos</td>
				<td align="left">Anchovies</td>
			</tr>
			<tr>
				<td align="left">Fresh Mushrooms</td>
				<td align="left">Green Chili</td>
				<td align="left">Green Olives</td>
			</tr>
			<tr>
				<td align="left">Green Peppers</td>
				<td align="left">Beef Topping</td>
				<td align="left">&nbsp;</td>
			</tr>
		</tbody></table>
		<br>
		<div align="center">
			<table border="0" width="475" id="table13">
				<tbody><tr>
					<td width="389"><font size="4"><b>Calzones </b></font>(Any 3 
					items plus cheese)</td>
					<td>8.35</td>
				</tr>
            </tbody></table>
            `)

    var sandwich = (`<p><font size="6">Sandwiches</font><br><br><font size="2">All sandwiches are 
    served Hot with Potato Chips and Pickle Spear.</font></p><div align="center">
    <br>
        <table border="0" width="475" id="table14" cellpadding="2">
            <tbody><tr>
                <td width="387" align="left"><font size="4"><b>Frontroom Deli</b><br></font>Ham 
                and salami slices topped with melted cheese, shredded 
                lettuce, sliced tomatoes and Italian dressing.</td>
                <td valign="top">6.95</td>
            </tr>
            <tr>
                <td width="387">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td width="387" align="left"><font size="4"><b>Frontroom Ham &amp; Cheese</b><br></font>Ham 
                slices topped high on a bun with melted cheese, shredded 
                lettuce, sliced tomatoes and Italian dressing.</td>
                <td valign="top">6.95</td>
            </tr>
            <tr>
                <td width="387">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td width="387" align="left"><font size="4"><b>Frontroom Meatball</b><br></font>Hot 
                meatballs in zesty tomato sauce with melted Mozzarella 
                cheese. Topped with sautéed green peppers and onions.</td>
                <td valign="top">6.95</td>
            </tr>
            <tr>
                <td width="387">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td width="387" align="left"><font size="4"><b>Frontroom Italian 
                Sausage</b><br></font>Italian sausage link split open with 
                tomato sauce, topped with Mozzarella cheese and sautéed 
                green peppers and onions.</td>
                <td valign="top">6.95</td>
            </tr>
            <tr>
                <td width="387">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
            <tr>
                <td width="387" align="left"><font size="4"><b>Frontroom Chicken</b><br></font>Your 
                choice of either: Italian Style with tomato sauce, 
                Mozzarella cheese and sautéed onions and green pepper - 
                or - American Style with lettuce, tomato, mayonnaise and 
                melted Mozzarella cheese.</td>
                <td valign="top">6.95</td>
            </tr>
            <tr>
                <td width="387">&nbsp;</td>
                <td>&nbsp;</td>
            </tr>
        </tbody></table>`)

    var children = (`<p><font size="6">Children's Menu</font><br><br><font size="2">10 and under</font>
        <br><br>
        </p><div align="center">
            <table border="0" width="475" id="table15">
                <tbody><tr>
                    <td width="390" align="left">Spaghetti with Meat Sauce</td>
                    <td>3.55</td>
                </tr>
                <tr>
                    <td width="390" align="left">Ham and Cheese</td>
                    <td>3.55</td>
                </tr>
                <tr>
                    <td width="390" align="left">Salad Bar (one trip)</td>
                    <td>2.50</td>
                </tr>
                <tr>
                    <td width="390" align="left">Child Size Beverage</td>
                    <td>1.50</td>
                </tr>
            </tbody></table>`)

    var drink = (`<p><font size="6">Beverages</font></p>
        <div align="center">
            <table border="0" width="475" id="table16">
                <tbody><tr>
                    <td align="left">Coke, Sprite, Mr. Pibb, Diet Coke, 
                    Cherry Coke</td>
                    <td width="75">2.20</td>
                </tr>
                <tr>
                    <td align="left">Iced Tea, Lemonade (Free Refills)</td>
                    <td width="75">2.20</td>
                </tr>
                <tr>
                    <td align="left">Hot Tea, Milk, Hot Chocolate, Apple 
                    Juice</td>
                    <td width="75">2.20</td>
                </tr>
                <tr>
                    <td align="left">Coffee</td>
                    <td width="75">1.95</td>
                </tr>
                <tr>
                    <td align="left">I.B.C. Rootbeer per bottle</td>
                    <td width="75">2.35</td>
                </tr>
            </tbody></table>
            <br>
            <div align="center">
                <table border="0" width="475" id="table17">
                    <tbody><tr>
                        <td width="132" align="left"><b>Draft Beer</b></td>
                        <td width="76">&nbsp;</td>
                        <td align="left" width="174"><b>Wine</b></td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td width="132" align="left">Mug</td>
                        <td width="76" align="left">2.75</td>
                        <td align="left" width="174">House Wine, Glass</td>
                        <td>3.25</td>
                    </tr>
                    <tr>
                        <td width="132" align="left">Half Pitcher</td>
                        <td width="76" align="left">5.25</td>
                        <td align="left" width="174">Chablis, Rose 
                        Burgundy</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td width="132" align="left">Pitcher</td>
                        <td width="76" align="left">10.00</td>
                        <td align="left" width="174">Half Liter</td>
                        <td>5.00</td>
                    </tr>
                    <tr>
                        <td width="132" align="left">Bottled Beer</td>
                        <td width="76" align="left">3.50</td>
                        <td align="left" width="174">Full Liter</td>
                        <td>9.25</td>
                    </tr>
                    <tr>
                        <td width="132" align="left">Premium Beer</td>
                        <td width="76" align="left">3.75</td>
                        <td width="174">&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody></table>
                <p>&nbsp;</p>`)

    var dessert = (`<p><font size="6">Desserts</font></p>
    <div align="center">
        <table border="0" width="475" id="table18">
            <tbody><tr>
                <td width="390" align="left">Hot Fudge 
                Calzone with vanilla ice cream</td>
                <td>4.50</td>
            </tr>
            <tr>
                <td width="390" align="left">Ice Cream</td>
                <td>1.75</td>
            </tr>
            <tr>
                <td width="390" align="left">I.B.C. Rootbeer 
                Float</td>
                <td>3.50</td>
            </tr>
        </tbody></table>
        <p>&nbsp;</p>`)

    var lunch = (`<p><font size="6">Lunch Menu</font><br><br><font size="2">(Available 
        until 3:00 pm Tuesday thru Sunday)</font></p><div align="center">
        <br>
            <table border="0" width="475" id="table19">
                <tbody><tr>
                    <td colspan="2" align="center">
                    <font size="4"><b>Personal Pan Pizzas</b></font></td>
                </tr>
                <tr>
                    <td width="389" align="left"><b>
                    Frontroom Supreme</b><br>Pepperoni, 
                    Mushrooms, Green Peppers, Onions, Beef 
                    Topping, Pork Topping</td>
                    <td width="76" valign="top">4.45</td>
                </tr>
                <tr>
                    <td width="389" align="left"><b>
                    Pepperoni</b><br>If you want something 
                    different create your own!</td>
                    <td width="76" valign="top">3.75</td>
                </tr>
                <tr>
                    <td width="389" align="left"><b>Deluxe 
                    Cheese</b></td>
                    <td width="76">3.40</td>
                </tr>
                <tr>
                    <td width="389" align="left">Each 
                    additional topping (limit three)</td>
                    <td width="76">.35</td>
                </tr>
            </tbody></table>
            <br><br>
        <div align="center">
            <div align="center">
                <table border="0" width="475" id="table21">
                    <tbody><tr>
                        <td align="left"><font size="4"><b>
                        Calzone</b></font> (Any three items 
                        plus cheese)</td>
                        <td width="75">7.45</td>
                    </tr>
                </tbody></table>
            </div>
            <table border="0" width="475" id="table20">
                <tbody><tr>
                    <td align="left">Extra Cheese</td>
                    <td align="left">Black Olives</td>
                    <td align="left">Italian Sausage</td>
                </tr>
                <tr>
                    <td align="left">Pepperoni</td>
                    <td align="left">Onions</td>
                    <td align="left">Pork Topping</td>
                </tr>
                <tr>
                    <td align="left">Canadian Bacon</td>
                    <td align="left">Salami</td>
                    <td align="left">Pineapple</td>
                </tr>
                <tr>
                    <td align="left">Ham</td>
                    <td align="left">Tomato Slices</td>
                    <td align="left">Chicken</td>
                </tr>
                <tr>
                    <td align="left">Bacon Bits</td>
                    <td align="left">Jalapenos</td>
                    <td align="left">Anchovies</td>
                </tr>
                <tr>
                    <td align="left">Fresh Mushrooms</td>
                    <td align="left">Green Chili</td>
                    <td align="left">Green Olives</td>
                </tr>
                <tr>
                    <td align="left">Green Peppers</td>
                    <td align="left">Beef Topping</td>
                    <td align="left">&nbsp;</td>
                </tr>
            </tbody></table>
            <br>
            <div align="center">
                <table border="0" width="475" id="table22">
                    <tbody><tr>
                        <td width="388" align="left"><b>
                        Salad Bar with a Meal</b></td>
                        <td>3.25</td>
                    </tr>
                    <tr>
                        <td width="388" align="left"><b>
                        Salad Bar as a Meal</b></td>
                        <td>3.95</td>
                    </tr>
                    <tr>
                        <td width="388" align="left"><b>Hot 
                        Cheese Garlic Bread</b></td>
                        <td>1.40</td>
                    </tr>
                    <tr>
                        <td width="388">Without Cheese</td>
                        <td>1.00</td>
                    </tr>
                    <tr>
                        <td width="388" align="left"><b>
                        Bread Stix with Honey or Pasta Sauce</b></td>
                        <td>2.95</td>
                    </tr>
                </tbody></table>
                <p><b>All items on Dinner Menu are available 
                for Lunch!</b></p></div>
        </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
</div>
<p>&nbsp;</p></div>`)


    var salad = (`<p align="center"><font size="6">Salad</font>
        <br><br>
        <font size="2">Create your own 
        Masterpiece from our Garden of Fresh Vegetables and Fruits</font></p>
        <div align="center">
		<table border="0" width="475" id="table6">
			<tbody><tr>
				<td width="334" align="left">Platter, as a Meal</td>
				<td align="left">4.75 per person</td>
			</tr>
			<tr>
				<td width="334" align="left">Platter, with a Meal</td>
				<td valign="bottom" align="left">3.75 per person</td>
			</tr>
			<tr>
				<td width="334" align="left">Carry Out Salad</td>
				<td align="left">3.95 each</td>
			</tr>
		</tbody></table>
	</div>`)

    // End Switch through the Menu Pages



    menuItem();
    // end of document.ready
});

// function FoodItem(name, category, smallCost, regularCost) {
//     this.name = name;
//     this.category = category;
//     this.smallCost = smallCost;
//     this.regularCost = regularCost;
// }

// var 
// var spaghetti = new FoodItem("Vegetarian Style", "pasta", "$4.50", "$5.25" );
// console.log(spaghetti.name)

// var pasta = (
//     `<table class="menuTable" id="otherPastaTable">
//         <thead>
//             <tr>
//                 <th>Baked Spaghetti</th>
//                 <th></th>
//                 <th></th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>Baked Spaghetti Supreme</td>
//                 <td>$6.50</td>
//                 <td>Spaghetti baked with pepperoni, mushrooms, green peppers, onions, beef topping, pork topping, smothered with pasta sauce and melted Mozzarella cheese.</td>
//             </tr>
//             <tr>
//                 <td>Baked Spaghetti Vegetarian</td>
//                 <td>$6.50</td>
//                 <td>Spaghetti baked with mushrooms, black olives, onions, green peppers, smothered with pasta sauce and melted Mozzarella cheese.</td>
//             </tr>
//         </tbody>
//     </table>

//     <table class="menuTable" id="spaghettiTable">
//         <thead>
//             <tr>
//                 <th>Spaghetti</th>
//                 <th>Small</th>
//                 <th>Regular</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>Vegetarian Style</td>
//                 <td>$4.50</td>
//                 <td>$5.25</td>
//             </tr>
//             <tr>
//                 <td>Rich Meat Sauce</td>
//                 <td>$4.50</td>
//                 <td>$5.25</td>
//             </tr>
//             <tr>
//                 <td>Zesty Meatballs & Meat Sauce</td>
//                 <td>$5.10</td>
//                 <td>$5.90</td>
//             </tr>
//             <tr>
//                 <td>Italian Sausage & Meat Sauce</td>
//                 <td>$5.10</td>
//                 <td>$5.90</td>
//             </tr>
//             <tr>
//                 <td>Chicken Tenders & Pasta Sauce</td>
//                 <td>$5.10</td>
//                 <td>$5.90</td>
//             </tr>
//             <tr>
//                 <td>Extra Meatball $0.50 each</td>
//             </tr>
//             <tr>
//                 <td>Extra Italian Sausage Link $1.00 each</td>
//             </tr>
//             <tr>
//                 <td>Extra Chicken Tender $1.00 each</td>
//             </tr>
//             <thead>
//             <tr>
//                 <th>Baked Ravioli</th>
//                 <th>Small</th>
//                 <th>Regular</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>Stuffed with Spinach, Ricotta, and Mozzarella cheese.</td>
//                 <td>$5.50</td>
//                 <td>$6.50</td>
//             </tr>
//             <tr>
//                 <td> Stuffed with Ricotta cheese</td>
//                 <td>$5.50</td>
//                 <td>$6.50</td>
//             </tr>
//             <tr>
//                 <td>Italian Sausage Link add $1.00</td>
//             </tr>

//         </tbody>
//         </tbody>
//     </table>
// `)

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
