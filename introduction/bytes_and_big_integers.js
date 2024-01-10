let bigInt = 11515195063862318899931685488813747395775516287289682636499965282714637259206269n

//dec->hex->bytes->ascii

let hex = bigInt.toString(16);

let buffer = Buffer.from(hex, 'hex')

console.log(buffer.toString('ascii'))