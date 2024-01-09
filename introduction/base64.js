//base64
//64 symbols 1 symbol encodes 6 bytes

let hex = '72bca9b68fc16ac7beeb8f849dca1d8a783e8acf9679bf9269f7bf'

let buffer = Buffer.from(hex, 'hex');

let base64 = buffer.toString('base64')

console.log(base64)