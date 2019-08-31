const quickSort = (array) => {
    
    if(array.length <= 1) return array;

    const pivot = array.pop();
    const left = array.filter(e => e <= pivot);
    const right = array.filter(e => e > pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 4, 3, 3, 2, 1]));
