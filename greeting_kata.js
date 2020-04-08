function greet(name) {
    retString = 'Hello, '

    if (name == null) {
        name = 'my friend';
    }

    retString += name;

    if (isNameUppercase(name)) {
        retString = retString.toUpperCase();
        retString += '!';
    }
    else {
        retString += '.';
    }

    return retString;
}

function isNameUppercase(name) {
    return name == name.toUpperCase();
}

module.exports = greet; 
