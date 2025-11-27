$(function () {
  $(".brands li").on("click", function () {
    let a = $(this).index();
    $(".brands li").removeClass("cd");
    $(this).addClass("cd");
    $(".sub .text div").removeClass("ef");
    $(".sub .text div").eq(a).addClass("ef");
    $(".img .left").removeClass("gh");
    $(".img .left").eq(a).addClass("gh");
    $(".img .right").removeClass("ij");
    $(".img .right").eq(a).addClass("ij");
    $(".our .hotel div").removeClass("ab");
    $(".our .hotel div").eq(a).addClass("ab");
  });
  $(".inter .menu ul li:first-child").on("click", function () {
    $(".inter .content .contentbox1").removeClass("kl");
    $(".inter .content .contentbox2").removeClass("mo");
    $(".inter .content .contentbox1").addClass("kl");
  });
  $(".inter .menu ul li:last-child").on("click", function () {
    $(".inter .content .contentbox2").removeClass("mo");
    $(".inter .content .contentbox1").removeClass("kl");
    $(".inter .content .contentbox2").addClass("mo");
  });
});
