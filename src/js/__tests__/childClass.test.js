import Bowman from '../class/Bowman';
import Daemon from '../class/Daemon';
import Magician from '../class/Magician';
import Swordsman from '../class/Swordsman';
import Undead from '../class/Undead';
import Zombie from '../class/Zombie';

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
