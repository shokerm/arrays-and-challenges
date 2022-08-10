//ex1
function returnFirstElementInArrray(arr){
    return(arr[0]);
}

//ex2
function drop(arr,n){
    return arr.slice(n);
}

//ex3
function concat(input){
    if(typeof input === 'string'){
    input2 = "";
    for(var i = 1; i < input.length; i++){
        if(input[i] != "[" && input[i] != "]"){
            input2 += input[i];
        }
    }
    arr = input2.split(",");
    arr2 = [];
    for (const n of arr) {
        arr2.push(parseInt(n));
        
    }
   return arr2;
}
}
console.log(concat("[1,2,3],[4,5],[6,7]"));
console.log(concat("[1],[2],[3],[4],[5],[6],[7]"));
console.log(concat("[1,2],[3,4]"));
console.log(concat("[4,4,4,4]"));

//ex4

function arratOfMultiples(num, length){
    var arr = [];
    for(var i = 1; i < length+1; i++){
        arr.push(num*i);
    }
    return arr;
}
console.log(arratOfMultiples(7,5));
console.log(arratOfMultiples(12,10));
console.log(arratOfMultiples(17,6));


//ex5
function sevenBoom(arr){
    var svenSearching = 0;
    for (var i = 0; i < arr.length; i++) {
        
        if(arr[i]===7 || arr[i] % 10 === 7 || arr[i] % 100 === 7){
          svenSearching ++;  
        }
    }
    if(svenSearching > 0){
    console.log("boom!");
    }else{
        console.log("there's no 7 in the array");
    }
}
sevenBoom([1,2,3,4,5,6,7]); // print "boom!"
sevenBoom([8,6,33,100]); // print "there's no 7 in the array"
sevenBoom([2,55,60,97,86]); // print "boom!"

//ex6
function getLength(arr){
    var length = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] instanceof Array){
            length += getLength(arr[i]);
        }
        else{
            length++;
        }
    }
    return length;
        
}

console.log(getLength([1,[2,3]])); // returns 3
console.log(getLength([1,[2,[3,4]]])); // returns 4
console.log(getLength([1,[2,[3,[4,[5,6]]]]])); // returns 6
console.log(getLength([1,[2],1,[2],1])); // returns 5


//ex7 
function getValue(arr){
    for (const n of arr) {
        if(n instanceof Array){
            if(n.length > 0){
            getValue(n);}
            else{
                console.log("What... why did you make this?");;
            }
        }
        else{
        console.log(n);
    }
    }
}
getValue([[[[[[[[[[[[[[[["Bazinga"]]]]]]]]]]]]]]]]); // prints "Bazinga"
getValue([[[[[[[[[[[["God, what is happening*"]]]]]]]]]]]]); // prints "God, what is happening*"
getValue([[[[[[[[[[[]]]]]]]]]]]); // prints "What... why did you make this?"
getValue([[[[[[[[[[[["I have no idea what im doing"]]]]]]]]]]]]); // prints "I have no idea what im doing"


//ex8

function zeroesToEnd(arr){
    var count = 0;
    function removeZerores(arr){
        for(var i = 0; i < arr.length; i++){
            if(arr[i] ===0){
                arr.splice(i,1)
                count++;
                removeZerores(arr);
            }
        }
    }
    removeZerores(arr);

   for (var i = 0; i < count; i++) {
       arr.push(0);
   }
 
    return arr;
}
console.log(zeroesToEnd([1,2,0,0,4,0,5])); // [1,2,4,5,0,0,0]
console.log(zeroesToEnd([0,0,2,0,5])); // [2,5,0,0,0]
console.log(zeroesToEnd([4,4,5])); // [4,4,5] 
console.log(zeroesToEnd([0,0])); // [0,0]

//ex9


function fill(arr, value, startIndex, endIndex){
  
    if(endIndex <= arr.length){
        for (var i = startIndex; i < endIndex; i++) {
            arr[i] = value;
         }
    }
    else{
        fill(arr, value, startIndex, arr.length);
    }
  
     return arr;
   
}

var array = [1,2,3];
console.log(fill(array,"a",0));
console.log( fill(Array(3), "2", 0));
console.log(fill([4,6,8,10],"*",1,3));


//ex10
function diamond(n){
    var arr =[];
    var arr2 =[]; // half 1 of the diamond
    var arr3 =[]; // half 2 of the diamond
    
        for(var i =0; i < n; i++){
            arr[i] = new Array(n).fill(0,0,n);
            arr[i][i] = 1; //beginning of the diamond
            arr[i][n-i-1] = 1; //end of the diamond
        }
        for(var i = 0; (arr.length % 2 !=0?i < Math.trunc(arr.length/2 +1): i<arr.length/2); i++){
            arr2.push(arr[i]);

        }
        arr2.reverse();

        for(var i = 0; i < arr2.length-1; i++){
            arr3.push(arr2[i]);
        }
        arr3.reverse();

    return arr2.concat(arr3);

}
