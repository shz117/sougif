module.exports = function (num, max) {
    var ret = [],
        i,
        rand;

    for (i = 0; i< num; i++) {
        rand = Math.floor(Math.random()*max);
        ret.push(rand);
    }
    return ret;
}