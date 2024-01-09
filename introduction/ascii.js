//ascii is 7 bit encoding standart (int 127)

const ords = [99, 114, 121, 112, 116, 111, 123, 65, 83, 67, 73, 73, 95, 112, 114, 49, 110, 116, 52, 98, 108, 51, 125]

console.log(ords.map(ord => String.fromCharCode(ord)).join(''));