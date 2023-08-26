import {
  Bowman, Swordsman, Magician, Daemon, Undead, Zombie,
} from '../childClass';

test.each([
  ['John', Bowman, 25],
  ['John', Swordsman, 40],
  ['John', Magician, 10],
  ['John', Daemon, 10],
  ['John', Undead, 25],
  ['John', Zombie, 40],
])('should create a new character with %s valid name, %o ChildClass and check the attack %i', (name, ChildClass, attack) => {
  const character = new ChildClass(name);
  expect(character.attack).toBe(attack);
});
