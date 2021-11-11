'use strict'

let map: any = {
    '978-1-60309-452-8': 'A letter to',
    '978-1-60309-459-7': 'Lupus',
    '978-1-60309-444-3': 'Red Panda and Moon Bear',
    '978-1-60309-461-0': 'The Lab',
}

for (let key in map){
    let value = map [key]

    console.log (value + ' (ISBN: ' + key + ')')
}

delete map['978-1-60309-444-3'];

console.log (map)

let toDeleteKey = (Object.keys(map).find(key => map[key] === 'The Lab'))
delete map[`${toDeleteKey}`];
console.log (map)

map = {...map, '978-1-60309-450-4': 'They Called Us Enemy', '978-1-60309-453-5': 'Why Did We Trust Him?'}


console.log (map)

if (map['478-0-61159-424-8'] === undefined) {
    console.log ('there isn\'t')
} else {
    console.log ('there is')
}

console.log (map ['978-1-60309-453-5'])