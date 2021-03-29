function bubbling(arr) {
    let temp = null,
        len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

// test case
let result = bubbling([9, 10, 8, 18, 77, 34, 1, 3])
console.log(result)