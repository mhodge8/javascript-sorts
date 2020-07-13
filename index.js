function isSorted(arr){
    for(let i = 0; i < arr.length-1; i++)
        if (arr[i+1] < arr[i]){
            return false;
        }
    return true;
}

function selectionSort(arr){
    let startIndex = 0;

    while(!isSorted(arr)) {
        let min = arr[startIndex];
        let minIndex = startIndex;

        //find min value in arr
        for (let i = startIndex; i < arr.length; i++){
            if (arr[i] < min){
                min = arr[i];
                minIndex = i;
            }
        }

        //swap two positions
        let holder = arr[startIndex];
        arr[startIndex] = min;
        arr[minIndex] = holder;

        //shift new starting point up 
        startIndex += 1;
    }
    return arr;
}

function bubbleSort(arr){
    while(!isSorted(arr)) {
        for(let i = 0; i < arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                //swap
                let holder = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = holder;
            }
        }
    }
    return arr;
}

function insertionSort(arr){
    for(let i=1; i < arr.length; i++){
        let value = arr[i]
        let j= i-1;
        while(value < arr[j] && j>= 0){
            arr[j+1] = arr[j]; //shift
            j--;
        }
        arr[j+1] = value; //place
    }
    return arr;
}

let array1 = [5,4,3,2,1];

console.log(`Unsorted Array: ${array1}`)
console.log(`Selection Sort Output: ${selectionSort(array1)}`);
console.log(`Bubble Sort Output: ${bubbleSort(array1)}`);
console.log(`Insertion Sort Output: ${insertionSort(array1)}`);