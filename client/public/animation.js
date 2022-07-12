// try {
//   $(".automatic").ripples({
//     resolution: 1080,
//     perturbance: 0.01,
//     interactive: false
//   });
//   $(".hover").ripples({
//     resolution: 1080,
//     perturbance: 0.01,
//     interactive: true
//   });
// } catch (e) {
//   $(".error")
//     .show()
//     .text(e);
// }

// setInterval(function() {
//   var $el = $(".automatic");
//   var x = Math.random() * $el.outerWidth();
//   var y = Math.random() * $el.outerHeight();
//   var dropRadius = 30;
//   var strength = 0.04 + Math.random() * 0.04;

//   $el.ripples("drop", x, y, dropRadius, strength);
// }, 4000);