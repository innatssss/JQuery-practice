$(document).ready(function () {
  $("#moveBtn").click(function () {
    moveRectangle();
  });
});

function moveRectangle() {
  const rectangle = $("#rectangle");
  const screenWidth = $(window).width() - rectangle.width();
  const screenHeight = $(window).height() - rectangle.height();

  // Move to the top-left
  rectangle.css({ top: 0, left: 0 });

  // to the right
  rectangle.animate({ left: screenWidth }, 1000);

  // to the bottom
  rectangle.animate({ top: screenHeight }, 1000);

  //to the left
  rectangle.animate({ left: 0 }, 1000);

  // to the top
  rectangle.animate({ top: 0 }, 1000);
}
