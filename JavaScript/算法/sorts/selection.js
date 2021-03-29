function selection(arr) {
    var length = arr.length;
    var minIndex = 0,
        temp;
    for (let i = 0; i < length; i++) {
        minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }

    return arr

}

// test case
let result = selection([9, 10, 8, 18, 77, 34, 1, 3])
console.log(result)