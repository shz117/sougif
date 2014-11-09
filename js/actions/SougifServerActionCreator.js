var SougifAppDispatcher = require('../dispatcher/SougifAppDispatcher'),
    SougifConstants = require('../constants/SougifConstants'),
    ActionTypes = SougifConstants.ActionTypes;

module.exports = {
    getGifUrls: function (urls) {
        SougifAppDispatcher.handleServerAction({
            type: ActionTypes.RECIEVE_DATA,
            data: urls
        })
    }
}