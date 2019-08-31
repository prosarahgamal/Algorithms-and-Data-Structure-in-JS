const insertion = (array) => {
    for (let i = 1, len = array.length; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] < array[j]) {
                array.splice(j, 0, array.splice(i, 1)[0]);
            }
        }
    }
    return array;
}

console.log(insertion([5, 2, 1, 4, 3]));
