import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';

test('У мага должны быть правильные характеристики.', () => {
    const char = new Magician('Merlin');
    expect(char.attack).toBe(10);
    expect(char.defence).toBe(40);
});

test('У дэмонта должны быть правильные характеристики.', () => {
    const char = new Daemon('Devil');
    expect(char.attack).toBe(10);
    expect(char.defence).toBe(40);
});

test('У нежити должны быть правильные характеристики.', () => {
    const char = new Undead('Skeleton');
    expect(char.attack).toBe(25);
    expect(char.defence).toBe(25);
});