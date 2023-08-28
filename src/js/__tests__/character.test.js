import Character from '../class/character';

test('should throw an error if the name is less than 2 characters', () => {
  expect(() => new Character('a', 'Swordsman')).toThrow('Некорректное имя персонажа');
});

test('should throw an error if the name is more than 10 characters', () => {
  expect(() => new Character('12345678901', 'Bowman')).toThrow('Некорректное имя персонажа');
});

test('should throw an error if the type is not one of the allowed types', () => {
  expect(() => new Character('Warrior', 'Knight')).toThrow('Некорректный тип персонажа');
});

test.each([
  ['John', 'Bowman'],
  ['John', 'Swordsman'],
  ['John', 'Magician'],
  ['John', 'Daemon'],
  ['John', 'Undead'],
  ['John', 'Zombie'],
])('should create a new character with %s valid name and %s type', (name, type) => {
  const character = new Character(name, type);
  expect(character).toBeInstanceOf(Character);
});
