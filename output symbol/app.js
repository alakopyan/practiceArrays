const str = 'Я изучаю JavaScript';
const change = str.split('')
console.log(change[0])
console.log(change[2])
console.log(change[change.length - 1])

// slice способ

console.log(str.slice(0, 1));
console.log(str.slice(2, 3));
console.log(str.slice(-1));

// substring способ

console.log(str.substring(0, 1));
console.log(str.substring(2, 3));
console.log(str.substring(str.length - 1));