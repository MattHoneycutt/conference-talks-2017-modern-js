const Entity = require('./Entity.js');

module.exports = class Zombie extends Entity {

    constructor(name, condition) {
        super();
        this.name = name;
        this.condition = condition;
    }

    sayHi() {
        return 'BRAAAAAAAINS';
    }
};
