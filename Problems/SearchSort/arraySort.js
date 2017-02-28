// Main
var mythical = ['dragon', 'slayer', 'magic', 'wizard of oz', 'ned stark'];

function sortComparator(a, b) {
    return a.length - b.length;
}
mythical.sort(sortComparator);
// ["magic", "dragon", "slayer", "ned stark", "wizard of of"]

var mythical = ['dragon', 'slayer', 'magic', 'wizard of oz', 'ned tark'];

function sortComparator(a, b) {
    return a.indexOf("a") - b.indexOf("a");
}

mythical.sort(sortComparator);
// ["magic", "dragon", "slayer", "wizard of oz", "ned stark"]

var mythical = [{
    prop1: '',
    prop2: ''
}, {
    prop1: '',
    prop2: '',
    prop3: ''
}, {
    prop1: '',
    prop2: ''
}];

function sortComparator(a, b) {
    return Object.keys(a).length - Object.keys(b).length;
}

mythical.sort(sortComparator); // [{prop1:'', prop2:''},{prop1:'', prop2:''},{prop1:'', prop2:'', prop3:''}]