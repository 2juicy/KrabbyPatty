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
    event.preventDefault();
    var newPatty = {
      burger_name: $("#burg").val().trim(),
      devoured: false
    };
    $.ajax("/add", {
      type: "POST",
      data: newPatty
    }).then(() => {
        location.reload();
      }
    );
  });
});
