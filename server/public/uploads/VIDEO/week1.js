//Number 1
let temp = 35;
let scale = 'C';

function convert(temp, scale){
    if(scale === 'C'){
        return (temp - 32) / 1.8;
    } else {
        return temp * 1.8 + 32;
    }
}

console.log(convert(temp, scale));

//Number 2
function compare(num1, num2){
    if(num1 < 40 || num1 > 60 || num2 < 40 || num2 > 60){
         return 'Out of range';
    } else {
        if(num1 < num2) {
            return num2;
        } else {
            return num1;
        }
    }
}

console.log(compare(49, 61));
console.log(compare(45, 55));
console.log(compare(56, 41));

//Number 3
function math(exp){
    let parts = exp.split('');
    switch (parts[1]) {
        case "+":
            return parseInt(parts[0]) + parseInt(parts[2]);
            break;
        case "-":
            return parts[0] - parts[2];
            break;
        case "*":
            return parts[0] * parts[2];
            break;
        case "/":
            return parts[0] / parts[2];
            break;
        default:
            return "Invalid Expression";
    }
}

console.log(math('4+5'));
console.log(math('6/2'));
console.log(math('foo'));

//Number 4
function replaceString(long, short1, short2){
    return long.replace(/short1/g, short2);
}

console.log(replaceString("This is a long string", "is", "isn't"));