function bubbleSort(arr, n = arr.length){
    if(n == 1) return arr;

    for(let j = 0; j < n - 1; j++){
        if(arr[j] > arr[j + 1]){
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
    };

    return bubbleSort(arr, n-1);
};

console.log(bubbleSort([5, 44, 4, 12, 8, 9, 43, 42, 1])); // [1, 4, 5, 8, 9, 12, 42, 43, 44]
console.log(bubbleSort([89, 66, 100, 3, 91, 130])); // [3, 66, 89, 91, 100, 130]
console.log(bubbleSort([74, 900, 12, 33, 1, 3, 6, 18])); // [1, 3, 6, 12, 18, 33, 74, 900]
console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
