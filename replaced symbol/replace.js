let str = "Я изучаю JavaScipt";

console.log(str.replace("ю", "й"));
console.log(str.replace("JavaScipt", "Frontend"));


// другой способ


str.split('')
let index = str.indexOf('ю');
str = str.substring(0, index) + 'й' + str.substring(index + 1);
console.log(str)

let str2 = "Я изучаю JavaScipt";
let index2 = str2.indexOf('J');
let lenJava = 'JavaScipt'.length
str2 = str2.substring(0, index2) + 'Frontend' + str2.substring(index2 + lenJava);
console.log(str2)