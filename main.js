//Task 7//
let user ='Jhon Doe';
console.log(user);

let student = 'Natali';
console.log(student);

user = student; //В консоль значение 'Natali'//
console.log(user);

//Task 8//
let test = 1;
++test;
test += 1;
console.log(test); //В консоле значение 3//
test -= 1;
console.log(test); //В консоле значение 2//
console.log(Boolean(test)); //В консоле значение 'true'//

//Task 9//
const arr = [2, 3, 5, 8];
let result = 1;
for(let i = 0; i<arr.length; i++) {
    result *= arr[i];
};
console.log('result', result);

//Task 10
const arr10 = [2, 5, 8, 15, 0, 6, 20, 3];
for(let i = 0; i < arr10.length; ++i) {
    if(arr10[i] > 5 && arr10[i] < 10) {
    console.log(arr10[i]);
    }
}

//Task 11
const arr11 = [2, 5, 8, 15, 0, 6, 20, 3];
for(let i = 0; i < arr11.length; ++i) {
    if(!(arr11[i] % 2)) {
        console.log(arr11[i]);
    }
}
//Lesson-3
//Task 5
let palidrome = (str) => {
    let strLen = str.lenght;
    strReverse = str.split('').reverse().join('')
        if(strReverse == str) {
            return 'true';
        }else {
            return 'false';
        }
    }
console.log(palidrome('rhagdt'))

//Task 6
const min = (a,b) => {
    return (a < b) ? a : b
}
console.log(min(15,120));

const max = (a,b) => {
    if(a > b) {
        return a
    }else {
        return b
    }
}
console.log(max(52,21));

//Task 7
let zero = [20,33,30,48,50,88,75,69,10,100];
const replaceZero = zero.toString().replace(/0/g,'zero');
console.log(replaceZero);
let result5 = replaceZero.split();
console.log((result5))
//Пока решение такое