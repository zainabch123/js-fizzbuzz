// TODO: Write your function in this file

function funcFizzBuzz(lower, upper) {
     const newArray = []
    for (let i = lower; i <= upper; i++) {
    newArray.push(i)
    }
    for (let j = 0; j<=newArray.length; j++) {
        if (newArray[j] % 3 === 0 && newArray[j] % 5 === 0) {
          newArray[j] = 'FizzBuzz'
        } else if (newArray[j] % 5 === 0) {
          newArray[j] = 'Buzz'
        } else if (newArray[j] % 3 === 0) {
          newArray[j] = 'Fizz'
        }
}
return newArray
}

console.log(funcFizzBuzz(1, 3));
console.log(funcFizzBuzz(4, 6));
console.log(funcFizzBuzz(9, 12));


// TODO: Change undefined below to the name of your function
module.exports = funcFizzBuzz;