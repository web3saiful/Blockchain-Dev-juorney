// let x =7;
// let y =9;
// let z =++x- --y+x++;
// console.log(x);

// console.log(z);







// let a ="5"
// let b =5
// console.log(a===b);
// console.log(a===b);




// let a=5
// let a=5;
// let b=9;
// console.log(a>b&& a<b);
// console.log(a<b ||a>b);
// console.log(!(a>b || a<b));



// const currentYear=2025;
// let birthYear=promt("Enter your birth year");
// let age=currentYear-birthYear;
// console.log("You are " + age + " years old");




// let age =16;
// if(age>=18){
//     console.log(you can give vote);
// }else{
//     console.log("you cannot give vote");
// }



// else if ladder
// swith statement
// switch(condition)

// let age=15;
// if(age>0 && age <=5){
//     console.log("YOU are a child");

// }else if(age >5&& age <12){
//     console.log("YOU are a young");
// }else if(age>12 && age <25){
//     console.log("you are an adult");
// }else {
//     console.log("you are old");
// }


//  Again


// let dayNum=4;
// if(dayNum==1){
//     console.log("Today is Friday");

// }else if(dayNum==2){
//     console.log("Today is saturday");
// }else if(dayNum==3){
//     console.log("Today is sunday");
// }else if(dayNum==4){
//     console.log("Today is Monday");
// }else if(dayNum==5){
//     console.log("Today is Tuesday");
// }else if(dayNum==7){
//     console.log("Today is wednesday");
// }else if(dayNum==7){
//     console.log("Today is Thrusday");
// }
// else{
//     console.log("Day Number is not valid");
// }

// // switch statement
// let dayNum=4;
// switch (dayNum){
//     case 1:
//         console.log("Today is Friday");
//         break;
//         case 2:
//             console.log("Today is saturday");
//             break;
//             case 3:
//                 console.log("Today is Sunday");
//                 break;
//                 case 4:
//                     console.log("Today is Monday");
//                     break;
//                     case 5:
//                         console.log("Today is Tuesday");
//                         break;
//                         case 6:
//                             console.log("Today is Wednesday");
//                             break;
//                             case 7:
//                                 console.log("Today is Thursday");
//                                 break;
//                                 default:
//                                     console.log("Day Number is not valid");
//                                     break;
// }








// // while loop

// let num=0;{
//     while(num<=100){
//         console.log(num);
//         num++;
//     }
// }



// // do while loop


// do{
//     console.log(num);
//     num++;
// }while(num<=100);






// //  infinite loop
// let num=0;
//  while(true){
//     console.log(num);
//     num++;
//  }


// let num=0
// for (;;){
//     console.log(num);
//     num++;

// }




// mulitiple of 5
// let constant=5;
// for(let n=1; n<=10; n++){
//     console.log(constant* n);
// }







// sequence
// let sum=0;
// for(let n=1;n<=20;n++){
//     sum=Sum+n;
// }
// console.log(sum);


//  1. Function declaration
// function greet (name){
// return `hello,${name}`;
// }
// Function Expression 
// const greet2 =function(name){
//     return `Hey there,${name}`;
// }
// Arrow Function (modern and concise)
// const greet3 =(name)=>{
//     return `Hi, ${name}`;
// };


// let x=10;
// if(x>5){
//     let y =20;
//     console.log(y);
// }
// console.log (y);
 
// let x=10;
// if(x>5){
//     let y =20;
//     console.log(y);
// }
// console.log (y);
// let month = prompt("Give month number:");
// month = parseInt(month);
// if(month == 1){
//     console.log("January");
// }
// else if(month == 2){
//     console.log("February");
// }
// else if(month == 3){
//     console.log("March");
// }
// else if(month == 4){
//     console.log("April");
// }
// else if(month == 5){
//     console.log("May");
// }
// else if(month == 6){
//     console.log("June");
// }
// else if(month == 7){
//     console.log("July");
// }
// else if(month == 8){
//     console.log("August");
// }
// else if(month == 9){
//     console.log("September");
// }
// else if(month == 10){
//     console.log("October");
// }
// else if(month == 11){
//     console.log("November");
// }
// else if(month == 12){
//     console.log("December");
// }
// else{
//     console.log("Invalid number");
// }



// // code driven function
// function myFunction(fullName,age,dateOfBith=2005) {
//     console.log ('Hello '+fullName + ' I am ' 
//         +age+ 'My date of birth is '+dateOfBith);
    
// }
// myFunction('saiful',19,2005);
// myFunction('shovo', 35,2000  );


// // event driven function
//  function isSubscribed(){
//     console.log('subscribed');
//  }
// document.getElementById('btn').addEventListener('click', isSubscribed);

// // self-invoking function

// (function (message){
//     console.log('I am self-invoking Fuction',message);
// })('hello world');



// function expression
// let math =function(x,y){
//     return x*y;
// };
// console.log(math(3,4));
// console.log (math(1,7))





// About return statement in javascript
// let math =function(x,y){
//     console.log('testimg if I am working of not');
//     return x*y;
// };
// console.log (math (3,4));
// console.log (math (2,5));
// console.log (math(4,5)); 



// function newFunction (){
//     let firstName='Ali';
//     console.log(firstName);
// }
// newFunction();
// function newFunctions(){
//     let firstName='Ali';
//     console.log(firstName)
// }


// let numbers=[4,5,6,7,8,9,10,2];
// let sqNumbers=numbers.map (function(number){
//     return number*number;

// })
// console.log(sqNumbers);





// array functions
// let add=functon(X,y){
//     return x+y;
// };
// console.log(add(5,6));

// let add=(x,y)=>x+y;
// console.log(add(5,6));


// nested function

// function greet (firstname){
//     function sayHello(){   
//         function('hello'+firstName);
//     }
//     return sayHello();
// }





// // Objects in javascript and also called literals

// const newSymb= Symbol('key1');
// const mobileModel={
//     brand:'samsung',
    
//     model:'s24 Ultra',
//     prossesor: 'sanpdragon gen 3',
//     camera: [200,50,10],
//     hasZoomCamra:true,
//     'battery':'5000Ma',
//     [newSymb]:'MyKey1',

// };

// console.log(mobileModel.brand);
// Object. freeze(mobileModel);  
// mobileModel.brand='Apple'; //This will not change the brand
// ;
// console.log(mobileModel.hasOwnProperty('camera'));
// console.log(mobileModel.hasOwnProperty('camera'));

// console.log(Object.keys(mobileModel));
// console.log(Object.values(mobileModel));
// console.log(mobileModel['battery']);
// console.log(mobileModel[newSymb]); 


//enent

// function subscribe(){
//     document.getElementById('text').innerHTML=
//     'Subscribed'; 
//     document.getElementById('btn').innerHTML=
//     'Subscribed'; 

//     document.getElementById('btn').style.
//     backgroundColor='#262626';
// } 


// function like(){
//     document.getElementById('like').innerHTML=<i class="fa-solid fa-thumbs-up"></i>
//     'Liked';
    
// }

// function keypress(){
//     document.getElementById("text").innerHTML='Key Presed';
// }
// keypress();

// function onload(){
//     alert('Testing javascript Onload');
//     document.getElementById('text').innerHTML=
//     'Website Loeaded Properly'
// }





apna college===========
let str ="ApnaCollege";
let str2="Sharadha";








