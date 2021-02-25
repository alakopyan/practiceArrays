const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
  }

for(let single in person){
    console.log(single + ": " + person[single])
}


for(let single in person){
    if (single === 'location') {
        console.log('Where to find: ', person[single])
    }else if(person[single] === 25) {
            console.log(single[0].toUpperCase() + single.slice(1) + ': ' + person[single] + ' ages')
    }
    else {
        let newArr = single.split(/(?=[A-Z])/)
        console.log(single[0].toUpperCase() + newArr.join(' ').slice(1).toLowerCase() + ": " + person[single])
    }
}
