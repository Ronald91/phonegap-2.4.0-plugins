cordova.define("cordova/plugin/navigation-chooser", function(require, exports,
		module) {
	var exec = require("cordova/exec");
	var NavigationChooser = function() {
	};

	var NavigationChooserError = function(code, message) {
		this.code = code || null;
		this.message = message || '';
	};

	NavigationChooser.NO_NAVIGATION_CHOOSER = 0;

	NavigationChooser.prototype.show = function(success, fail) {
		exec(success, fail, "NavigationPlugin", "show", [ {
			'address' : "2455 Paces Ferry Road",
			'city' : "Atlanta",
			'state' : "Georgia",
			'zip' : "30339"
		} ]);
	};

	var navigationChooser = new NavigationChooser();
	module.exports = navigationChooser;
});