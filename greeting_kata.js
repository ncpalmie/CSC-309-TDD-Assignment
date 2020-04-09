function greet(name) {
    retString = 'Hello'
    upperNames = []
    lowerNames = []

    if (!Array.isArray(name)) {
        if (name == null)
            lowerNames.push('my friend');
        else if (isNameUppercase(name))
            upperNames.push(name);
        else
            lowerNames.push(name);
    }
    else {
        for (var i = 0; i < name.length; i++) {
            if (isNameUppercase(name[i]))
                upperNames.push(name[i]);
            else
                lowerNames.push(name[i]);
        }
    }
    
    //Lowercase names
    if (lowerNames.length > 0)
        retString += ', ';
    if (lowerNames.length == 1) {
        retString += lowerNames[0] + '.';
    }
    else if (lowerNames.length == 2) {
        retString += lowerNames[0] + ' and ' + lowerNames[1] + '.';
    }
    else if (lowerNames.length >= 3) {
        for (var i = 0; i < lowerNames.length - 1; i++) {
            retString += name[i] + ', '
        }
        retString += 'and ' + lowerNames[lowerNames.length - 1] + '.';
    }

    //Uppercase Names
    if (upperNames.length == 1 && lowerNames.length == 0) {
        retString = retString.toUpperCase() + ' ' + upperNames[0];
        retString += '!';
    }
    if (upperNames.length >= 1 && lowerNames.length > 0) {
        retString += ' AND HELLO ';
        for (var i = 0; i < upperNames.length; i++) {
            retString += upperNames[i];
            if (i != upperNames.length - 1)
                retString += ' AND ';
        }
        retString += '!';
    }

    return retString;
}

function isNameUppercase(name) {
    return name == name.toUpperCase();
}

module.exports = greet; 
