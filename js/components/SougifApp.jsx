/** @jsx React.DOM */

var React = require('react'),
    GifStore = require('../stores/GifStore'),
    SearchBar = require('./SearchBar.jsx'),
    Display = require('./Display.jsx');

function getStateFromStore () {
    return {
        data: GifStore.getGifs()
    }
}

var SougifApp = React.createClass({

    getInitialState: function () {
        return getStateFromStore();
    },

    componentDidMount: function () {
        GifStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        GifStore.removeChangeListener(this._onChange);
    },

    render: function () {
        var gifUrls = getStateFromStore();
        return (
            <div className="sougifapp">
            <SearchBar />
            <Display data={gifUrls} />
            </div>
        );
    },

    _onChange: function () {
        this.setState(getStateFromStore());
    }
});

module.exports = SougifApp;