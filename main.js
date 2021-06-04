//Task 7//
/*let user ='Jhon Doe';
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
const palidrome = (str) => {
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
const arr = [20,33,30,48,50,88,75,69,10,100];
const addZero = (arr) => {
for(let i = 0; i < arr.length; i++){
    if(!(arr[i] % 10)){
        arr[i] = ('' + arr[i].replaceAll('0', 'zero'))
    }
}
return arr
}
console.log(addZero(arr));*/

//Lesson-4
//Task-5 console.log(sum(5)(2)); // 7
function sum(a) {
    return function(b) {
        return (a + b)
    }
}
console.log(sum(5)(2))

//Task-6 Покрасьте абзацы по клику (событие click)
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const Paragraphs = document.querySelectorAll('p');
const changeColor = function() {
    let x = 0;
    return function(e) {
        e.target.style.color = colors[x];
        x++;
        if(x == colors.length) {
            x = 0;
        }
    }
}
for(let i = 0; i < Paragraphs.length; i++) {
    Paragraphs[i].addEventListener('click', changeColor());
}