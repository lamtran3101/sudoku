webpackHotUpdate("app",{

/***/ "./src/js/components/container/GameContainer.jsx":
/*!*******************************************************!*\
  !*** ./src/js/components/container/GameContainer.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _presentational_Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presentational/Game */ "./src/js/components/presentational/Game.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var _require = __webpack_require__(/*! @jlguenego/sudoku-generator */ "./node_modules/@jlguenego/sudoku-generator/index.js"),
    SudokuSolver = _require.SudokuSolver;

var GameContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(GameContainer, _Component);

  function GameContainer() {
    var _this;

    _classCallCheck(this, GameContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameContainer).call(this, props));
    _this.state = {
      gameBoard: Array.from({
        length: 81
      }, function () {
        return Math.floor(Math.random() * 9);
      }),
      grid: props.grid
    };
    return _this;
  }

  _createClass(GameContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var grid = this.state.grid;
      console.log(grid);
    }
  }, {
    key: "render",
    value: function render() {
      var gameBoard = this.state.gameBoard;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_presentational_Game__WEBPACK_IMPORTED_MODULE_1__["default"], {
        gameBoard: gameBoard
      });
    }
  }]);

  return GameContainer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GameContainer);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jb250YWluZXIvR2FtZUNvbnRhaW5lci5qc3giXSwibmFtZXMiOlsicmVxdWlyZSIsIlN1ZG9rdVNvbHZlciIsIkdhbWVDb250YWluZXIiLCJwcm9wcyIsInN0YXRlIiwiZ2FtZUJvYXJkIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ3JpZCIsImNvbnNvbGUiLCJsb2ciLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7ZUFDeUJBLG1CQUFPLENBQUMsd0ZBQUQsQztJQUF4QkMsWSxZQUFBQSxZOztJQUdGQyxhOzs7OztBQUNGLDJCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsdUZBQU1DLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDVEMsZUFBUyxFQUFFQyxLQUFLLENBQUNDLElBQU4sQ0FBVztBQUFDQyxjQUFNLEVBQUU7QUFBVCxPQUFYLEVBQXlCO0FBQUEsZUFBTUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUEzQixDQUFOO0FBQUEsT0FBekIsQ0FERjtBQUVUQyxVQUFJLEVBQUdULEtBQUssQ0FBQ1M7QUFGSixLQUFiO0FBRlU7QUFNYjs7Ozt3Q0FFbUI7QUFBQSxVQUNYQSxJQURXLEdBQ0gsS0FBS1IsS0FERixDQUNYUSxJQURXO0FBRWhCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNIOzs7NkJBRVE7QUFBQSxVQUNHUCxTQURILEdBQ2lCLEtBQUtELEtBRHRCLENBQ0dDLFNBREg7QUFFTCxhQUNJLDJEQUFDLDREQUFEO0FBQU0saUJBQVMsRUFBRUE7QUFBakIsUUFESjtBQUdIOzs7O0VBbkJ1QlUsK0M7O0FBc0JiYiw0RUFBZixFIiwiZmlsZSI6ImFwcC43YTFiNzgxMTk0N2E2NTIzYjI3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR2FtZSBmcm9tICcuLi9wcmVzZW50YXRpb25hbC9HYW1lJztcclxuY29uc3QgeyBTdWRva3VTb2x2ZXIgfSA9IHJlcXVpcmUoJ0BqbGd1ZW5lZ28vc3Vkb2t1LWdlbmVyYXRvcicpO1xyXG5cclxuXHJcbmNsYXNzIEdhbWVDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGdhbWVCb2FyZDogQXJyYXkuZnJvbSh7bGVuZ3RoOiA4MX0sICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpKSxcclxuICAgICAgICAgICAgZ3JpZCA6IHByb3BzLmdyaWRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGxldCB7Z3JpZH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGdyaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGdhbWVCb2FyZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8R2FtZSBnYW1lQm9hcmQ9e2dhbWVCb2FyZH0gLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udGFpbmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9