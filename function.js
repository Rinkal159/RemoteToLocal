const num = [1, 2, 3, 4, 5];

function changeValue(arr)  {
    arr.forEach((value, index, array) => {
        array[index] =value *2;

    });
    console.log(arr);
    
} 

 changeValue(num)

