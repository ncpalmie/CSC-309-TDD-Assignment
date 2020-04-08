const greet = require('./greeting_kata')

test('Name Greeting', () => {
    expect(greet('Bob')).toBe('Hello, Bob.');
});

test('Null Greeting', () => {
    expect(greet(null)).toBe('Hello, my friend.')
});

test('Shout Greeting', () => {
    expect(greet('JERRY')).toBe('HELLO, JERRY!')
});

test('Multi-name Greeting', () => {
    expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.')
});


