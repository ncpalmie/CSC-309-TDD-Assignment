const greet = require('./greeting_kata');

test('Name Greeting', () => {
    expect(greet('Bob')).toBe('Hello, Bob.');
});

test('Null Greeting', () => {
    expect(greet(null)).toBe('Hello, my friend.');
});

test('Shout Greeting', () => {
    expect(greet('JERRY')).toBe('HELLO JERRY!');
});

test('Two Name Greeting', () => {
    expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.');
});

test('Multi-Name Greeting', () => {
    expect(greet(['Amy', 'Brian', 'Charlotte'])).toBe('Hello, Amy, Brian, and Charlotte.');
});

test('Multi-Name Shout Greeting', () => {
    expect(greet(['Amy', 'BRIAN', 'Charlotte'])).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!');
});

test('Comma Name Greeting', () => {
    expect(greet(['Bob', 'Charlie, Dianne'])).toBe('Hello, Bob, Charlie, and Dianne.');
});

test('Escaped Comma Name Greeting', () => {
    expect(greet(['Bob', '\"Charlie, Dianne\"'])).toBe('Hello, Bob and Charlie, Dianne.');
});
