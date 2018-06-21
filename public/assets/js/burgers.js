// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".changeEaten").on("click", function(event) {
    const id = $(this).data("id");
    $.ajax("/devour/" + id, {
      type: "PUT",
      data: {devoured: true}
    }).then(() => {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCat = {
      name: $("#ca").val().trim(),
      sleepy: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: newCat
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
