$(document).ready(function () {
  $(".list-item").hover(
    function () {
      $(this).find(".details").show();
    },
    function () {
      $(this).find(".details").hide();
    }
  );
});
