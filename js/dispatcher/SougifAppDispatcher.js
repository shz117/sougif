var SougifConstants = require('../constants/SougifConstants'),
    Dispatcher = require('flux').Dispatcher,
    PayloadSources = SougifConstants.PayloadSources,
    assign = require('object-assign');

var SougifAppDispatcher = assign(new Dispatcher(), {
    handleServerAction: function (action) {
        var payload = {
            source: PayloadSources.SERVER_ACTIONS,
            action: action
        }
        this.dispatch(payload);
    }
});

module.exports = SougifAppDispatcher;