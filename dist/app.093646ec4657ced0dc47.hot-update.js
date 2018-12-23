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
      var grid = SudokuSolver.generate();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jb250YWluZXIvR2FtZUNvbnRhaW5lci5qc3giXSwibmFtZXMiOlsicmVxdWlyZSIsIlN1ZG9rdVNvbHZlciIsIkdhbWVDb250YWluZXIiLCJwcm9wcyIsInN0YXRlIiwiZ2FtZUJvYXJkIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZ3JpZCIsImdlbmVyYXRlIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztlQUN5QkEsbUJBQU8sQ0FBQyx3RkFBRCxDO0lBQXhCQyxZLFlBQUFBLFk7O0lBR0ZDLGE7Ozs7O0FBQ0YsMkJBQWM7QUFBQTs7QUFBQTs7QUFDVix1RkFBTUMsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxlQUFTLEVBQUVDLEtBQUssQ0FBQ0MsSUFBTixDQUFXO0FBQUNDLGNBQU0sRUFBRTtBQUFULE9BQVgsRUFBeUI7QUFBQSxlQUFNQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLENBQU47QUFBQSxPQUF6QixDQURGO0FBRVRDLFVBQUksRUFBR1QsS0FBSyxDQUFDUztBQUZKLEtBQWI7QUFGVTtBQU1iOzs7O3dDQUVtQjtBQUNoQixVQUFNQSxJQUFJLEdBQUdYLFlBQVksQ0FBQ1ksUUFBYixFQUFiO0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBQ0g7Ozs2QkFFUTtBQUFBLFVBQ0dQLFNBREgsR0FDaUIsS0FBS0QsS0FEdEIsQ0FDR0MsU0FESDtBQUVMLGFBQ0ksMkRBQUMsNERBQUQ7QUFBTSxpQkFBUyxFQUFFQTtBQUFqQixRQURKO0FBR0g7Ozs7RUFuQnVCVywrQzs7QUFzQmJkLDRFQUFmLEUiLCJmaWxlIjoiYXBwLjA5MzY0NmVjNDY1N2NlZDBkYzQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4uL3ByZXNlbnRhdGlvbmFsL0dhbWUnO1xyXG5jb25zdCB7IFN1ZG9rdVNvbHZlciB9ID0gcmVxdWlyZSgnQGpsZ3VlbmVnby9zdWRva3UtZ2VuZXJhdG9yJyk7XHJcblxyXG5cclxuY2xhc3MgR2FtZUNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZ2FtZUJvYXJkOiBBcnJheS5mcm9tKHtsZW5ndGg6IDgxfSwgKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSkpLFxyXG4gICAgICAgICAgICBncmlkIDogcHJvcHMuZ3JpZFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3QgZ3JpZCA9IFN1ZG9rdVNvbHZlci5nZW5lcmF0ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGdyaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGdhbWVCb2FyZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8R2FtZSBnYW1lQm9hcmQ9e2dhbWVCb2FyZH0gLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29udGFpbmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9