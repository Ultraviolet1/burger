$(function() {
    $(".eaten").on("click", function(event){
        var id = $(this).data("id");

        var eatenStatus = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenStatus
        }).then(
            function() {
                console.log("status changed", eatenStatus);

                location.reload();
            }
        );
    });


    $(".create-burger").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("new burger created");

                location.reload();
            }
        );
    });

    $(".deleteburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
});