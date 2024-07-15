//first 100 numbers

let sum=0;
for(let i=1;i<=100;i++){
   sum+=i;

    if(i%3==0 && i%5==0)
      console.log("FizzBuzz")
      else if(i%3==0)
         console.log("Fizz")
      else if(i%5==0)
         console.log("Buzz")
     
   else
   console.log(i)
}

//==========================================
//==========================================

//palindrome

// function palindrome(name){
// name.reverse()
// if(name==name.reverse)
//    console.log("palindrome")
// else
// console.log("not palindrome")
// }
// console.log(palindrome("NAVEEN"))
   
//============================================
//============================================

//largest number in an array

let arr=[1,2,13,4,5]
let max=arr[0];
for(let i=0;i<arr.length;i++){
   if(arr[i]>max)
      max=arr[i]
   }
console.log(max)

//============================================
// longest word in the string

function string(name1,name2,name3){
   let arr=[name1,name2,name3]
   let max=arr[0];
   for(let i=0;i<arr.length;i++){
      if(arr[i].length>max.length)
         max=arr[i]
      }   
      console.log(max)
}
console.log(string("NAVEEN","AMAR","ARJUN"))


//==============================================
//give the factorial of the input number

function factorial(num){
   let fact=1;
   for(let i=1;i<=num;i++){
      fact=fact*i
      }
      console.log(fact)
}
console.log(factorial(5))

//===============================================
//celsius to fahrenheit

function temperature(celsius)
{
   let fahrenheit=(celsius*9/5)+32
   console.log(fahrenheit)
} 
console.log(temperature(30))