define("package/math/program", ["package/math/increment", "package/math/math"], function (a, b) {
  var c = a("package/math/increment").increment;
  b.result = c(10)
});
define("package/math/increment", ["package/math/math"], function (a, b) {
  var c = a("package/math/math").add;
  b.increment = function (a) {
    return c(a, 1)
  }
});
define("package/math/math", [], function (a, b) {
  b.add = function () {
    var a = 0, b = 0, c = arguments.length;
    while (b < c)a += arguments[b++];
    return a
  }
});