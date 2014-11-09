var lib = {
        http: require('http'),
        path: require('path')
    };
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback (){
    console.log('[mongodb] mongodb connected!');
});

var Sechema = mongoose.Sechema;

var gifSchema = mongoose.Schema({
    category: String,
    src: String
}, {collection: 'gifs'});

var Gifs = mongoose.model('Gifs', gifSchema);


module.exports = {
    searchReqHandler: function (q, callback) {
        var indexes = require('./utils/randIndex')(20, 1000),
            i;
        Gifs.find({'category': 'all'}).limit(1000).exec(function (err, res) {
            // this.count(function(err, count){
            //     if (err) {
            //         return callback(err);
            //     }
            //     var rand = Math.floor(Math.random() * count);
            //     this.findOne().skip(rand).exec(callback);
            // }.bind(this));
            if (err) {
                return callback(err);
            }
            var ret = [];
            for (i=0; i< indexes.length; i++) {
                ret.push(res[indexes[i]]);
            }
            callback(null, ret);
        });
    }
}