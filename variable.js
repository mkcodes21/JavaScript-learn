let name ="Mohit Kumar"

let age = 23;

// Here i can change the value of age variable without any error because it is declared with let keyword.
    
age = 24;

const mobileNumber = 9793603878

    //mobileNumber = 1234567890;

// but i cannot change the value of mobileNumber variable because it is declared with const keyword. If I try to change the value of mobileNumber variable then it will give me an error.


console.log("Name: " + name  + ", \nMobile Number: " + mobileNumber + ",\n Age: " + age);

var address = "Delhi, India";
var address = "Noida, India";

console.log(address, address);
// Here i can take address variable multiple times because it is declared with var keyword. If I try to declare address variable again then it will not give me an error.


// Data types in JavaScript

// Primitives data types

// Number , String, Boolean, Null, Undefined, Symbol , bigint

// Number
    let a = 10;
    let b = 20;
    console.log(a , b);

// String
    let firstName = "Mohit";
    let lastName = "Kumar";
    console.log(firstName , lastName);

// Boolean
    let isTrue = true;
    let isFalse = false;
    console.log(isTrue , isFalse);

// Null
    let newPassword = null;
    console.log(newPassword);

// Undefined
    let newUser;
    console.log(newUser);

// Symbol
    let id = Symbol("id");
    console.log(id);
    let id2 = Symbol("id");
    console.log(id2);
    console.log(id === id2); // false

// BigInt
    let bigNumber = 1234567890123456789012345678901234567890n;
    console.log("Big Number is : ", bigNumber);


// Non-Primitives data types

// Object, Array, Function

// array
    let fruits = ["Apple", "Banana", "Mango", "Orange"];
    console.log(fruits);

    let marks = [90, 80, 70, 60];
    console.log(marks);

    let arr = [10 , "Mohit", true, "Banana", 20.8];
    console.log(arr [1]); // Mohit

    console.log(typeof arr); // object

// object
    let person = {
        name: "Mohit Kumar",
        age: 23,
        mobileNumber: 9793603878,
        address: "Uttar Pradesh, India"
    }
    console.log(person);
    console.log(typeof person); // object

// function
    function add(a, b){
        return a + b;
    }
    console.log(add(10, 20));
    console.log(typeof add); // function

    let mul = function multiply(a, b){
        return a * b;
    }
    //console.log(multiply(10, 20));
    console.log (mul(50,12));


    // non-primitive data types are mutable

let arr1 = [12, 22, 30, 24];
arr1.push(77);
arr1[1] = 2000;
console.log(arr1);


let obj1 = {
    name: "Mohan",
    age: 24
}
obj1.name = "Sohan";
console.log(obj1);

