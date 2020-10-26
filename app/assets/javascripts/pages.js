$(document).ready(function () {
  $(".close").click(function () {
    $(".alert").fadeOut(1000);
  });
});

$(document).ready(function () {
  $("#linkcol").click(function (e) {
    $(".collapse").slideToggle();
    e.preventDefault();
  });
});

$(document).ready(function () {
  $("#link").click(function (e) {
    $(".coll").slideToggle();
    e.preventDefault();
  });
});
