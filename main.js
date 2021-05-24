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
let arr = [2, 3, 5, 8];
let result = 1;
for(let i = 0; i<arr.length; i++) {
    result *= arr[i];
};
console.log('result', result);

//Task 10
let arr10 = [2, 5, 8, 15, 0, 6, 20, 3];
for(let i = 0; i < arr10.length; ++i) {
    if(arr10[i] > 5 && arr10[i] < 10) {
    console.log(arr10[i]);
    }
}

//Task 11
let arr11 = [2, 5, 8, 15, 0, 6, 20, 3];
for(let i = 0; i < arr11.length; ++i) {
    if(!(arr11[i] % 2)) {
        console.log(arr11[i]);
    }
}

 

