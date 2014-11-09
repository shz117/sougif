var SougifAppDispatcher = require('../dispatcher/SougifAppDispatcher'),
    SougifConstants = require('../constants/SougifConstants'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    ActionTypes = SougifConstants.ActionTypes,
    CHANGE_EVENT = 'change',
    _gifUrls = [];

function _setGifUrls (urls) {
    debugger;
    _gifUrls = urls;
}

function _getGifUrls (num) {
    debugger;
    if (!num || num > _gifUrls.length) {
        return _gifUrls;
    }
    return _gifUrls.slice(0, 0 + num);
}

var GifStore = assign({}, EventEmitter.prototype, {
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    getGifs: function (num) {
        return _getGifUrls(num);
    }
});

GifStore.dispatchToken = SougifAppDispatcher.register(function (payload) {
    var action = payload.action;
    switch(action.type) {
        case ActionTypes.RECIEVE_DATA:
            _setGifUrls(action.data);
            GifStore.emitChange();
            break;
        default:

    }
});

module.exports = GifStore;