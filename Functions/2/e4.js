function reverseString(reString) {
    var reversedString = "";
    for (var i = reString.length - 1; i >= 0; i--) {
        reversedString += reString[i];
    }
    return reversedString;
}
var original = prompt(" write your string that you want to reverse it ");
var reversedString = reverseString(original);
console.log("Reversed string:", reversedString);



