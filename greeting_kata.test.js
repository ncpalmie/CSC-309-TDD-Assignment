const greeting = require('./greeting_kata')

test('Name Greeting', () => {
    expect(greet('Bob')).toBe('Hello, Bob');
});
