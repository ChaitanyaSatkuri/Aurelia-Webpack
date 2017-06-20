webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports) {

	

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

	var map = {
		"./app/app": "app/app.js",
		"./app/app.html": "app/app.html",
		"./aurelia-bootstrapper-webpack": "aurelia-bootstrapper-webpack",
		"./aurelia-event-aggregator": "aurelia-event-aggregator",
		"./aurelia-framework": "aurelia-framework",
		"./aurelia-history-browser": "aurelia-history-browser",
		"./aurelia-loader-webpack": 17,
		"./aurelia-logging-console": "aurelia-logging-console",
		"./aurelia-templating-binding": "aurelia-templating-binding",
		"./aurelia-templating-resources": "aurelia-templating-resources",
		"./aurelia-templating-resources/attr-binding-behavior": "aurelia-templating-resources/attr-binding-behavior.js",
		"./aurelia-templating-resources/attr-binding-behavior.js": "aurelia-templating-resources/attr-binding-behavior.js",
		"./aurelia-templating-resources/binding-mode-behaviors": "aurelia-templating-resources/binding-mode-behaviors.js",
		"./aurelia-templating-resources/binding-mode-behaviors.js": "aurelia-templating-resources/binding-mode-behaviors.js",
		"./aurelia-templating-resources/compose": "aurelia-templating-resources/compose.js",
		"./aurelia-templating-resources/compose.js": "aurelia-templating-resources/compose.js",
		"./aurelia-templating-resources/debounce-binding-behavior": "aurelia-templating-resources/debounce-binding-behavior.js",
		"./aurelia-templating-resources/debounce-binding-behavior.js": "aurelia-templating-resources/debounce-binding-behavior.js",
		"./aurelia-templating-resources/focus": "aurelia-templating-resources/focus.js",
		"./aurelia-templating-resources/focus.js": "aurelia-templating-resources/focus.js",
		"./aurelia-templating-resources/hide": "aurelia-templating-resources/hide.js",
		"./aurelia-templating-resources/hide.js": "aurelia-templating-resources/hide.js",
		"./aurelia-templating-resources/if": "aurelia-templating-resources/if.js",
		"./aurelia-templating-resources/if.js": "aurelia-templating-resources/if.js",
		"./aurelia-templating-resources/repeat": "aurelia-templating-resources/repeat.js",
		"./aurelia-templating-resources/repeat.js": "aurelia-templating-resources/repeat.js",
		"./aurelia-templating-resources/replaceable": "aurelia-templating-resources/replaceable.js",
		"./aurelia-templating-resources/replaceable.js": "aurelia-templating-resources/replaceable.js",
		"./aurelia-templating-resources/sanitize-html": "aurelia-templating-resources/sanitize-html.js",
		"./aurelia-templating-resources/sanitize-html.js": "aurelia-templating-resources/sanitize-html.js",
		"./aurelia-templating-resources/self-binding-behavior": "aurelia-templating-resources/self-binding-behavior.js",
		"./aurelia-templating-resources/self-binding-behavior.js": "aurelia-templating-resources/self-binding-behavior.js",
		"./aurelia-templating-resources/show": "aurelia-templating-resources/show.js",
		"./aurelia-templating-resources/show.js": "aurelia-templating-resources/show.js",
		"./aurelia-templating-resources/signal-binding-behavior": "aurelia-templating-resources/signal-binding-behavior.js",
		"./aurelia-templating-resources/signal-binding-behavior.js": "aurelia-templating-resources/signal-binding-behavior.js",
		"./aurelia-templating-resources/throttle-binding-behavior": "aurelia-templating-resources/throttle-binding-behavior.js",
		"./aurelia-templating-resources/throttle-binding-behavior.js": "aurelia-templating-resources/throttle-binding-behavior.js",
		"./aurelia-templating-resources/update-trigger-binding-behavior": "aurelia-templating-resources/update-trigger-binding-behavior.js",
		"./aurelia-templating-resources/update-trigger-binding-behavior.js": "aurelia-templating-resources/update-trigger-binding-behavior.js",
		"./aurelia-templating-resources/with": "aurelia-templating-resources/with.js",
		"./aurelia-templating-resources/with.js": "aurelia-templating-resources/with.js",
		"./aurelia-templating-router": "aurelia-templating-router",
		"./aurelia-templating-router/route-href": "aurelia-templating-router/route-href.js",
		"./aurelia-templating-router/route-href.js": "aurelia-templating-router/route-href.js",
		"./aurelia-templating-router/router-view": "aurelia-templating-router/router-view.js",
		"./aurelia-templating-router/router-view.js": "aurelia-templating-router/router-view.js",
		"./main": "main.js"
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 7;


/***/ }),

/***/ "app/app.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var App = exports.App = function App() {
	    _classCallCheck(this, App);

	    this.message = 'Does this work?';
	};

/***/ }),

/***/ "app/app.html":
/***/ (function(module, exports) {

	module.exports = "<template>\n<h1>Hello Erik.</h1>\n<div>${message}</div>\n<input type=\"text\" value.bind=\"message\">\n</template>\n";

/***/ }),

/***/ "main.js":
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.configure = configure;
	function configure(aurelia) {
	    aurelia.use.basicConfiguration().developmentLogging();

	    aurelia.start().then(function (a) {
	        a.setRoot('app/app', document.body);
	    });
	}

/***/ })

});