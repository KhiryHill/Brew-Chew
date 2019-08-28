$("button").on("click", function() {
    var beer = $(this).attr("");
    var queryURL = "https://server.digitalpour.com/DashboardServer/api/v3/MenuItems///Tap?apiKey=" +
      beer + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
});

$.ajax({
    url: queryURL,
    method: "GET"
});