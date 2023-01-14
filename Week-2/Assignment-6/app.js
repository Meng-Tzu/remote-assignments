// Request 1: Click to Change Text.
$(".welcome").click(() => {
  $(".welcome h1").text("Have a Good Time!");
});

// Request 2: Click to Show More Content Boxes.
$("button").click(() => {
  $(".hidden").removeClass("hidden");
});
