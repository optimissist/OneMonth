$(document).ready(function() {

  $("#list-items").html(localStorage.getItem("listItems"));

    $(".add-items").submit(function (event) {
      event.preventDefault();

      var item = $("#todo-list-item").val();

        if (item === "feed cat") {
          $("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + "<img src='assets/cats.jpg' class='imgtoobig'>" + "<a class='remove'>x</a><hr/></li>");
          localStorage.setItem("listItems", $("#list-items").html());
          $("#todo-list-item").val("");
        }
          else if (item) {
        $("#list-items").append("<li><input class='checkbox' type='checkbox'/>" + item + "<a class='remove'>x</a><hr/></li>");
        localStorage.setItem("listItems", $("#list-items").html());
        $("#todo-list-item").val("");
      }
        else {
          alert("You forgot to add your todo!")
        }
    });

    // $(".checkbox").change(function() {
    //   console.log("checkbox checked");
    // })

    $(document).on("change", ".checkbox", function() {
      if ($(this).attr("checked")) {
        $(this).removeAttr("checked");
      } else {
        $(this).attr("checked","checked");
      }

      $(this).parent().toggleClass("completed");
      localStorage.setItem("listItems", $("#list-items").html());
    });

    // $(document).on("click", ".remove", function() {
    //   $(this).parent().remove();
    //   localStorage.setItem("listItems", $("#list-items").html());
    // });

  $(document).on("click", ".remove", function() {
     $(this).parent().fadeOut(function() {
       $(this).remove();
       localStorage.setItem("listItems", $("#list-items").html());
     });
});

});
