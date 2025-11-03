$(function() {
  $("#menu-toggle").click(function() {
    $(nav).slideToggle();
  })
})

$(function() {
  $("#search").on("keyup", function() {
    var value = $(this).val().toLocaleLowerCase();
    $("#list li").filter(function() {
      $(this).toggle($(this).text().toLocaleLowerCase().includes(value));
    });
  })
})

$(function() {
  $("#toggle-password").change(function() {
    const type = $(this).is(":checked") ? "text" : "password";
    $("password")
  })
})