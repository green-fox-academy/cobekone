'use strict'

let tBook: any = {
'William A. Lathan': '405-709-1865',
'John K. Miller': '402-247-8568',
'Hortensia E. Foster': '606-481-6467',
'Amanda D. Newland': '319-243-5613',
'Brooke P. Askew': '307-687-2982'
}

console.log (tBook['John K. Miller'])

/* let eredmeny: string = '';

Object.values(tBook).forEach((value, key) => {
    if (value = '307-687-2982') {
    eredmeny = 'aha';
    console.log(Object.keys(tBook))
    }
}) */

console.log (Object.keys(tBook).find((key: any) => tBook[key] === '307-687-2982'))

if (tBook['Chris E. Myers'] === undefined) {
    console.log ('No we don\'t know it.')
} else {
    console.log ('Yes we know it.')
}