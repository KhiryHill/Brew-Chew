$(document).ready(function () {
    //Create a function to hide the start button when it is clicked
    $("#yesButton").on("click", function(){
        $("#content-row").hide();
        $(".questions").show();
    })
    var zipCodeBox = $("#zip-code");
    var errorDiv = container.find("div.text-error");
    //Response Handler
    function theResponse(data){
    }
 });


var queryURL ="https://api.openbrewerydb.org/breweries?by_state=north_carolina";

$.ajax({
    url:queryURL,
    method:"GET"
})
.then(function(response) {
    console.log(response);
    for (var i = 0; i < response.length; i++){
        document.write(queryURL);


    }
});