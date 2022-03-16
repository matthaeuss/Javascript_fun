// palindrome 

function isPalindrome(text){
    return text
        .toLowerCase()
        .split('')
        .reverse()
        .join('') === text.toLowerCase();
}

console.log(isPalindrome("ala"));

//anonymous function

const isPalindrome2 = function(text){
    return text
        .toLowerCase()
        .split('')
        .reverse()
        .join('') === text.toLowerCase();
}

// arrow function

const isPalindrome3 = text => text
    .toLowerCase()
    .split('')
    .reverse()
    .join('') === text.toLowerCase();

const lessThanOne = (digit) => digit <= 10;
const lessOrEqualToZero = (digit) => digit <= 0;
const lessOrEqualToZero2 = (digit) => {
    digit <= 0;
}// jak nie ma klamerek to jest implicit return


// max(rest operator)

const max = (...values) => {
    let max = values[0];
    for(let i = 1; i< values.length; i++){
        if(values[i] > max){
            max = values[i];
        }
    }
    return max;
}

//max 2

const max2 = (...digits) => {
    return digits.reduce((max, current) => {
        if (current > max) {
            return current;
        }
        return max;
    }, digits[0]);
}

const max3 = (...digits) => {
    let max = digits[0];

    digits.forEach((digit) => {
        if(digit > max){
            max = digit;
        }
    })
    return max3;
}

// range(5) -> [0, 1, 2, 3, 4]
// range(1, 5) -> [1, 2, 3, 4]
// range(1, 10, 2) -> [1, 3, 5, 7, 9]

function range(start, stop, step=1){
    if (stop === undefined){
        stop = start;
        start = 0;
    }

    const temp = [];
    // let i = 0;

    while(temp.length < (stop - start) / step){
        temp.push(start + temp.length * step)
    }
    return temp;
}

