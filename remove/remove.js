const arr = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion']

arr.splice(4, 1);
arr.splice(0, 1);
arr.splice(length - 2)
console.log(arr);

// другой способ

const arr2 = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion']

const newarr = arr2.filter(el => el !== 'fish')
console.log(newarr);