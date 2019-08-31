const mergeSort = (array) => {
    if (array.length <= 1) return array;
    return merge(mergeSort(array.slice(0, array.length / 2)), mergeSort(array.slice(array.length / 2)));
}

const merge = (left, right) => {

    let sorted = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }

    return [...sorted, ...left, ...right];
}

console.log(mergeSort([9, 10, 11, 12, 13]));
