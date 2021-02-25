console.log('hi' + ' you')
// slice
const cars = ['lada', 'bmw', 'volvo', 'fiat', 'honda']
console.log(cars.slice(2,4));
console.log(cars.slice(1));

// splice
const cars2 = ['lada', 'bmw', 'volvo', 'fiat', 'honda']
const newArr = cars2.splice(1, 1, 'kia')
console.log(newArr)
console.log(cars2)

// map
const cars3 = ['lada', 'bmw', 'volvo', 'fiat', 'honda']
const changedCars = cars3.map(car => car.toUpperCase())
console.log(changedCars)

// for
const cars4 = ['lada', 'bmw', 'volvo', 'fiat', 'honda']
for (let i = 0; i < cars4.length; i++){
    console.log(cars4[i]);
}

// forEach
const cars5 = ['lada', 'bmw', 'volvo', 'fiat', 'honda']
cars5.forEach(car => console.log(car));

// filter
const cars6 = ['lada', 'bmw', 'volvo', 'fiat', 'honda']
const fourLett = cars.filter(car => car.length < 5);
console.log(fourLett);

// reduce
const nums = [1, 2, 3, 4, 5].reduce((total, current) => {
    return total * current
}, 1);
console.log(nums)

// sort
const cars7 = ['lada', 'bmw', 'volvo', 'fiat', 'honda'].sort()
console.log(cars7)

// some
const arr = [1, 5, 15, 77, 105];
const double = (el) => el > 9 && el < 100;
console.log(arr.some(double));

// every
const arr2 = [1, 5, 15, 77, 105];
const triple = (el) => el <= 100 ;
console.log(arr.every(triple));