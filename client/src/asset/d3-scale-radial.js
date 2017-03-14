import * as d3 from "d3"
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	(factory((global.d3 = global.d3 || {})));
}(this, function(exports) {

  function square(x) {
    return x * x;
  }

  function radial() {
    var linear = d3.scaleLinear();

    function scale(x) {
      return Math.sqrt(linear(x));
    }

    scale.domain = function(_) {
      return arguments.length ? (linear.domain(_), scale) : linear.domain();
    };

    scale.nice = function(count) {
      return (linear.nice(count), scale);
    };

    scale.range = function(_) {
      return arguments.length ? (linear.range(_.map(square)), scale) : linear.range().map(Math.sqrt);
    };

    scale.ticks = linear.ticks;
    scale.tickFormat = linear.tickFormat()

    return scale;
  }

  exports.scaleRadial = radial;

  Object.defineProperty(exports, '__esModule', {value: true});
}));