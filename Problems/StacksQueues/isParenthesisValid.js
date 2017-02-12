// Main
function isParenthesisValid(validationString) {
    var stack = [];
    for (var pos = 0; pos < validationString.length; pos++) {
        var currentChar = validationString.charAt(pos);
        if (currentChar == "(") {
            stack.push(currentChar);
        } else if (currentChar == ")") {

            if (stack.length == 0){
                return false;
            }

            stack.pop();
        }
    }
    return stack.length == 0;
}

console.log(isParenthesisValid("))")); // false
console.log(isParenthesisValid(")")); // false
console.log(isParenthesisValid("((()")); // false
console.log(isParenthesisValid("((((")); // false
console.log(isParenthesisValid("()()")); // true
console.log(isParenthesisValid("()")); // true