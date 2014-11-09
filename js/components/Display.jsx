/** @jsx React.DOM */

var React = require('react');

var Display = React.createClass({

    render: function () {
        var gifUrls = this.props.data.data;
        return (
            <ul>
                {gifUrls.map(function (url) {
                    return (
                        <img src={url} />
                    );
                })}
            </ul>
        );
    }
});

module.exports = Display;