webpackHotUpdate("app",{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_js_components_container_GameContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/js/components/container/GameContainer */ "./src/js/components/container/GameContainer.jsx");




var _require = __webpack_require__(/*! @jlguenego/sudoku-generator */ "./node_modules/@jlguenego/sudoku-generator/index.js"),
    SudokuSolver = _require.SudokuSolver;

var index = document.getElementById("sudoku-app");

if (index) {
  var grid = SudokuSolver.generate();
  var grid2 = SudokuSolver.carve(grid, 55);
  Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_js_components_container_GameContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null), index);
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiU3Vkb2t1U29sdmVyIiwiaW5kZXgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ3JpZCIsImdlbmVyYXRlIiwiZ3JpZDIiLCJjYXJ2ZSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7ZUFDeUJBLG1CQUFPLENBQUMsd0ZBQUQsQztJQUF4QkMsWSxZQUFBQSxZOztBQUlSLElBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWQ7O0FBQ0EsSUFBR0YsS0FBSCxFQUFVO0FBQ04sTUFBTUcsSUFBSSxHQUFHSixZQUFZLENBQUNLLFFBQWIsRUFBYjtBQUNBLE1BQU1DLEtBQUssR0FBR04sWUFBWSxDQUFDTyxLQUFiLENBQW1CSCxJQUFuQixFQUF5QixFQUF6QixDQUFkO0FBRUFJLDBEQUFNLENBQUMsMkRBQUMsa0ZBQUQsT0FBRCxFQUFvQlAsS0FBcEIsQ0FBTjtBQUNILEMiLCJmaWxlIjoiYXBwLjM5YThlNzRkMmY3MGFmZjY3OWYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEdhbWVDb250YWluZXIgZnJvbSAnLi9zcmMvanMvY29tcG9uZW50cy9jb250YWluZXIvR2FtZUNvbnRhaW5lcic7XHJcbmNvbnN0IHsgU3Vkb2t1U29sdmVyIH0gPSByZXF1aXJlKCdAamxndWVuZWdvL3N1ZG9rdS1nZW5lcmF0b3InKTtcclxuXHJcblxyXG5cclxuY29uc3QgaW5kZXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1ZG9rdS1hcHBcIik7XHJcbmlmKGluZGV4KSB7XHJcbiAgICBjb25zdCBncmlkID0gU3Vkb2t1U29sdmVyLmdlbmVyYXRlKCk7XHJcbiAgICBjb25zdCBncmlkMiA9IFN1ZG9rdVNvbHZlci5jYXJ2ZShncmlkLCA1NSk7XHJcblxyXG4gICAgcmVuZGVyKDxHYW1lQ29udGFpbmVyIC8+LCBpbmRleClcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==