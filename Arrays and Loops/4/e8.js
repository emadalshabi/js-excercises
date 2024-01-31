
let targetName = prompt(" write the name ");
let names = ["Emad", "Mohammed", "Ibraheem"];

function isNameInArray (names, targetName) {
    for (let i = 0; i < names.length; i++) {
        if ( targetName === names[i]) {
            return true; 
        }
    }
    return false;
}

console.log( isNameInArray(names, targetName));