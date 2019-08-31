const bubble = (array) => {
    if(!array) return;
    let gotASwap;
    do {
        gotASwap = false;
        for (let i = 1, len = array.length; i < len; i++) {
            if (array[i] < array[i-1]) {
                [array[i], array[i-1]] = [array[i-1], array[i]];
                gotASwap = true;
            }
        }
    } while (gotASwap);
    return array;
}

console.log(bubble([2, 5, 1, 3, 4]));
