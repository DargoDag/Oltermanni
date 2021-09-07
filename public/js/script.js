/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/icons/icons.js":
/*!*******************************!*\
  !*** ./assets/icons/icons.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Пример подключения иконки\n// import './svg/my-icon.svg';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvaWNvbnMvaWNvbnMuanM/MDdjNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBIiwiZmlsZSI6Ii4vYXNzZXRzL2ljb25zL2ljb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g0J/RgNC40LzQtdGAINC/0L7QtNC60LvRjtGH0LXQvdC40Y8g0LjQutC+0L3QutC4XG4vLyBpbXBvcnQgJy4vc3ZnL215LWljb24uc3ZnJztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/icons/icons.js\n");

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var burger = document.querySelector('.burger');\nvar menu = document.querySelector('.menu__nav');\nvar body = document.querySelector('body');\nvar links = document.querySelectorAll('.menu__nav a');\nburger.addEventListener('click', function () {\n  burger.classList.toggle('toggled');\n  menu.classList.toggle('toggled');\n  body.classList.toggle('stop-scroll');\n});\nlinks.forEach(function (el) {\n  el.addEventListener('click', function () {\n    body.classList.remove('stop-scroll');\n    burger.classList.remove('toggled');\n    menu.classList.remove('toggled');\n  });\n});\nvar participantsSwiper = new Swiper('.swiper', {\n  slidesPerView: 'auto',\n  spaceBetween: 18,\n  breakpoints: {\n    640: {\n      slidesPerView: 4,\n      spaceBetween: 0\n    },\n    1440: {\n      slidesPerView: 4\n    }\n  },\n  navigation: {\n    nextEl: '#part-next',\n    prevEl: '#part-prev'\n  },\n  pagination: {\n    el: '#participantsPagination',\n    type: 'bullets',\n    clickable: true\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2NyaXB0LmpzPzgyMDUiXSwibmFtZXMiOlsiYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImJvZHkiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZm9yRWFjaCIsImVsIiwicmVtb3ZlIiwicGFydGljaXBhbnRzU3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImJyZWFrcG9pbnRzIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsInBhZ2luYXRpb24iLCJ0eXBlIiwiY2xpY2thYmxlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFmO0FBQ0EsSUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBYjtBQUNBLElBQU1FLElBQUksR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNRyxLQUFLLEdBQUdKLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBZDtBQUVBTixNQUFNLENBQUNPLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVk7QUFDekNQLFFBQU0sQ0FBQ1EsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsU0FBeEI7QUFDQU4sTUFBSSxDQUFDSyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsU0FBdEI7QUFDQUwsTUFBSSxDQUFDSSxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsYUFBdEI7QUFDSCxDQUpEO0FBTUFKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLFVBQUNDLEVBQUQsRUFBUTtBQUNsQkEsSUFBRSxDQUFDSixnQkFBSCxDQUFvQixPQUFwQixFQUE2QixZQUFXO0FBQ3BDSCxRQUFJLENBQUNJLFNBQUwsQ0FBZUksTUFBZixDQUFzQixhQUF0QjtBQUNBWixVQUFNLENBQUNRLFNBQVAsQ0FBaUJJLE1BQWpCLENBQXdCLFNBQXhCO0FBQ0FULFFBQUksQ0FBQ0ssU0FBTCxDQUFlSSxNQUFmLENBQXNCLFNBQXRCO0FBQ0gsR0FKRDtBQUtILENBTkQ7QUFRQSxJQUFNQyxrQkFBa0IsR0FBRyxJQUFJQyxNQUFKLENBQVcsU0FBWCxFQUFzQjtBQUM3Q0MsZUFBYSxFQUFFLE1BRDhCO0FBRTdDQyxjQUFZLEVBQUUsRUFGK0I7QUFHN0NDLGFBQVcsRUFBRTtBQUNULFNBQUs7QUFDREYsbUJBQWEsRUFBRSxDQURkO0FBRURDLGtCQUFZLEVBQUU7QUFGYixLQURJO0FBS1QsVUFBTTtBQUNGRCxtQkFBYSxFQUFFO0FBRGI7QUFMRyxHQUhnQztBQVk3Q0csWUFBVSxFQUFFO0FBQ1JDLFVBQU0sRUFBRSxZQURBO0FBRVJDLFVBQU0sRUFBRTtBQUZBLEdBWmlDO0FBZ0I3Q0MsWUFBVSxFQUFFO0FBQ1JWLE1BQUUsRUFBRSx5QkFESTtBQUVSVyxRQUFJLEVBQUUsU0FGRTtBQUdSQyxhQUFTLEVBQUU7QUFISDtBQWhCaUMsQ0FBdEIsQ0FBM0IiLCJmaWxlIjoiLi9hc3NldHMvanMvc2NyaXB0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpO1xuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19uYXYnKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51X19uYXYgYScpO1xuXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZWQnKTtcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZWQnKTtcbiAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ3N0b3Atc2Nyb2xsJyk7XG59KTtcblxubGlua3MuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3N0b3Atc2Nyb2xsJyk7XG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGVkJyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlZCcpO1xuICAgIH0pO1xufSk7XG5cbmNvbnN0IHBhcnRpY2lwYW50c1N3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XG4gICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgIHNwYWNlQmV0d2VlbjogMTgsXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgNjQwOiB7XG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwXG4gICAgICAgIH0sXG4gICAgICAgIDE0NDA6IHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgbmV4dEVsOiAnI3BhcnQtbmV4dCcsXG4gICAgICAgIHByZXZFbDogJyNwYXJ0LXByZXYnLFxuICAgIH0sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgICBlbDogJyNwYXJ0aWNpcGFudHNQYWdpbmF0aW9uJyxcbiAgICAgICAgdHlwZTogJ2J1bGxldHMnLFxuICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9XG59KTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/js/script.js\n");

/***/ }),

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzPzE5NzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9hc3NldHMvc2Nzcy9zdHlsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/scss/style.scss\n");

/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi ./assets/js/script.js ./assets/scss/style.scss ./assets/icons/icons.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./assets/js/script.js */"./assets/js/script.js");
__webpack_require__(/*! ./assets/scss/style.scss */"./assets/scss/style.scss");
module.exports = __webpack_require__(/*! ./assets/icons/icons.js */"./assets/icons/icons.js");


/***/ })

/******/ });