const greet = require('./greeting_kata')

test('Name Greeting', () => {
    expect(greet('Bob')).toBe('Hello, Bob');
});

test('Null Greeting', () => {
    expect(greet(null)).toBe('Hello, my friend.')
});

