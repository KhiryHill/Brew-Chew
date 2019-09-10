$(document).ready(function () {

    var firebaseConfig = {
        apiKey: "AIzaSyBjKL9Ks9p5Lp9jGW_4kr1XUVTsmV4_eE4",
        authDomain: "brewchew-8ad13.firebaseapp.com",
        databaseURL: "https://brewchew-8ad13.firebaseio.com",
        projectId: "brewchew-8ad13",
        storageBucket: "",
        messagingSenderId: "707682078969",
        appId: "1:707682078969:web:f67a6cfdf767463c721228"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
    var modal = document.getElementById("fbModal");
    var firstName = document.getElementById('fName')
   var lastName = document.getElementById('lName')
   var userEmail = document.getElementById('inputEmail')
   var form = document.getElementById('form')

    //Create a function to open modal when the "yes" button is pressed
    $("#yesBtn").click(function () {
        modal.style.display = "block";
    });
 //Create a function to validate user input
 // $("#user-input").validate({
 //     rules: {
 //         fName: "required",
 //         lName: "required"
 //     },
 //     email: {
 //         required: true,
 //         email: true
 //     },
 //     messages: {
 //         fName: "Please enter your firstname.",
 //         lName: "Please enter your lastname."
 //     }, email:{
 //         required: "Please enter an email address.",
 //         email: "Please enter a <em>valid</em> email address."
 //     }
 //})
    //Create a function to hide the age validation when the submit button is pressed
    $("#submit").on("click", function () {
        event.preventDefault();
        event.stopPropagation();
        var messages = []
       if(firstName.value === '' || userEmail.value === "" || lastName.value === '' ){
           messages.push('First name is required')
           return
       }
        modal.style.display = "none";
        $(".page1").hide();
        $(".page2").show();
        // Grabbed Values
        var fName = $("#fName").val();
        var lName = $("#lName").val();
        var email = $("#inputEmail").val();
        // Uploads user data to the database
        database.ref().push({
            fName: fName,
            lName: lName,
            email: email,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
        //Check variables
        console.log(fName);
        console.log(lName);
        console.log(email);
        //Clear input boxes
        $("#fName").val("");
        $("#lName").val("");
        $("#inputEmail").val("");
    });
    //Create a function to display an alert if the no button is pressed
    $("#noBtn").on("click", function () {
        $(".page1").hide();
        $(".page0").show();
    })
    //Create a function to display the age checker if the "Brew" button is pressed
    $("#brewBtn").on("click", function () {
        $(".iPage").hide();
        $(".page1").show();
    })
    //Create a function to display restaurants if the "Chew" button is pressed
    $("#chewBtn").on("click", function () {
        $(".iPage").hide();
        $(".page3").show();
    })
    //Create a function to display restaurants if the "fill my plate" button is pressed
    $(".plateBtn").on("click", function () {
        $(".page0").hide();
        $(".page2").hide();
        $(".page3").show();
    })
    //Create a function to display breweries if the "fill my mug" button is pressed
    $(".mugBtn").on("click", function () {
        $(".page3").hide();
        $(".page1").show();
    })

var name = "";
    var barURL = "https://api.openbrewerydb.org/breweries?by_state=north_carolina";

    $.ajax({
        url: barURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
            name = response[i].name;
            street = response[i].street;
            phone = response[i].phone;
            website = response[i].website_url;
            $('#bar-name').append(name + "<br>");
            $("#location").append(street + "<br>");
            $("#phone").append(phone + "<br>");
            $("#url").append(website + "<br>");
        }
    });

    //Create a function to hide the start button when it is clicked
    $("#yesButton").on("click", function () {
        $("#content-row").hide();
        $(".questions").show();
    });

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://us-restaurant-menus.p.rapidapi.com/restaurants/zip_code/28213",
        "method": "GET",
        "headers": {
          "X-RapidAPI-Host": "us-restaurant-menus.p.rapidapi.com",
          "X-RapidAPI-Key": "a2a146e526msh7075b7250515c75p13d74bjsn4414590d1dc6"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        for (var i= 0; i <response.result.data.length; i++){
            address = response.result.data[i].address.formatted;
            ResName = response.result.data[i].restaurant_name;
            PhoneNumber = response.result.data[i].restaurant_phone;
            Cuisines = response.result.data[i].cuisines;
            
            console.log(ResName);
            console.log(PhoneNumber);
            console.log(address);
            console.log(Cuisines)
        }

      });

      var menuitems = {
        "async": true,
        "crossDomain": true,
        "url": "https://us-restaurant-menus.p.rapidapi.com/restaurant/47773/menuitems?page=3",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
            "x-rapidapi-key": "a2a146e526msh7075b7250515c75p13d74bjsn4414590d1dc6"
        }
    }
    
    $.ajax(menuitems).done(function (response) {
        console.log(response);

        for ( var i=0; i <response.result.data.length; i++){
            menuitemname = response.result.data[i].menu_item_name;
            menuitem = response.result.data[i].menu_item_pricing;

            console.log(menuitemname);
            console.log(menuitem);
        }
    });

});

