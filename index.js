

// Hoisting

// var b;
// console.log(b);  -> this results to undefined rather not defined.
// b = 10;

// types in js 

// 1) reference type {} [] ()

// var a = [10,20,30];
// var b = a;  b holds the location of a's memory location rather than its copy.

// b.push(40); 
// console.log(a);


// 2) primitive type   

// var mystr = "hello";
// console.log(mystr);


// conditionals - if else, else if, switch case 

// NaN, 0, undefined, null, "" -> false 

// if (null) {   // 1/0 gives true
//     console.log("hello");
// } else {
//     console.log("world");
// }


// loops - for, while, do while, for in, for of

// for(var i=0;i<10;i++) {
//     console.log("hello");
//     console.log(i);
// }

// var a  =10;
// while (a<20) {
//     console.log(a);
//     a++;
// }

// functions

// function hello(a,b) {
//     console.log(a,b);
//     console.log("hello");
// }
// hello(7,78,2);



// var obj = {name: "vj"}
// var obj2 = [...obj];

