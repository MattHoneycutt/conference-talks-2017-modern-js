const Zombie = require('./Zombie.js');

module.exports = class ZombieFactory {

    constructor() {
        this.defaultState = 'horribly-decayed';
    }

    makeZombie(name, state) {
        return new Zombie(name, state || this.defaultState);
    }

    convertToZombie(human) {
        return this.makeZombie('Zombie ' + human.name, 'newly-turned');
    }
};