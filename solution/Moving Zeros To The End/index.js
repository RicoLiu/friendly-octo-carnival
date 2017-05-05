var moveZeros = function (arr) {
    // TODO: Program me
    return arr.filter((element, index, array) => {
        return element !== 0;
    }).concat(arr.filter((element, index, array) => {
        return element === 0;
    }))
}