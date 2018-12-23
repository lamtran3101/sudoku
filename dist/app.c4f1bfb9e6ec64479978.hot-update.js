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
  Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_js_components_container_GameContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    grid: grid2
  }), index);
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiU3Vkb2t1U29sdmVyIiwiaW5kZXgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ3JpZCIsImdlbmVyYXRlIiwiZ3JpZDIiLCJjYXJ2ZSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7ZUFDeUJBLG1CQUFPLENBQUMsd0ZBQUQsQztJQUF4QkMsWSxZQUFBQSxZOztBQUlSLElBQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWQ7O0FBQ0EsSUFBR0YsS0FBSCxFQUFVO0FBQ04sTUFBTUcsSUFBSSxHQUFHSixZQUFZLENBQUNLLFFBQWIsRUFBYjtBQUNBLE1BQU1DLEtBQUssR0FBR04sWUFBWSxDQUFDTyxLQUFiLENBQW1CSCxJQUFuQixFQUF5QixFQUF6QixDQUFkO0FBRUFJLDBEQUFNLENBQUMsMkRBQUMsa0ZBQUQ7QUFBZSxRQUFJLEVBQUVGO0FBQXJCLElBQUQsRUFBaUNMLEtBQWpDLENBQU47QUFDSCxDIiwiZmlsZSI6ImFwcC5jNGYxYmZiOWU2ZWM2NDQ3OTk3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBHYW1lQ29udGFpbmVyIGZyb20gJy4vc3JjL2pzL2NvbXBvbmVudHMvY29udGFpbmVyL0dhbWVDb250YWluZXInO1xyXG5jb25zdCB7IFN1ZG9rdVNvbHZlciB9ID0gcmVxdWlyZSgnQGpsZ3VlbmVnby9zdWRva3UtZ2VuZXJhdG9yJyk7XHJcblxyXG5cclxuXHJcbmNvbnN0IGluZGV4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWRva3UtYXBwXCIpO1xyXG5pZihpbmRleCkge1xyXG4gICAgY29uc3QgZ3JpZCA9IFN1ZG9rdVNvbHZlci5nZW5lcmF0ZSgpO1xyXG4gICAgY29uc3QgZ3JpZDIgPSBTdWRva3VTb2x2ZXIuY2FydmUoZ3JpZCwgNTUpO1xyXG5cclxuICAgIHJlbmRlcig8R2FtZUNvbnRhaW5lciBncmlkPXtncmlkMn0gLz4sIGluZGV4KVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9