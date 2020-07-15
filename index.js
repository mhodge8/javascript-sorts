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

function mergeSort(arr){
    if (arr.length > 1){
        //find midpoint and divide into two arrays
        let mid = (arr.length +1)/2; 
        let arrL = arr.slice(0, mid);
        let arrR = arr.slice(mid, );
        mergeSort(arrL);
        mergeSort(arrR);

        //compares elements from left array and right array, inserts smallest into arr
        let countR = 0;
        let countL = 0;
        let countArr = 0;
        
        while (countR < arrR.length && countL < arrL.length){
            if (arrL[countL] < arrR[countR]){
                arr[countArr] = arrL[countL];
                countL++;
                countArr++;
            } else{
                arr[countArr] = arrR[countR];
                countR++;
                countArr++;
            }
        }

        //adds any remaining elements from arrL or arrR
        while (countR < arrR.length){
            arr[countArr] = arrR[countR];
            countR++;
            countArr++;
        }
        while (countL < arrL.length){
            arr[countArr] = arrL[countL];
            countL++;
            countArr++;
        }  
    }
    return arr;
}

//driver code
let array1 = [5,4,3,2,1];

console.log(`Unsorted Array: ${array1}`)
console.log(`Selection Sort Output: ${selectionSort(array1)}`);
console.log(`Bubble Sort Output: ${bubbleSort(array1)}`);
console.log(`Insertion Sort Output: ${insertionSort(array1)}`);
console.log(`Merge Sort Output: ${mergeSort(array1)}`);