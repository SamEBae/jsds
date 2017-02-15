function flattenDictionary(dictionary) {
    var flattenedDictionary = {};

    function flattenDitionaryHelper(dictionary, propName) {
        if (typeof dictionary != 'object') {
            flattenedDictionary[propName] = dictionary;
            return;
        }
        for (var prop in dictionary) {
            if (propName == '') {
                flattenDitionaryHelper(dictionary[prop], propName + prop);
            } else {
                flattenDitionaryHelper(dictionary[prop], propName + '.' + prop);
            }
        }
    }

    flattenDitionaryHelper(dictionary, '');
    return flattenedDictionary;
}

var dictionary = {
    'Key1': '1',
    'Key2': {
        'a': '2',
        'b': '3',
        'c': {
            'd': '3',
            'e': '1'
        }
    }
}

var dictionary2 = {
    'Key1': '1',
    'Wow': '1',
    'I': {
        'love': {
            'coding': Infinity
        }
    }
}

console.log(flattenDictionary(dictionary)); // {Key1: "1", Key2.a: "2", Key2.b: "3", Key2.c.d: "3", Key2.c.e: "1"}
console.log(flattenDictionary(dictionary2)); // {Key1: "1", Wow: "1", I.love.coding: Infinity}