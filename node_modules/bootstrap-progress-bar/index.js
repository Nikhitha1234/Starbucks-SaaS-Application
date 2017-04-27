var React = require("react"); // eslint-disable-line no-unused-vars, no-undef

var DEFAULT_WIDTH = "100%";
var DEFAULT_MESSAGE = "";

var ProgressBar = function (props) {
	var style = { width: props.width || DEFAULT_WIDTH };
	var className = "progress-bar progress-bar-info progress-bar-striped active";
	var span = React.createElement("span", null, props.message || DEFAULT_MESSAGE);
	var innerDiv = React.createElement("div", { className: className, style: style }, span);

	return React.createElement("div", { className: "progress" }, innerDiv);
};

module.exports = ProgressBar; // eslint-disable-line no-undef
