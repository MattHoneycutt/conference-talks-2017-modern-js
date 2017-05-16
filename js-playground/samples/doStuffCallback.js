module.exports = function(num, callback) {
    setTimeout(() => callback(num + 1), 1000);
};
