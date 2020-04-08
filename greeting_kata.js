function greet(name) {
    retString = 'Hello, '

    if (!Array.isArray(name)) {
        tmp_name = name;
        name = [];
        if (tmp_name == null)
            name.push('my friend');
        else
            name.push(tmp_name);
    }

    if (name.length == 1) {
        retString += name[0];
    }
    else if (name.length == 2) {
        retString += name[0] + ' and ' + name[1];
    }

    if (isNameUppercase(name[0])) {
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
