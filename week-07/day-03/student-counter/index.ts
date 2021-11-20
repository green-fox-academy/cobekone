'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function called listOfNames() that takes a list of students and returns:
// - The name of students who have more than 4 candies

// create a function called sumOfAge() that takes a list of students and returns:
// - The sum of the age of people who have less than 5 candies

export function listOfNames(input: any[]) {
    let nameTemp: any[] = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i].candies > 4) {
            nameTemp = [...nameTemp, input[i].name]
        }   
    }
    console.log (nameTemp)
    return (nameTemp)
}

export function sumOfAge(input: any[]) {
    let ageSum: number = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i].candies < 5) {
            ageSum += input[i].age;
        }   
    }
    console.log (ageSum)
    return (ageSum)
}

listOfNames (students)
sumOfAge (students)