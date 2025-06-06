// cadenainversa.test.js
const cadenainversa = require('./cadenainversa'); 

test('invierte la cadena "hola" a "aloh"', () => {  
  expect(cadenainversa('hola')).toBe('aloh');
});

test('invierte cadena vacía a cadena vacía', () => {
  expect(cadenainversa('')).toBe('');  
});

test('invierte cadena con espacios "abc def" a "fed cba"', () => {  
  expect(cadenainversa('abc def')).toBe('fed cba');  
});