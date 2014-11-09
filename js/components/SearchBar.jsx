/** @jsx React.DOM */

var React = require('react'),
    SougifServerActionCreator = require('../actions/SougifServerActionCreator');

var SearchBar = React.createClass({

    render: function () {
        return (
            <div>
                <button type="button" onClick={this._onClick}>Search</button>
            </div>
        )
    },

    _onClick: function () {
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState === 4 && req.status === 200) {
                var data = req.responseText;
                data = JSON.parse(data);
                SougifServerActionCreator.getGifUrls(data);
            }
        }
        req.open('get', '/search');
        req.onerror = function () {
            console.log("[AJAX CALL]Error", "Network Error");
        }
        req.send();
    }
});

module.exports = SearchBar;