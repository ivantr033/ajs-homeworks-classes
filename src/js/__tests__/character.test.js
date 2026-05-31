import Bowman from '../bowman';
import Character from '../character.js';

test('Это должно корректно создать персонажа.', () => {
    const bowman = new Bowman('Robin');
    expect(bowman).toEqual({
        name: 'Robin',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});

test('Это должно вызвать ошибку, если тип персонажа недопустим.', () => {
    expect(() => {
        new Character('Ivan', 'Paladin');
    }).toThrow('Недопустимый тип персонажа');
});

test('Это должно вызвать ошибку, связанную с коротким именем.', () => {
    expect(() => new Bowman('R')).toThrow();
});

test('Это должно корректно поднять уровень персонажа.', () => {
    const bowman = new Bowman('Robin');
    bowman.levelUp();
    expect(bowman.level).toBe(2);
    expect(bowman.attack).toBe(30); // 25 * 1.2
    expect(bowman.health).toBe(100);
});

test('Уровень не должен повышаться, если он мертв.', () => {
    const bowman = new Bowman('Robin');
    bowman.health = 0;
    expect(() => bowman.levelUp()).toThrow('Невозможно повысить уровень мертвого персонажа');
});

test('Это должно корректно рассчитать урон.', () => {
    const bowman = new Bowman('Robin');
    bowman.damage(10); // 10 * (1 - 25/100) = 7.5
    expect(bowman.health).toBe(92.5);
});

test('Состояние здоровья не должно опускаться ниже нуля.', () => {
    const bowman = new Bowman('Robin');
    bowman.damage(200);
    expect(bowman.health).toBe(0);
});
