// let age = 18;
// let status = (age>18) ? "minor" : 'major';
// console.log(status);


// let arr = [1,2,3]

// let arr = ["hello", "hi", "nothin","rfbej","dnkendf"]
// let removed = arr.splice(3,1,"hellu","nice")
// console.log(arr);
// console.log(removed);
// const numbers = [25, 5, 12];

// numbers.sort((a, b) => {
//   console.log(`Comparing a: ${a} and b: ${b} | Result: ${a - b}`);
//   return  b-a;
// });

// console.log("Final Output:", numbers);

// let arr = [1,2,3,4];
// arr.fill(0,1,2)
// console.log(arr)

// let arr = ["a","b","c"];
// newarr = arr.join(",")
// console.log(arr)
// console.log(newarr)

// let arr = [1,[2,3],[4,[5,6]]];
// console.log(arr.flat());
// console.log(arr.flat(5));


// console.log(Array.isArray([1,2,3]));
// console.log(Array.isArray("hello"));

// let str = 123;
// console.log(Array.from(str));

// let arr = [1,2,3,4,5];
// console.log(arr.indexOf(2,3));

// function something(veggies , veggie){
//     if (veggies.indexOf(veggie) === -1){
//         veggies.push(veggie)
//         console.log(`${veggie} added to the collection`)
//     }else{
//         console.log(`${veggie} already in the collection`)
//     }
// }

// const veggies = ["a","b","c","d"]
// something(veggies, "hello")
// console.log(veggies)

// const arr = [10,20,20,20];
// console.log(arr.indexOf(20,0))

// const arr = [10,20,30,40,10];
// console.log(arr.lastIndexOf(10))
// console.log(arr.includes(50));

// let users = [
//     {id:1,name:"Yuyutsu"}
// ,{id:2,name:"Lamsal"}
// ]

// let user = users.find(u=>u.id ===1);
// console.log(user)
// console.log(user)


// let arr = 
// const arr = [10,20,30,40,10];
// let found = arr.findIndex(f => f > 20);
// console.log(found)
// let found = arr.findLast(f => f < 10);
// console.log(found)
// let sm = arr.some(f => f>10)
// console.log(sm)

// arr.push(30);
// console.log(arr)

// let ev = arr.every(e => e >9);
// console.log(ev)

// let users = [
//     {name:"A", age:30},
//     {name:"B",age:45},
//     {name:"C", age:20}
// ]

// let sorts = users.sort((a,b)=> a.age - b.age);
// console.log(sorts)
    
// let arr = [1,2,3,4]
// arr.forEach((currentValue,index,array)=>{
//     console.log(`index:${index} : ${currentValue} : ${array}`)
// });


// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// let newarr = arr.map((currentValue,index,array)=>{
//     console.log(`index:${index} : ${currentValue} : array:${array}`)
// });
// console.log();

// let newarr = arr.map(n=>n*2);
// console.log(typeof newarr);

// let newones = arr.filter(n => n >10);
// console.log(newones);
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

// let newarr = arr.reduce((acc,currval,currin,arr)=>
// {
//     console.log(`acc :${acc},index:${currin}:currentval:${currval}, array:${arr}`);
// },0);
// let arr = ["True","False"]
// let newarr = arr.reduceRight((acc,curr)=>acc+curr,0);
// console.log(newarr);

// for (let item of arr)
// {
//     console.log(item);
// }

// ler newarr = 
// for(let [index,values] of arr.entries())
// {
//     console.log(index,values);
// }



// ==============================hoisting======================
// sayHi();
// function sayHi(){
//     console.log("Hi");
// }
// console.log(a);
// const a = 10;

// multiply(4,5);
// const multiply = function(a,b){
//     console.log(a*b);
// }

// const makeuser = (name,age) => ({name:name ,age:age});
// console.log(makeuser("yuyutsu",21));

// const multiply = (a,b) => a*b;
// console.log(multiply(4,5));

// const regularfunction = function(){
//     console.log(arguments);
// }
// regularfunction(1,2,3);

// const arrowfunction = (...args)=>{
//     console.log(args);
// }
// arrowfunction(1,2,3);


//short hand way
// const obj2 = {
//     greet(){
//         return "Hello";
//     }
// };

// console.log(obj2.greet())

// const obj1 = {
//     greet:function(){
//         return "Hello";
//     }
// };
// console.log(obj1.greet());

// const double = n=> n*2;
// console.log(double(5));

// (function() {
//     // Code runs immediately
//     console.log("IIFE executed!");
// })();

// (()=>{
//     console.log("iife arrowfunction");
// })();

// (function(){
//     console.log("iife executed")
// })();

// (()=>{
//     console.log("arrow function iife");
// })();

// let fruits = ["apple","banana"];
// for(let fruit of fruits){
//     console.log(fruit);
// };

// let promise = new Promise((resolve,reject)=>{
//     let success = false;
//     if (success){
//         resolve("Data Received");
//     }
//     else{
//         reject("something went wrong");
//     }

// });

// promise
//     .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error)

// });

// let promise = new Promise((resolve,reject)=>{
//     let data = fetch("https://dataweather.com");
//     if (data){
//         resolve('fetched data');
//     }
//     else{
//         reject("Data not fetched");
//     }
// });

// promise
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error);
// });

// fetch ("https://openweatherdata.com")
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })

// let promise = new Promise((resolve,reject)=>{
//     let status = true;
//     setTimeout(()=>{
//         if (status){
//             resolve("success");
//         }
//         else{
//             reject("unsuccessful");
//         }
//     },1000);
// });

// promise
// .then((data)=>{
//     console.log(`success : ${data}`)
// })

// .catch((error)=>{
//     console.log("error")
// })

// .finally(()=>{
//     console.log("la j bhayo bhayo")
// });


///promise ko chaining
// Promise.resolve(2)
// .then((num)=>{
//     return num +3;
// })
// .then((num)=>{
//     return num *2;
// })
// .then((num)=>{
//     console.log(num);
// });

// promise chaining 

// fetch("./new.json")
// .then((response)=>{
//     return response.json();
// })

// .then((data)=>{
//     console.log(data.temperature);
//     return data; // passing data to next .then()
// })
// .then((data)=>{
//     console.log(data.wind);
//     return data.wind;
// })
// .then((wind)=>{
//     console.log(wind[0]);
// })
// .catch((error)=>{
//     console.log(error)
// })

// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Weather Data");
//     },2000);
// });

// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("weather data");
//     },2000);
// });

// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Forecast Data");
//     },2000)
// });

// let FetchA = fetch("https://hrendkjfde.com")
// let FetchB = fetch("https://dwkjfhbdn.com")
// let FetchC = fetch("https://dnewjfnewn.com")

// // Promise.all([promise1,promise2,promise3])
// Promise.all([
//     FetchA.then((res)=>res.json),
//     FetchB.then((res)=>res.json),
//     FetchC.then((res)=>res.json)
// ])
// .then(([data1,data2,data3])=>{
//     console.log(data1,data2,data3);
// })
// .catch((error)=>{
//     console.log(error);
// });

// function hello(name){
//     console.log("Hello " + name);
// };
// // hello("yuyutsu");
// function processuser(){

// }

// function calculate(a,b,operations){
//     operations(a,b);
// }
// function add(a,b){
//     console.log(a+b);
// }
// calculate(5,4,add);

// function someone(name){
//     console.log(`Name : ${name}`);
// };

// function user(someone,age){
//     someone("Yuyutsu");
// }

// user(someone,15);

// function user(name,age){
//     console.log(`User : ${name} with age : ${age}`);
// };
// function print(callback){
//     callback("Yuyutsu",15);
// };
// print(user);

// function add(a,b){
//     console.log(a+b);
// }
// function sum(nums){
//     nums(4,5);
// }
// sum(add);

// here nums === add 
// nums(4,5) because nums is now a function
// nums === add 
// nums(4,5) is exactly same as add(4,5)

// function  sum (nums){
//  sums(4,5)
// }
// sum(add)

// is similar to 
// function sum(add){
// add(4,5)
    // }



// function sum(add(a,b){

// });

// setTimeout(()=>{
//     console.log("Times up");
// },3000);

// getUser(1,function(user){
//     getPosts(user.id,function(post){
//         getComments(posts[0].id, function(comments){
//             console.log(comments);
//         })
//     })
// })

// ===========================================================================================
// ===========================================================================================

// async function greet(){
//     return "Hello";
// }
// // console.log(greet());
// greet().then(value=>console.log(value));

// async function run(){
//     console.log("start");
//     await delay(2000);
//     console.log( "2 second paused"
//     );
// }


// async function getUser(){
//     try{
//         let response = await fetch("https://api.example.com/user/1");
//         let data = await response.json(); //json also returns a promise so we await it too
//         console.log(data);
//         return data;
//     }catch (error){
//         console.log(error.message);
//     }
// }
// getUser();

// async function loadData() {
//   console.log('loadData: start');
//   const a = await taskA(); // pauses HERE for 3 seconds
//   console.log('loadData: got a =', a);
// }

// loadData(); // called first
// console.log('main: this runs immediately'); // doesn't wait for loadData

// setTimeout(() => console.log('main: timer fired'), 1000);

// switch(2){
//     case 1:
//         console.log("one");
//         break;
//     case 2:
//         console.log("two");
//         break;
//     case 3:
//         console.log("three");
//         break
// }


// let cpt = prompt("Enter capital city");
// switch (cpt){
//     case "ktm":
//         console.log("paiyo");
//         break;
//     case "jvne":
//         console.log("bhayena");
//         break;
//     default :
//     console.log("not found")
// }


// const res = await fetch('/api/nonexistent'); // returns 404
// console.log(res.ok);     // false
// console.log(res.status); // 404
// NO error thrown, NO promise rejection — fetch "succeeded" from its own perspective


// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(`${i} x ${j} = ${i*j}`);
//   }
// }
// console.log(true === "true");
// typeof console.log(5 =="5");
// console.log(typeof "5");
// console.log(typeof 5);

// let arr = [1,2,3,{
//     "user":"yuyutsu",
//     "workplace":"globalime"
// }]
// console.log(arr[3]);

// console.log(NaN);

// console.log(1 === "2");
// console.log(1 = 1);


// console.log(2);
// setTimeout(()=>{
//     console.log(3);
// },2000);
// console.log(4);

// function outerfunction(number){
//     return function innerfunction(variable){
//         console.log(variable + number);
//     }
// }
// const out = outerfunction(5);
// out(3);

// const outerfunction = (number)=>{
//     return (variable)=>{
//         return number +variable;
//     }
// };
// const out = outerfunction(5);
// console.log(out(4));

// const outer = (number) =>(variable)=> number +variable;
// const out = outer(5);
// console.log(out(5));

// function something(name){
//     return function(surname){
//         return name + surname;
//     };
// }

// const out = something("yuyutsu");
// // console.log(out(" lamsal"));
// // const out = something("lamsal");`
// console.log(out);

// function something(){
//     var counter = 0;
//     return function(){
//         return counter++;
//     }
// }
// const out = something();
// console.log(out());
// console.log(out());

// let arr = [1];
// let newar = [...arr];
// // console.log(newar);
// console.log(typeof newar);

// const a = 5;
// function add(){
//     console.log(a)
//     function sub(){
//         console.log(a)
//     }
// }
// add(sub());


// function grandparent(){
//     const a = "A";

//     function parents(){
//         let b = "B";

//         function child(){
//             let c = "C";
//             console.log(a,b,c)
//         }
//         child();
//     }
//     parents();

// }
// grandparent()

// let aaa = 0;
// function a(){
//     let counter = 0;
//     return function b(){
//         a();
//         return aaa++;
//     }
// }

// let aa = a();
// console.log(aa());
// console.log(aa());
// console.log(aa());



// function a(num){
//     console.log(n);
//     function b(){
//         // console.log(num + n);
//         return num +n;
//     }
//     return b;

// }
// var out = a(5);
// console.log(out());
// var n = 5;
// const out = (num) =>{
//     console.log(n);
//     const out2 =()=>{
//         // console.log(num+n);
//         return num + n;
//     }
//     return out2;
// };

// console.log(out2());
// console.log(out(2))
// console.log(out2());

// const newout = out(2);
// console.log(newout());

// let x = 5;
// function a(num){
//     // console.log(num + x);
//     return num;
// }
// function b(){
//     console.log(x+num);
//     // a(5);
// }
// b();


// (()=>{
//     console.log(5 +"yuyutsu");
// })();


// (function hello(){
//     console.log("ki hal hai")

// })();

// (function(){
//     console.log("yusu")
// })();


// let x = 1;
// console.log(x++);
// console.log(x);
// let b = ++x;
// console.log(b)
// console.log(++x);
// console.log(x++);
// console.log(x);

// console.log(++x);
// console.log(x);

// const person = {
//   name: "Yuyutsu",
//   greet: function() {
//     return this.name; // `this` = person, because person.greet() called it
//   }
// };

// // person.greet(); // "Yuyutsu"
// // const newp = person();
// // newp.greet();

// console.log(person.greet());


// let arr = []

// var x = 5;
// var x = 10;
// console.log(x);

// var x = 5;
// x=6;
// let x = 5;
// console.log(x)


// var x; // declaration
// x = 5; //definition 
// let y; //declaration
// y=5; // definition
// const z =0; // initialize
// console.log(x);
// console.log(y);
// console.log(z);



// const out = name =>{
//     return `hello ${name}`; 
// }
// console.log(out("Yuyutsu"));

// let x;
// console.log(x);
// x = 10;

// {

//     // The TDZ is the gap between the start of the scope and the declaration line
//     //TDZ starts here;
//     console.log(x); //Crash Hunxa since i am inside TDZ 
//     let x; //TDZ ends here kina bhane x is initialized to undefined;
//     x= 10;
// }

// console.log(typeof TDZ);

// function add(a,b){
//     // console.log(a+b);
//     return a + b;
// }
// function sum(nums){
//     return nums(5,4);
// }
// console.log(sum(add));

// console.log(typeof 4);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const p1 = new Person("Yuyutsu", 23);
// console.log(p1.name); // "Yuyutsu"
// console.log(p1.age);  // 23

// let i = 5;
// while(i<5){
//     console.log(i);
//     i++;
// }

// do{
//     console.log(i);
//     i++;
// }while(i<=10);


// for (let i =0;i<10;i++){
//     console.log(i)
//     if(i==5){
//         break;
//     }
// };


// for (let i = 0;i<=10;i++){
//     if (i===5){
//         continue;
//     }
//     console.log(i);
    
// };

// let a = "yuyu";
// switch (a)
// {
//     case "yuyu":
//         console.log("not found");
//         break;
//     case "sjd":
//         console.log("not found1");
//         break;
//     case "fkjhds":
//         console.log("found");
//         break;
// }


// let day ="a";
// switch (day){
//     case "c":
//     case "d":
//         console.log("yo haina");
//         break;
//     case a:
//     console.log("yo chai ho");
//     break;
// }


// const add =(num ,num2) => num+num2
// console.log(add(2,3));
// const square = num => num**2
// console.log(square(2));

// const add = a => a**2
// console.log(add(2));

// const makeuser = name => ({name:name});
// console.log(makeuser("Yuyutsu"));

// const func = function (){
//     console.log(5);
// }
// func();

// function helo(name){
//     console.log()

// }

// const x;
// console.log(x);


// let a = [2,5,3,8,1,6,9];
// a.sort((a,b)=>a-b);
// console.log(a);

// let x = [2,4,8,16];
// let neew = x.find(x=>x**2);
// console.log(neew);
// let arr = [a, b, c];
// console.log(arr.reduceRight((acc, n) => acc + n)); // "cba"


// class Person {
//   constructor(name) {
//     this._name = name; // convention: underscore for "internal" value
//   }

//   get name() {
//     // return this._name.toUpperCase();
//     return this._name;
//   }

//   set name(newName) {
//     if (newName.length > 0) {
//         return this.newName.toUpperCase()
//     }
//         this._name = newName;
//   }
// }

// const p = new Person("yuyutsu");
// console.log(p.name); // "YUYUTSU" - calls getter, looks like a property access
// p.name = "ram";       // calls setter, looks like a normal assignment
// console.log(p.name);  // "RAM"



// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   eat() {
//     return `${this.name} is eating`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // MUST call before using `this`
//     this.breed = breed;
//   }
//   bark() {
//     return `${this.name} says woof`;
//   }
// }

// const d = new Dog("Rex", "Labrador");
// console.log(d.eat());  // "Rex is eating" - inherited
// console.log(d.bark()); // "Rex says woof"


// =================================ReGEX======================================
// const pattern = /hello/;
// const pattern = new RegExp('hello');

// console.log(pattern.test('hello world'));
// console.log(pattern.test('goodbye'));

// const str = "hello world";
// console.log(/hello/i.test(str));



