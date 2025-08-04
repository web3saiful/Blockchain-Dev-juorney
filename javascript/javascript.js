function myFunction(fullName,age, dateOfBirth=1991) {
    console.log(
        'Hello '+fullName + ' I  am ' + age + ' My Date of Bith' + dateOfBirth);
}
myFunction('Ali',30,1991);
myFunction('Shovo',35,true);

function isSubscribed(){
    console.log('Subscribed');
}
document.getElementById('btn').addEventListener
('click',isSubscribed);
(function(message){
    console.log('I am seltInvoking Function',message);

})('Hello');
let maths=function(x,y){
    return x*y;
};

console.log(maths(3,4));
console.log(maths(4,4));
