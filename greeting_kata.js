function greet(name) {
    retString = 'Hello, '

    if (name == null) {
        name = 'my friend';
    }

    retString += name + '.';

    return retString;
}


module.exports = greet; 
