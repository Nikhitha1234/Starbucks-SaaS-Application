import React from "react";
import TestUtils from "react-addons-test-utils";
import test from "tape";
import ProgressBar from "../index";

const shallowRenderer = TestUtils.createRenderer();

test("index - renders", assert => {
	shallowRenderer.render(<ProgressBar />);
	const bar = shallowRenderer.getRenderOutput();
	assert.pass("it renders");
	assert.end();
});

test("index - width", assert => {
	shallowRenderer.render(<ProgressBar />);
	const defaultBar = shallowRenderer.getRenderOutput();
	assert.equal(defaultBar.props.children.props.style.width, "100%", "The default width is 100%");

	const width = "52%";
	shallowRenderer.render(<ProgressBar width={width} />);
	const bar = shallowRenderer.getRenderOutput();
	const innerDiv = bar.props.children;
	assert.equal(innerDiv.props.style.width, width, "The provided width");
	assert.end();
});

test("index - message", assert => {
	shallowRenderer.render(<ProgressBar />);
	const defaultBar = shallowRenderer.getRenderOutput();
	assert.equal(defaultBar.props.children.props.children.props.children, "", "By defult no message");
	const message = "test message";
	shallowRenderer.render(<ProgressBar message={message} />);
	const bar = shallowRenderer.getRenderOutput();
	assert.equal(bar.props.children.props.children.props.children, message, "The provided message");
	assert.end();
});
