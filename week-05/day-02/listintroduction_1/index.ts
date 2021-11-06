'use strict'

let list: any = {Names: ['John', 'Nancy', 'Joe']

}

console.log (list.Names.length)

list.Names.push("William")

console.log (list)

list.Names.push("John", "Amanda")

console.log (list.Names.length)

console.log (list.Names[2])

list.Names.forEach((value: string) => {
    console.log (value)
});

list.Names.forEach((value: string, index: number) => {
    console.log (index + 1 + ". " + value)
});

list.Names.splice(1, 1)
console.log (list.Names)

list.Names = list.Names.reverse()
list.Names.forEach((value: string) => {
    console.log (value)
});

list.Names.splice(0, list.Names.length)
console.log (list)