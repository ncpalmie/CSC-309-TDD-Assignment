function greet(name) {
    retString = 'Hello'
    upperNames = []
    lowerNames = []

    if (!Array.isArray(name)) {
        if (name == null)
            lowerNames.push('my friend');
        else if (name.includes(',')) {
            if (name.includes('\"')) {
                name = name.slice(1, -1);
            }
            else
                name = name.split(', ');
        }
        else if (isNameUppercase(name))
            upperNames.push(name);
        else
            lowerNames.push(name);
    }
    if (Array.isArray(name)) {
        for (var i = 0; i < name.length; i++) {
            if (isNameUppercase(name[i])) {
                if (name[i].includes(',')) {
                    if (name[i].includes('\"')) {
                        upperNames.push(name[i].slice(1, -1));
                    }
                    else {
                        name_arr = name[i].split(', ');
                        upperNames.push(name_arr[0])
                        upperNames.push(name_arr[1]);
                    }
                }
                else
                    upperNames.push(name[i]);
            }
            else {
                if (name[i].includes(',')) {
                    if (name[i].includes('\"')) {
                        lowerNames.push(name[i].slice(1, -1));
                    }
                    else {
                        name_arr = name[i].split(', ');
                        lowerNames.push(name_arr[0])
                        lowerNames.push(name_arr[1]);
                    }
                }
                else
                    lowerNames.push(name[i]);
            }
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
            retString += lowerNames[i] + ', '
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
