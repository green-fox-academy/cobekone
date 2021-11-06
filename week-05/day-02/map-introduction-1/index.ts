let map: any = {
97: ['a'],
98: ['b'],
99: ['c'],
65: ['A'],
66: ['B'],
67: ['C'],
}

/* console.log (Object.keys(map));
console.log (Object.values(map));
map[68] = ['D']
console.log (map)
console.log (Object.keys(map).length)
console.log (map[99]);
delete map[97];
console.log (map)
console.log (map[100] != undefined) */

Object.keys(map).forEach((value: string) => {
    delete map[value]
});

console.log (map)