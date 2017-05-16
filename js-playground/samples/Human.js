const Entity = require('./Entity.js');

module.exports = class Human extends Entity {

    constructor(name) {
        super();
        this.name = name;
    }
};
