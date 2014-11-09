/** @jsx React.DOM */

var SougifApp = require('./components/SougifApp.jsx');
var React = require('react');

window.React = React;

React.renderComponent(
    <SougifApp />,
    document.getElementById('app')
);