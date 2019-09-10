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

    var barURL = "https://api.openbrewerydb.org/breweries?by_city=charlotte&by_state=north_carolina";

    $.ajax({
        url: barURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
            name = response[i].name;
            street = response[i].street;
            city = response[i].city;
            phone = response[i].phone;
            website = response[i].website_url;
            $('#bar-name').append(name + "<br>");
            $("#location").append(street + "<br>");
            //$("#city").append(city + "<br>");
            $("#phone").append(phone + "<br>");

            $("#url").append(website + "<br>");
        }
    });

});
