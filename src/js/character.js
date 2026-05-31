export default class Character {
    constructor(name, type) {
        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно содержать от 2 до 10 символов.');
        }

        if (!types.includes(type)) {
            throw new Error('Недопустимый тип персонажа');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    }

    levelUp() {
        if (this.health <= 0) {
            throw new Error('Невозможно повысить уровень мертвого персонажа');
        }
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }
    }
}