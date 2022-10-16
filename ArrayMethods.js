// Array Methods 

1- forEach
/*
 the diffrence between foreach and map is it does not create a new array.
modified the array by performing operations on existing array 
forEach((value,index,array)=>{
  functions logic here...
})
 */
let num = [12,34,56];
console.log(num);
num.forEach((print)=>{
  console.log(print);
})


2- Map 
/* 
the diffrence between map and forEach is it creates a new array.
creates an new array by performing some operations on each array.
map((value,index,array)=>{
  functions logic here...
})
these does not modified an original array
*/
let arr = [7,8,9,24,36,10];
let a = arr.map((value)=>{
  console.log(value);
  return value*7;
})
console.log(a)
// answere = [49, 56, 63, 168, 252, 70]

3-Filter

/*
filters an array that pass with a  value that passes the test
creates an new array
these does not modified an original array
*/
let arr1 = [6,8,93,906,5,5]
let b = arr1.filter((value)=>{
return value>8;
})
console.log(b);
// answere =  [93, 906]

4-reduce

let arr2 = [1,2,3,4,5,6];
let c=arr2.reduce((h1,h2)=>{
return h1+h2
},5)
console.log(c);

// answere = 26


3- splice 

/* 
splice methode delete the elements from the array and replace by another
it has a syntax of  [position,number of elements want to delet ,elements wants to replace by  ]
it modifies the array
*/

let id = [1,5,6,7,7,865,3332];
id.splice(2,3,4,4,4,4);
console.log(id);
// Answere =[1, 5, 4, 4, 4, 4, 865, 3332]


4- sort 

/*It modifies the array . 
It order the first element alphabaetically .
we can also use to asscending or decending order   */

let sort = [73,53894, 9203,1234];
sort.sort();
console.log(sort);
// Answere = [1234, 53894, 73, 9203]