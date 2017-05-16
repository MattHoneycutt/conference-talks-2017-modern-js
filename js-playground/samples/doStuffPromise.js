module.exports = function(num) {
    return new Promise(resolve => {
        setTimeout(() => resolve(num + 1), 1000);
    });
};
