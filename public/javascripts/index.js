$(document).ready(function() {





    $("#submit").click(function(event) {
        event.preventDefault();
        var search = $("#search").val();
        console.log(submit)
        $.post("/search", { "search" : search }, function(data) {
              console.log(data);
          });
        });

});