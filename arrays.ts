//Arrays
let arr = [10]
console.log(typeof arr)
/*array is a dynamic in nature and in its size, also it is collection of data and can store different types data
stored in a ordered collection, meaning can also access the element from the array by using the position (index)
index starts with 0 in a array*/

 let array =[10,20,"java",true,null,34.9]
 console.log(array)
 console.log(array[0])
 console.log(array[6])

 //Declaration of array
//1.using array literal -[]
//2.using array constructor - new array()


//let arrayName :datatype[] = [value1,value2,...]
let arr1:(number|string|boolean)[] = [10,"java",true]
let Arr1 = [10,20,"java",true,null,undefined,34.90]
console.log(arr1)
console.log(Arr1)
console.log(arr1.length)
console.log(Arr1.length)

//Traditional for loop
for(let i=0;i<Arr1.length;i++){
    console.log(Arr1[i])
}
//for of loop

let arr7 = [10,20,30,40,50,"pink","orange","TS"]
for (let ele of arr7){
    console.log(ele)
}
//splice() slice() indexof() last 