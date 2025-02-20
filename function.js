const num = [1, 2, 3, 4, 5];

function changeValue(arr)  {
    arr.forEach((value, index, array) => {
        array[index] =value *2;

    });
    console.log(arr);
    
} 

 changeValue(num)

const a = 12;
const b = 13;

function addSum(x,y) {
    return x+y;
}

console.log(`sum is ${addSum(a,b)}`);
