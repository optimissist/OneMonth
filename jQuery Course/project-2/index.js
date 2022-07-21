$(".question").click(function() {
  $(this).next().fadeToggle("fast");
  $(this).children().toggleClass("collapse");
})

$(".answer").animate({
  fontSize: "20px",
  "line-height":"30px",
});
