const arr = [31, 10, 'chicken', 9, 'fish', 10];

const strs = arr.filter(el => {
    return typeof(el) == 'string'
});
console.log(strs)

const tens = arr.filter(el => el === 10);
console.log(tens)